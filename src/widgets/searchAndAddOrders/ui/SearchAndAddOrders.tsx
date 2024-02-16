import CreateIcon from '@mui/icons-material/Create';
import { Button, Stack } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import { translate } from 'app/common/translate';
import { openModal } from 'features/open-orders-modal/models/ModalStore';
import { SearchOrder } from 'features/search-and-filter-order';
import React from 'react';
import { UserType } from 'shared/types';

import { AddNewOrderModal } from './AddNewOrderModal';

export const SearchAndAddOrders: React.FC<{ users: UserType[]; usersLoading: boolean }> = ({ users, usersLoading }) => {
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <Stack flexDirection={isDesktop ? 'row' : 'column'} sx={{ mt: 4, width: '100%', gap: 2 }}>
            <SearchOrder />
            <Stack justifyContent="flex-end" sx={{ flex: 1 }}>
                <Button
                    variant="outlined"
                    startDecorator={<CreateIcon />}
                    sx={{ height: '50%' }}
                    onClick={() => openModal()}
                    disabled={usersLoading ? true : false}
                >
                    {translate('CreateNewOrder')}
                </Button>
                <AddNewOrderModal users={users} />
            </Stack>
        </Stack>
    );
};
