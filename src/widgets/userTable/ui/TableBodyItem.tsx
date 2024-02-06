import React from 'react';
import { UserType } from 'shared/types';

export const TableBodyItem: React.FC<{ user: UserType }> = ({ user }) => {
    return (
        <tr>
            <td>{user.Id}</td>
            <td>{user.UserName}</td>
            <td>{user.Status}</td>
            <td>{user.IsOnline}</td>
            <td>{user.InterestRate}</td>
            <td>{user.Role}</td>
        </tr>
    );
};
