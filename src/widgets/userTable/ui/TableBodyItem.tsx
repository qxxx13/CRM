import { Button } from '@mui/joy';
import { translate } from 'app/common/translate';
import React from 'react';
import { UserType } from 'shared/types';

import { deleteUserById } from '../api/UsersTableApi';

export const TableBodyItem: React.FC<{ user: UserType }> = ({ user }) => {
    const handleDeleteUser = () => {
        deleteUserById(String(user.Id));
    };

    return (
        <tr>
            <td>{user.Id}</td>
            <td>{user.UserName}</td>
            <td>{translate(user.Status)}</td>
            <td>{user.IsOnline}</td>
            <td>{user.InterestRate}</td>
            <td>{translate(user.Role)}</td>
            <td>
                <Button>{translate('EditUser')}</Button>
            </td>
            <td>
                <Button onClick={handleDeleteUser} color="danger">
                    {translate('DeleteUser')}
                </Button>
            </td>
        </tr>
    );
};
