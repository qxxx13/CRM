import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, IconButton, Input, Sheet, Stack, Typography } from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './../styles/styles.module.scss';

export const SideBar: React.FC = () => {
    const navigate = useNavigate();

    const goToTasksPage = () => navigate('/tasks');
    const goToHome = () => navigate('/');

    return (
        <Sheet variant="outlined" className={styles.container}>
            <Stack sx={{ gap: 1 }}>
                <Stack flexDirection="row" alignItems="center" sx={{ gap: 1 }}>
                    <IconButton variant="outlined" onClick={goToHome}>
                        <HomeIcon />
                    </IconButton>
                    <Typography level="h4">CRM</Typography>
                </Stack>
                <Input startDecorator={<SearchIcon fontSize="small" />} />
                <Stack sx={{ gap: 1 }}>
                    <Button
                        variant="outlined"
                        startDecorator={<HomeIcon />}
                        sx={{ justifyContent: 'flex-start' }}
                        onClick={goToHome}
                    >
                        Home
                    </Button>
                    <Button
                        variant="outlined"
                        startDecorator={<AssignmentIcon />}
                        sx={{ justifyContent: 'flex-start' }}
                        onClick={goToTasksPage}
                    >
                        Tasks
                    </Button>
                </Stack>
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
