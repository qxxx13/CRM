import { Pagination } from '@mui/material';
import React from 'react';

export const PaginationOrders: React.FC = () => {
    return <Pagination count={10} shape="rounded" sx={{ position: 'absolute', bottom: 16, left: '50%' }} />;
};
