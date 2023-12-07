import { Pagination } from '@mui/material';
import React from 'react';

import { setOrdersPage } from '../models/paginationStore';

export const PaginationOrders: React.FC<{ total: number; perPage: number }> = ({ total, perPage }) => {
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setOrdersPage(value);

    const count = total / perPage;

    return (
        <Pagination
            count={count}
            shape="rounded"
            sx={{ position: 'absolute', bottom: 16, left: '50%' }}
            onChange={handleChange}
        />
    );
};
