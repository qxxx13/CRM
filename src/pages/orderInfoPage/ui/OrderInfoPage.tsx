import { LinearProgress } from '@mui/joy';
import { useStore } from 'effector-react';
import { OrderInfo } from 'entities/index';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrderType, UserType } from 'shared/types';

import { $orderInfoStoreGetStatus, fetchOrderFx } from '../models/orderInfoStore';
import { $userOrderInfoGetStatus, fetchUserByIdFx } from '../models/userOrderInfoStore';

export const OrderInfoPage: React.FC = () => {
    const orderId = useParams().id;

    const { data: order, loading } = useStore($orderInfoStoreGetStatus);
    const { data: user } = useStore($userOrderInfoGetStatus);

    useEffect(() => {
        fetchOrderFx({ orderId: orderId as string });
        if (order.MasterId) {
            fetchUserByIdFx({ userId: String(order.MasterId) });
        }
    }, [order.MasterId]);

    return (
        <>
            {!loading && user && order ? (
                <OrderInfo order={order as OrderType} user={user as UserType} />
            ) : (
                <LinearProgress thickness={1} />
            )}
        </>
    );
};
