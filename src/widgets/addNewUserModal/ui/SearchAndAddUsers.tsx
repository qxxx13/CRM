import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, FormLabel, Input, Stack } from '@mui/joy';
import { translate } from 'app/common/translate';
import { OpenUsersModalButton } from 'features/open-users-modal';
import React from 'react';

import { AddNewUserModal } from './AddNewUserModal';

export const SearchAndAddUsers: React.FC = () => {
    return (
        <Stack flexDirection="row" sx={{ mt: 4, gap: 2 }} alignItems="flex-end">
            <FormControl sx={{ flex: 2 }}>
                <FormLabel>{translate('SearchForAnUser')}</FormLabel>
                <Input startDecorator={<SearchIcon />} />
            </FormControl>
            <Button variant="outlined" sx={{ height: '50%', flex: 1 }}>
                {translate('Search')}
            </Button>
            <OpenUsersModalButton />
            <AddNewUserModal />
        </Stack>
    );
};
