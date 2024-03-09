import { Stack } from '@mui/joy';
import { Pagination } from '@mui/material';
import React from 'react';

import { setOrdersPage } from '../models/paginationStore';

export const PaginationOrders: React.FC<{ total: number; perPage: number }> = ({ total, perPage }) => {
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setOrdersPage(value);

    const count = Math.ceil(total / perPage);

    return (
        <>
            {count <= 1 ? (
                <></>
            ) : (
                <Stack justifyContent="center" flexDirection="row" sx={{ mt: '10px' }}>
                    <Pagination count={count || 1} shape="rounded" onChange={handleChange} />
                </Stack>
            )}
        </>
    );
};
