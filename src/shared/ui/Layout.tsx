import { Box } from '@mui/joy';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
    return <Box sx={{ ml: '220px', p: 2 }}>{children}</Box>;
};
