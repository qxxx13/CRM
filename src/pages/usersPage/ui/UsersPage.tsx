import { Typography } from '@mui/joy';
import React from 'react';
import { SearchAndAddUsers } from 'widgets/addNewUserModal/ui/SearchAndAddUsers';

export const UsersPage: React.FC = () => {
    return (
        <>
            <Typography level="h1">Users</Typography>
            <SearchAndAddUsers />
        </>
    );
};
