import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Button, Drawer, IconButton, Sheet } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MasterSideBar } from './MasterSideBar';
import { SideBar } from './SideBar';

export const VariantSideBar: React.FC<{ isAdmin: boolean }> = ({ isAdmin }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width:600px)');

    const handleOpenSideBar = (event: React.MouseEvent) => {
        setIsOpen(true);
    };

    const handleCloseSideBar = (event: React.MouseEvent) => {
        setIsOpen(false);
    };

    const goToProfile = () => navigate('/profile');

    const sideBar = isAdmin ? <SideBar /> : <MasterSideBar />;

    return (
        <>
            {isDesktop ? (
                <Box sx={{ position: 'fixed' }}>{sideBar}</Box>
            ) : (
                <Sheet
                    variant="outlined"
                    sx={{ height: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <IconButton onClick={handleOpenSideBar} sx={{ ml: 1 }}>
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ mr: 1 }}>
                        <IconButton onClick={goToProfile}>
                            <Avatar />
                        </IconButton>
                    </Box>
                    <Drawer open={isOpen} onClose={handleCloseSideBar}>
                        {sideBar}
                    </Drawer>
                </Sheet>
            )}
        </>
    );
};
