import { Box, Button, Input } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CloseOrderType } from 'shared/types/OrderType';

import { getInterestRate, getMasterId, patchMasterSalary, patchOrderPrice } from '../api/api';
import { CloseMasterOrderFx, CloseOrderFx } from '../model/closeOrderStore';

export const CloseOrderForm: React.FC<{ id: string }> = ({ id }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CloseOrderType>();
    const onSubmit: SubmitHandler<CloseOrderType> = (data) => calcOrderPrice(data);

    const [masterId, setMasterId] = useState('');
    const [interestRate, setInterestRate] = useState(0);
    const [salary, setSalary] = useState(0);

    const calcOrderPrice = async (data: CloseOrderType) => {
        const price = +data.Total - +data.Expenses;
        const salary = price * (interestRate / 100);

        setSalary(salary);

        CloseOrderFx({ id: id, price: String(price) });
        CloseMasterOrderFx({ id: id, salary: String(salary) });
    };

    const getData = async () => {
        const masterId = await getMasterId(id);
        const interestRate = await getInterestRate(masterId);

        setMasterId(String(masterId));
        setInterestRate(interestRate);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Input
                    {...register('Total', { required: true })}
                    placeholder="Забрал"
                    color={errors.Total ? 'danger' : 'neutral'}
                    type="number"
                />
                <Input {...register('Expenses')} placeholder="Расход" type="number" color="neutral" />
                <Input
                    {...register('Comments')}
                    placeholder="Комментарии"
                    defaultValue={''}
                    type="text"
                    color="neutral"
                />
                <Input {...register('Salary')} value={salary} readOnly placeholder="К сдаче" />

                <Button variant="outlined" type="submit">
                    Закрыть заявку
                </Button>
            </Box>
        </form>
    );
};
