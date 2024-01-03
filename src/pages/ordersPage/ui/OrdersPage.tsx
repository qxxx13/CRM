import { Box, CircularProgress, Grid, Typography } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import { useStore } from 'effector-react';
import { PaginationOrders } from 'features/pagination-orders';
import { $paginationStore } from 'features/pagination-orders/models/paginationStore';
import {
    $phoneNumberFilterStore,
    $statusFiltersStore,
} from 'features/search-and-filter-order/models/searchAndFiltersStore';
import React, { useEffect } from 'react';
import { OrderCard } from 'widgets/orderCard';
import { SearchAndAddOrders } from 'widgets/searchAndAddOrders';

import { $ordersGetStatus, fetchOrdersFx } from '../models/odersStore';
import { $usersGetStatus, fetchUsersFx } from '../models/usersStore';

export const OrdersPage: React.FC = () => {
    const { data, error, loading } = useStore($ordersGetStatus);
    const { data: users, error: usersError, loading: usersLoading } = useStore($usersGetStatus);
    const page = useStore($paginationStore);
    const status = useStore($statusFiltersStore);
    const phoneNumber = useStore($phoneNumberFilterStore);

    const isDesktop = useMediaQuery('(min-width:600px)');

    useEffect(() => {
        fetchOrdersFx({ page: page, perPage: 18, status: status, phoneNumber: phoneNumber });
        fetchUsersFx();
    }, [page, status, phoneNumber]);

    const orders = data.data.map((order) => <OrderCard OrderObj={order} key={order.Id} />);

    return (
        <Box>
            <Typography level="h1">Orders</Typography>
            <SearchAndAddOrders users={users} usersLoading={usersLoading} />
            <Grid
                container
                spacing={2}
                sx={{ mt: 2, flexGrow: 1, width: '100%' }}
                flexDirection={isDesktop ? 'row' : 'column'}
            >
                {!loading ? <>{orders}</> : <CircularProgress sx={{ justifyItems: 'center', width: '100%' }} />}
                {!loading && orders.length === 0 && (
                    <Typography level="h3" sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        Not found
                    </Typography>
                )}
            </Grid>
            <PaginationOrders total={data.meta.total} perPage={data.meta.perPage} />
        </Box>
    );
};
