import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import {
    Avatar,
    IconButton,
    Input,
    List,
    ListItem,
    ListItemButton,
    ListItemDecorator,
    Sheet,
    Stack,
    Typography,
} from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './../styles/styles.module.scss';

export const SideBar: React.FC = () => {
    const navigate = useNavigate();

    const goToOrdersPage = () => navigate('/orders');
    const goToHomePage = () => navigate('/');

    return (
        <Sheet variant="outlined" className={styles.container} sx={{ position: 'fixed' }}>
            <Stack sx={{ gap: 1 }}>
                <Stack flexDirection="row" alignItems="center" sx={{ gap: 1 }}>
                    <IconButton variant="outlined" onClick={goToHomePage}>
                        <HomeIcon />
                    </IconButton>
                    <Typography level="h4">CRM</Typography>
                </Stack>
                <Input startDecorator={<SearchIcon fontSize="small" />} />
                <List>
                    <Stack sx={{ gap: 1 }}>
                        <ListItem>
                            <ListItemButton onClick={goToHomePage} sx={{ borderRadius: 10 }}>
                                <ListItemDecorator>
                                    <HomeIcon />
                                </ListItemDecorator>
                                Home
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton selected onClick={goToOrdersPage} sx={{ borderRadius: 10 }}>
                                <ListItemDecorator>
                                    <AssignmentIcon />
                                </ListItemDecorator>
                                Orders
                            </ListItemButton>
                        </ListItem>
                    </Stack>
                </List>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap={1}>
                <Avatar />
                <Stack>
                    <Typography>Name</Typography>
                    <Typography color="neutral" level="title-sm">
                        Telegram
                    </Typography>
                </Stack>
                <IconButton>
                    <ExitToAppIcon />
                </IconButton>
            </Stack>
        </Sheet>
    );
};
