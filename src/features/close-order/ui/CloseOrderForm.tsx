import { Box, Button, Input } from '@mui/joy';
import { translate } from 'app/common/translate';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { instance } from 'shared/api';
import { CloseOrderType } from 'shared/types/OrderType';
import { LoginedUserType } from 'shared/types/UserType';

import { closeOrder, closeOrderMessage, getInterestRate, getMasterId } from '../api/CloseOrderApi';

export const CloseOrderForm: React.FC<{ orderId: string; messageId: string; chatId: string }> = ({
    orderId,
    chatId,
    messageId,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CloseOrderType>();
    const onSubmit: SubmitHandler<CloseOrderType> = (data) => calcOrderPrice(data);

    const navigate = useNavigate();

    const [masterId, setMasterId] = useState('');
    const [interestRate, setInterestRate] = useState(0);

    const [userId, setUserId] = useState<number>();

    const calcOrderPrice = async (data: CloseOrderType) => {
        const price = +data.TotalPrice - +data.Expenses;
        const masterSalary = price * (interestRate / 100);

        const companyShare = price - masterSalary;

        await closeOrder(orderId, {
            Price: String(price),
            MasterSalary: String(masterSalary),
            CompanyShare: String(companyShare),
            Expenses: data.Expenses,
            TotalPrice: data.TotalPrice,
            Comments: data.Comments,
        });

        await instance
            .patch(`/bot/close?chatId=${chatId}&messageId=${messageId}&orderId=${orderId}`)
            .then((res) => res.data);
        await instance.patch(`/orders/status?id=${orderId}&status=awaitingPayment`).then((res) => res.data);

        navigate('/activeOrders');
    };

    const getData = async () => {
        const masterId = await getMasterId(orderId);
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
