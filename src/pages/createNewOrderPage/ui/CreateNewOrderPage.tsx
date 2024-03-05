import { LinearProgress, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import { AddNewOrderForm } from 'features/add-new-order';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserType } from 'shared/types';

type LocationState = {
    users: UserType[];
    usersLoading: boolean;
};

export const CreateNewOrderPage: React.FC = () => {
    const location = useLocation();

    const { users, usersLoading } = location.state as LocationState;

    return (
        <>
            <Typography level="title-lg">{translate('AddNewOrder')}</Typography>
            {!usersLoading ? <AddNewOrderForm users={users} /> : <LinearProgress thickness={1} />}
        </>
    );
};
