import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import RouteIcon from '@mui/icons-material/Route';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton, Input, List, Sheet, Stack, Typography } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginedUserType } from 'shared/types/UserType';

import styles from './../styles/styles.module.scss';
import { NavigationButton } from './NavigationButton';

export const SideBar: React.FC = () => {
    const [user, setUser] = useState<LoginedUserType>();
    const navigate = useNavigate();

    const goToOrdersPage = () => navigate('/orders');
    const goToHomePage = () => navigate('/');
    const goToUsersPage = () => navigate('/users');
    const goToActiveOrders = () => navigate('/activeOrders');
    const goToPaymentOrdersPage = () => navigate('/paymentOrders');
    const goToDebtOrdersPage = () => navigate('/debtOrders');
    const goToPromRoutesPage = () => navigate('/promRoutes');

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
                <Stack flexDirection="row" alignItems="center" sx={{ gap: 1, mt: 1 }}>
                    <IconButton variant="outlined" onClick={goToHomePage}>
                        <HomeIcon />
                    </IconButton>
                    <Typography level="h4">CRM</Typography>
                </Stack>
                <Input startDecorator={<SearchIcon fontSize="small" />} />
                <List>
                    <Stack sx={{ gap: 1 }}>
                        <NavigationButton icon={<HomeIcon />} name="Home" navigate={goToHomePage} />
                        <NavigationButton icon={<AssignmentIcon />} name="Orders" navigate={goToOrdersPage} />
                        <NavigationButton icon={<AccountBoxIcon />} name="Users" navigate={goToUsersPage} />
                        <NavigationButton
                            icon={<AccessibilityNewIcon />}
                            name="ActiveOrders"
                            navigate={goToActiveOrders}
                        />
                        <NavigationButton
                            icon={<PaidIcon />}
                            name="PaymentOrdersPage"
                            navigate={goToPaymentOrdersPage}
                        />
                        <NavigationButton
                            icon={<CurrencyExchangeIcon />}
                            name="DebtOrdersPage"
                            navigate={goToDebtOrdersPage}
                        />
                        <NavigationButton icon={<RouteIcon />} name="PromRoutesPage" navigate={goToPromRoutesPage} />
                    </Stack>
                </List>
            </Stack>
            <Stack flexDirection="row" alignItems="center" sx={{ mb: 1 }} justifyContent="space-between">
                <Stack flexDirection="row">
                    <IconButton onClick={goToProfile}>
                        <Avatar />
                    </IconButton>

                    <Stack>
                        <Typography>{user?.UserName}</Typography>
                        <Typography color="neutral" level="title-sm">
                            {user?.Role}
                        </Typography>
                    </Stack>
                </Stack>
                <IconButton onClick={logoutHandler}>
                    <ExitToAppIcon />
                </IconButton>
            </Stack>
        </Sheet>
    );
};
