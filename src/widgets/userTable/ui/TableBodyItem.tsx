import { Button } from '@mui/joy';
import React from 'react';
import { UserType } from 'shared/types';

import { deleteUserById } from '../api/api';

export const TableBodyItem: React.FC<{ user: UserType }> = ({ user }) => {
    const handleDeleteUser = () => {
        deleteUserById(String(user.Id));
    };

    return (
        <tr>
            <td>{user.Id}</td>
            <td>{user.UserName}</td>
            <td>{user.Status}</td>
            <td>{user.IsOnline}</td>
            <td>{user.InterestRate}</td>
            <td>{user.Role}</td>
            <td>
                <Button>Edit user</Button>
            </td>
            <td>
                <Button onClick={handleDeleteUser}>Delete user</Button>
            </td>
        </tr>
    );
};
