import { Box, Button, Input } from '@mui/joy';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CloseOrderType } from 'shared/types/OrderType';

import { CloseOrderFx } from '../model/closeOrderStore';

export const CloseOrderForm: React.FC<{ id: string }> = ({ id }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CloseOrderType>();
    const onSubmit: SubmitHandler<CloseOrderType> = (data) => calcOrderPrice(data);

    const calcOrderPrice = (data: CloseOrderType) => {
        const price = +data.Total - +data.Expenses;

        CloseOrderFx({ id: id, price: String(price) });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Input
                    {...register('Total', { required: true })}
                    placeholder="Забрал"
                    color={errors.Total ? 'danger' : 'neutral'}
                    type="number"
                />
                <Input {...register('Expenses')} placeholder="Расход" defaultValue={0} type="number" />
                <Input {...register('Comments')} placeholder="Комментарии" defaultValue={''} type="text" />

                <Button variant="outlined" type="submit">
                    Закрыть заявку
                </Button>
            </Box>
        </form>
    );
};
