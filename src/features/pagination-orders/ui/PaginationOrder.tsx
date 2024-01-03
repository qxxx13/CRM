import { Pagination } from '@mui/material';
import React from 'react';

import { setOrdersPage } from '../models/paginationStore';

export const PaginationOrders: React.FC<{ total: number; perPage: number }> = ({ total, perPage }) => {
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setOrdersPage(value);

    const count = Math.ceil(total / perPage);

    return (
        <Pagination
            count={count}
            shape="rounded"
            onChange={handleChange}
            sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}
        />
    );
};
