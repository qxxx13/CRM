import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import { OpenUsersModalButton } from 'features/open-users-modal/ui/OpenUsersModalButton';
import React from 'react';

import { AddNewUserModal } from './AddNewUserModal';

export const SearchAndAddUsers: React.FC = () => {
    return (
        <Stack flexDirection="row" sx={{ mt: 4, gap: 2 }} alignItems="flex-end">
            <FormControl sx={{ flex: 2 }}>
                <FormLabel>Search for an user</FormLabel>
                <Input startDecorator={<SearchIcon />} />
            </FormControl>
            <Button variant="outlined" sx={{ height: '50%', flex: 1 }}>
                Search
            </Button>
            <OpenUsersModalButton />
            <AddNewUserModal />
        </Stack>
    );
};
