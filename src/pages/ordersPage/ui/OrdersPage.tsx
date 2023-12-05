import { Box, CircularProgress, Grid, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { PaginationOrders } from 'features/pagination-orders';
import React, { useEffect } from 'react';
import { OrderCard } from 'widgets/orderCard';
import { SearchAndAddOrders } from 'widgets/searchAndAddOrders';

import { $ordersGetStatus, fetchOrdersFx } from '../models/odersStore';
import { $usersGetStatus, fetchUsersFx } from '../models/usersStore';

export const OrdersPage: React.FC = () => {
    const { data, error, loading } = useStore($ordersGetStatus);
    const { data: users, error: usersError, loading: usersLoading } = useStore($usersGetStatus);

    useEffect(() => {
        fetchOrdersFx();
        fetchUsersFx();
    }, []);

    const orders = data.map((order) => <OrderCard OrderObj={order} key={order.Id} />);

    return (
        <Box>
            <Typography level="h1">Orders</Typography>
            <SearchAndAddOrders users={users} usersLoading={usersLoading} />
            <Grid container spacing={2} sx={{ mt: 2, flexGrow: 1 }}>
                {!loading ? (
                    <>{orders}</>
                ) : (
                    <CircularProgress sx={{ display: 'flex', justifyItems: 'center', width: '100%' }} />
                )}
            </Grid>
            <PaginationOrders />
        </Box>
    );
};
