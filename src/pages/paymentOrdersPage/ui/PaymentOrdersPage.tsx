import { Box, LinearProgress, Option, Select, Typography } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import { translate } from 'app/common/translate';
import { useStore } from 'effector-react';
import { $paginationStore, PaginationOrders } from 'features/pagination-orders';
import React, { useEffect, useState } from 'react';
import { UserType } from 'shared/types';
import { OrdersList } from 'widgets/orderList';
import { OrderTable } from 'widgets/orderTable';

import { $ordersGetStatus, fetchOrdersFx } from '../models/odersStore';
import { $usersGetStatus, fetchUsersFx } from '../models/usersStore';

export const PaymentOrdersPage: React.FC<{ currentUser: UserType }> = ({ currentUser }) => {
    const [selectedUser, setSelectedUser] = useState<number>(currentUser.Id);

    const { data, error, loading } = useStore($ordersGetStatus);
    const { data: users, error: usersError, loading: usersLoading } = useStore($usersGetStatus);
    const page = useStore($paginationStore);

    const isDesktop = useMediaQuery('(min-width:600px)');

    const currentDisplayMode = isDesktop ? (
        <OrderTable orders={data.data} users={users} currentUser={currentUser} />
    ) : (
        <OrdersList orders={data.data} users={users} currentUser={currentUser} />
    );

    const handleSelectChange = (selectedUser: number) => {
        setSelectedUser(selectedUser);
    };

    const userSelect = (
        <Select
            sx={{ mt: 2 }}
            defaultValue={currentUser.Id}
            onChange={(event, user) => handleSelectChange(user as number)}
        >
            {users.map((user, index) => (
                <Option value={user.Id} key={index}>
                    {user.UserName}
                </Option>
            ))}
        </Select>
    );

    let totalCompanyShare = 0;

    data.data.map((order) => {
        totalCompanyShare = totalCompanyShare + (order.CompanyShare as number);
    });

    useEffect(() => {
        fetchOrdersFx({ page: page, perPage: 12, userId: String(selectedUser) });
        fetchUsersFx();
    }, [selectedUser]);

    return (
        <Box>
            <Typography level="h1" textAlign={isDesktop ? 'left' : 'center'}>
                {translate('PaymentOrdersPage')}
            </Typography>
            {currentUser.Role === 'admin' ? userSelect : <></>}
            {!loading && (
                <Typography level="h4" sx={{ m: '8px 0 8px 0' }}>
                    Всего к сдаче: {totalCompanyShare} ₽
                </Typography>
            )}
            {!loading ? currentDisplayMode : <LinearProgress thickness={1} />}

            {!loading && !error && <PaginationOrders total={data.meta.total} perPage={data.meta.perPage} />}
        </Box>
    );
};
