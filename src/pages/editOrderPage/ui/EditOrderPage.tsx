import { LinearProgress, Stack, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { EditOrderForm } from 'features/edit-order';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrderType } from 'shared/types';

import { $orderGetStatus, fetchOrderFx } from '../models/odersStore';
import { $usersGetStatus, fetchUsersFx } from '../models/usersStore';

export const EditOrderPage: React.FC = () => {
    const { data, error, loading } = useStore($orderGetStatus);
    const { data: users, error: usersError, loading: usersLoading } = useStore($usersGetStatus);

    const id = useParams().id;

    useEffect(() => {
        fetchOrderFx({ orderId: id as string });
        fetchUsersFx();
    }, []);

    return (
        <Stack>
            <Typography level="h3">Редактирование заявки №{data.Id}</Typography>
            {!loading && data ? (
                <EditOrderForm order={data as OrderType} users={users} />
            ) : (
                <LinearProgress thickness={1} />
            )}
        </Stack>
    );
};
