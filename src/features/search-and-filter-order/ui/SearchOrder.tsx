import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, FormLabel, Input, Option, Select, Stack } from '@mui/joy';
import { translate } from 'app/common/translate';
import { setOrdersPage } from 'features/pagination-orders';
import React, { useState } from 'react';
import { OrderStatusEnum } from 'shared/types';

import { setPhoneNumberFilter, setStatusFilter } from '../models/searchAndFiltersStore';

export const SearchOrder: React.FC = () => {
    const [status, setStatus] = useState<OrderStatusEnum | 'all'>('all');
    const [searchValue, setSearchValue] = useState('');

    const handleClick = () => {
        setPhoneNumberFilter(searchValue);
        setStatusFilter(status);
        setOrdersPage(1);
    };

    const StatusOptions = Object.values(OrderStatusEnum).map((status, index) => (
        <Option value={status} key={index}>
            {translate(status)}
        </Option>
    ));

    return (
        <>
            <FormControl sx={{ flex: 1 }}>
                <FormLabel id="search-label">{translate('SearchForAnOrder')}</FormLabel>
                <Input
                    placeholder="search"
                    startDecorator={<SearchIcon />}
                    onChange={(event) => setSearchValue(event.target.value)}
                />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
                <FormLabel id="select-filter-search">{translate('SearchBy')}</FormLabel>
                <Select placeholder="search by">
                    <Option value="phoneNumber">phoneNumber</Option>
                    <Option value="address">address</Option>
                    <Option value="all">all</Option>
                </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
                <FormLabel id="select-filter-status">{translate('FilterByStatus')}</FormLabel>
                <Select
                    placeholder="filter by status"
                    defaultValue="all"
                    onChange={(event, value) => setStatus(value as OrderStatusEnum | 'all')}
                >
                    {StatusOptions}
                    <Option value="all">{translate('all')}</Option>
                </Select>
            </FormControl>
            <Stack justifyContent="flex-end" sx={{ flex: 1 }}>
                <Button
                    variant="outlined"
                    startDecorator={<FilterAltIcon />}
                    sx={{ height: '50%' }}
                    onClick={handleClick}
                >
                    {translate('Search')}
                </Button>
            </Stack>
        </>
    );
};
