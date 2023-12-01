import { Box, Grid, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { PaginationOrders } from 'features/pagination-orders';
import React, { useEffect } from 'react';
import { OrderCard } from 'widgets/orderCard';
import { SearchAndAddOrders } from 'widgets/searchAndAddOrders';

import { $ordersGetStatus, fetchOrdersFx } from '../models/odersStore';

export const OrdersPage: React.FC = () => {
    const { data, error, loading } = useStore($ordersGetStatus);

    console.log(data, error, loading);

    useEffect(() => {
        fetchOrdersFx();
    }, []);

    return (
        <Box>
            <Typography level="h1">Orders</Typography>
            <SearchAndAddOrders />
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid xs={2}>
                    <OrderCard />
                </Grid>
            </Grid>
            <PaginationOrders />
        </Box>
    );
};
