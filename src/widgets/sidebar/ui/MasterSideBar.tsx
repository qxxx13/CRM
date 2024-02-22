import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import BuildIcon from '@mui/icons-material/Build';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PaidIcon from '@mui/icons-material/Paid';
import { Avatar, Divider, IconButton, List, Sheet, Stack, Typography } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginedUserType } from 'shared/types/UserType';

import styles from './../styles/styles.module.scss';
import { NavigationButton } from './NavigationButton';

export const MasterSideBar: React.FC = () => {
    const [user, setUser] = useState<LoginedUserType>();
    const navigate = useNavigate();

    const goToActiveOrders = () => navigate('/activeOrders');
    const goToSdOrdersPage = () => navigate('/takeToSD');
    const goToPaymentOrdersPage = () => navigate('/paymentOrders');

    const goToProfile = () => navigate('/profile');

    const logoutHandler = () => {
        localStorage.clear();

        navigate('/login');
    };

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user') as string));
    }, []);

    return (
        <Sheet variant="outlined" className={styles.container} sx={{ position: 'fixed' }}>
            <Stack sx={{ gap: 1 }}>
                <Typography level="h3" sx={{ ml: 2 }}>
                    CRM 0.2.0
                </Typography>
                <Divider />
                <List>
                    <Stack sx={{ gap: 1 }}>
                        <NavigationButton
                            icon={<AccessibilityNewIcon />}
                            name="ActiveOrders"
                            navigate={goToActiveOrders}
                        />
                        <NavigationButton icon={<BuildIcon />} name="SDOrders" navigate={goToSdOrdersPage} />
                        <NavigationButton
                            icon={<PaidIcon />}
                            name="PaymentOrdersPage"
                            navigate={goToPaymentOrdersPage}
                        />
                    </Stack>
                </List>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap={1}>
                <IconButton onClick={goToProfile}>
                    <Avatar />
                </IconButton>

                <Stack>
                    <Typography>{user?.UserName}</Typography>
                    <Typography color="neutral" level="title-sm">
                        Telegram
                    </Typography>
                </Stack>
                <IconButton onClick={logoutHandler}>
                    <ExitToAppIcon />
                </IconButton>
            </Stack>
        </Sheet>
    );
};
