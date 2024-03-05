import { Box, Button, Input, LinearProgress } from '@mui/joy';
import { translate } from 'app/common/translate';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CloseOrderType } from 'shared/types/OrderType';
import { LoginedUserType } from 'shared/types/UserType';

import { closeOrder, getInterestRate, getMasterId } from '../api/CloseOrderApi';
import { $orderGetStatus, fetchOrderFx } from '../model/closeOrderStore';

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
    const { data: order, error, loading } = useStore($orderGetStatus);

    const [masterId, setMasterId] = useState('');
    const [interestRate, setInterestRate] = useState(0);

    const [userId, setUserId] = useState<number>();

    const calcOrderPrice = async (data: CloseOrderType) => {
        const price = +data.TotalPrice - +data.Expenses;
        const masterSalary = price * (interestRate / 100);

        const companyShare = price - masterSalary;

        await closeOrder(
            orderId,
            {
                Price: String(price),
                MasterSalary: String(masterSalary),
                CompanyShare: String(companyShare),
                Expenses: data.Expenses,
                TotalPrice: data.TotalPrice,
                Comments: data.Comments,
                Debt: data.Debt,
            },
            chatId,
            messageId,
        );

        navigate('/paymentOrders');
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

        fetchOrderFx({ orderId: orderId });

        setUserId(+user.Id);
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {!loading ? (
                    <>
                        <Input
                            {...register('TotalPrice', { required: true })}
                            placeholder="Забрал"
                            color={errors.TotalPrice ? 'danger' : 'neutral'}
                            type="number"
                            defaultValue={order.Total as number}
                        />
                        <Input
                            {...register('Expenses')}
                            placeholder="Расход"
                            type="number"
                            color="neutral"
                            defaultValue={order.Expenses as number}
                        />
                        <Input
                            {...register('Debt')}
                            placeholder="Долг"
                            defaultValue={order.Debt as number}
                            type="number"
                            color="neutral"
                        />
                        <Input
                            {...register('Comments')}
                            placeholder="Комментарии"
                            defaultValue={order.Comments as string}
                            type="text"
                            color="neutral"
                        />

                        <Button variant="outlined" type="submit">
                            {translate('CloseOrder')}
                        </Button>
                    </>
                ) : (
                    <LinearProgress thickness={1} />
                )}
            </Box>
        </form>
    );
};
