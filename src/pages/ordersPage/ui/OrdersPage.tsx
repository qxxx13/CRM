import CreateIcon from '@mui/icons-material/Create';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, FormControl, FormLabel, Grid, Input, Option, Select, Stack, Typography } from '@mui/joy';
import { Pagination } from '@mui/material';
import React from 'react';
import { OrderCard } from 'widgets/orderCard';

export const OrdersPage: React.FC = () => {
    return (
        <Box>
            <Typography level="h1">Orders</Typography>
            <Stack flexDirection="row" sx={{ mt: 4, width: '100%', gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel id="search-label">Search for an order</FormLabel>
                    <Input placeholder="search" startDecorator={<SearchIcon />} />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel id="select-filter-search">Search by</FormLabel>
                    <Select placeholder="search by">
                        <Option value="test1">test1</Option>
                        <Option value="test2">test2</Option>
                    </Select>
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                    <FormLabel id="select-filter-status">Status</FormLabel>
                    <Select placeholder="filter by status">
                        <Option value="test1">test1</Option>
                        <Option value="test2">test2</Option>
                    </Select>
                </FormControl>
                <Stack justifyContent="flex-end" sx={{ flex: 1 }}>
                    <Button variant="outlined" startDecorator={<FilterAltIcon />} sx={{ height: '50%' }}>
                        Filter
                    </Button>
                </Stack>
                <Stack justifyContent="flex-end" sx={{ flex: 1 }}>
                    <Button variant="outlined" startDecorator={<CreateIcon />} sx={{ height: '50%' }}>
                        New Order
                    </Button>
                </Stack>
            </Stack>
            <Grid sx={{ mt: 2 }}>
                <OrderCard />
            </Grid>
            <Pagination count={10} shape="rounded" sx={{ position: 'absolute', bottom: 16, left: '50%' }} />
        </Box>
    );
};
