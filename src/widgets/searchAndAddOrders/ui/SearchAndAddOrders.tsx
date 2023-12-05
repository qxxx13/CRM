import CreateIcon from '@mui/icons-material/Create';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, FormLabel, Input, Option, Select, Stack } from '@mui/joy';
import { openModal } from 'features/open-orders-modal/models/ModalStore';
import React from 'react';
import { UserType } from 'shared/types';

import { AddNewOrderModal } from './AddNewOrderModal';

export const SearchAndAddOrders: React.FC<{ users: UserType[]; usersLoading: boolean }> = ({ users, usersLoading }) => {
    return (
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
                <Button
                    variant="outlined"
                    startDecorator={<CreateIcon />}
                    sx={{ height: '50%' }}
                    onClick={() => openModal()}
                    disabled={usersLoading ? true : false}
                >
                    New Order
                </Button>
                <AddNewOrderModal users={users} />
            </Stack>
        </Stack>
    );
};
