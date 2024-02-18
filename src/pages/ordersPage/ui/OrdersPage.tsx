import { Box, LinearProgress, Skeleton, Typography } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import { translate } from 'app/common/translate';
import { useStore } from 'effector-react';
import { $paginationStore, PaginationOrders } from 'features/pagination-orders';
import { $phoneNumberFilterStore, $statusFiltersStore } from 'features/search-and-filter-order';
import React, { useEffect } from 'react';
import { OrdersList } from 'widgets/orderList/ui/OrdersList';
import { OrderTable } from 'widgets/orderTable';
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
        fetchOrdersFx({ page: page, perPage: 12, status: status, phoneNumber: phoneNumber });
        fetchUsersFx();
    }, [page, status, phoneNumber]);

    const currentDisplayMode = isDesktop ? (
        <OrderTable orders={data.data} users={users} />
    ) : (
        <OrdersList orders={data.data} users={users} />
    );

    return (
        <Box>
            <Typography level="h1">Orders</Typography>
            <SearchAndAddOrders users={users} usersLoading={usersLoading} />

            {!loading ? currentDisplayMode : <LinearProgress thickness={1} />}

            {!loading && <PaginationOrders total={data.meta.total} perPage={data.meta.perPage} />}
        </Box>
    );
};
