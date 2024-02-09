import { Typography } from '@mui/joy';
import React from 'react';
import { SearchAndAddUsers } from 'widgets/addNewUserModal/ui/SearchAndAddUsers';
import { UserTable } from 'widgets/userTable';

export const UsersPage: React.FC = () => {
    return (
        <>
            <Typography level="h1">Users</Typography>
            <SearchAndAddUsers />
            <UserTable />
        </>
    );
};
