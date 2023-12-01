import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, FormLabel, Input, Option, Select, Stack } from '@mui/joy';
import React from 'react';

export const SearchOrder: React.FC = () => {
    return (
        <>
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
        </>
    );
};
