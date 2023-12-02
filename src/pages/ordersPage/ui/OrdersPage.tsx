import { Box, CircularProgress, Grid, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { PaginationOrders } from 'features/pagination-orders';
import React, { useEffect } from 'react';
import { OrderCard } from 'widgets/orderCard';
import { SearchAndAddOrders } from 'widgets/searchAndAddOrders';

import { $ordersGetStatus, fetchOrdersFx } from '../models/odersStore';

export const OrdersPage: React.FC = () => {
    const { data, error, loading } = useStore($ordersGetStatus);

    useEffect(() => {
        fetchOrdersFx();
    }, []);

    const orders = data.map((order) => <OrderCard OrderObj={order} key={order.Id} />);

    return (
        <Box>
            <Typography level="h1">Orders</Typography>
            <SearchAndAddOrders />
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
