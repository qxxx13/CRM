import { Button, Stack, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserType } from 'shared/types';

export const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<UserType | Record<string, unknown>>({});
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user') || '{}') as UserType);
    }, []);

    const goToActiveOrders = () => navigate('/activeOrders');

    return (
        <Stack sx={{ gap: 2 }}>
            <Typography level="h3">{user.UserName}</Typography>
            <Typography level="h3">{user.Role}</Typography>

            <Button onClick={goToActiveOrders}>{translate('goToActiveOrders')}</Button>
        </Stack>
    );
};
