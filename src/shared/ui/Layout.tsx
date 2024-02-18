import { Box } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
    const isDesktop = useMediaQuery('(min-width:600px)');

    return <>{isDesktop ? <Box sx={{ ml: '220px', p: 2 }}>{children}</Box> : <Box sx={{ p: 2 }}>{children}</Box>};</>;
};
