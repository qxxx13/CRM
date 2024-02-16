import { Box, Button, Input } from '@mui/joy';
import { translate } from 'app/common/translate';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CloseOrderType } from 'shared/types/OrderType';
import { LoginedUserType } from 'shared/types/UserType';

import { closeOrder, closeOrderMessage, getInterestRate, getMasterId } from '../api/CloseOrderApi';

export const CloseOrderForm: React.FC<{ id: string }> = ({ id }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CloseOrderType>();
    const onSubmit: SubmitHandler<CloseOrderType> = (data) => calcOrderPrice(data);

    const [masterId, setMasterId] = useState('');
    const [interestRate, setInterestRate] = useState(0);

    const [userId, setUserId] = useState<number>();

    const calcOrderPrice = async (data: CloseOrderType) => {
        const price = +data.TotalPrice - +data.Expenses;
        const masterSalary = price * (interestRate / 100);

        const companyShare = price - masterSalary;

        await closeOrder(id, {
            Price: String(price),
            MasterSalary: String(masterSalary),
            CompanyShare: String(companyShare),
            Expenses: data.Expenses,
            TotalPrice: data.TotalPrice,
            Comments: data.Comments,
        });
        await closeOrderMessage(id, masterId);

        window.close();
    };

    const getData = async () => {
        const masterId = await getMasterId(id);
        const interestRate = await getInterestRate(masterId);

        setMasterId(String(masterId));
        setInterestRate(interestRate);
    };

    useEffect(() => {
        getData();

        const user: LoginedUserType = JSON.parse(localStorage.getItem('user') as string);

        setUserId(+user.Id);
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Input
                    {...register('TotalPrice', { required: true })}
                    placeholder="Забрал"
                    color={errors.TotalPrice ? 'danger' : 'neutral'}
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
                <Button variant="outlined" type="submit">
                    {translate('CloseOrder')}
                </Button>
            </Box>
        </form>
    );
};
