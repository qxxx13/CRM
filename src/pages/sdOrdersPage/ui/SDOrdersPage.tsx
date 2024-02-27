import { Box, LinearProgress, Typography } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import { translate } from 'app/common/translate';
import { useStore } from 'effector-react';
import { $paginationStore, PaginationOrders } from 'features/pagination-orders';
import React, { useEffect } from 'react';
import { UserType } from 'shared/types';
import { OrdersList } from 'widgets/orderList';
import { OrderTable } from 'widgets/orderTable';

import { $ordersGetStatus, fetchOrdersFx } from '../models/odersStore';
import { $usersGetStatus, fetchUsersFx } from '../models/usersStore';

export const SDOrdersPage: React.FC<{ currentUser: UserType }> = ({ currentUser }) => {
    const { data, error, loading } = useStore($ordersGetStatus);
    const { data: users, error: usersError, loading: usersLoading } = useStore($usersGetStatus);
    const page = useStore($paginationStore);

    const isDesktop = useMediaQuery('(min-width:600px)');

    useEffect(() => {
        fetchOrdersFx({ page: page, perPage: 12, userId: String(currentUser.Id) });
        fetchUsersFx();
    }, []);

    const currentDisplayMode = isDesktop ? (
        <OrderTable orders={data.data} users={users} currentUser={currentUser} />
    ) : (
        <OrdersList orders={data.data} users={users} currentUser={currentUser} />
    );

    return (
        <Box>
            <Typography level="h1" textAlign={isDesktop ? 'left' : 'center'}>
                {translate('SDOrders')}
            </Typography>
            {!loading ? currentDisplayMode : <LinearProgress thickness={1} />}

            {!loading && !error && <PaginationOrders total={data.meta.total} perPage={data.meta.perPage} />}
        </Box>
    );
};
