import { CircularProgress, Sheet, Table } from '@mui/joy';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';

import { $usersGetStatus, fetchUsersFx } from '../model/userStore';
import { TableBodyItem } from './TableBodyItem';

export const UserTable: React.FC = () => {
    const { data: users, error, loading } = useStore($usersGetStatus);

    useEffect(() => {
        fetchUsersFx();
    }, []);

    const usersBodyTable = users.map((user, index) => <TableBodyItem user={user} key={index} />);

    return (
        <Sheet variant="outlined" sx={{ mt: 2, borderRadius: 5 }}>
            <Table borderAxis="bothBetween" variant="soft" color="neutral">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>IsOnline</th>
                        <th>InterestRate</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>{!loading ? usersBodyTable : <CircularProgress />}</tbody>
            </Table>
        </Sheet>
    );
};
