import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, Sheet } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

import { SideBar } from './SideBar';

export const VariantSideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width:600px)');

    const handleOpenSideBar = (event: React.MouseEvent) => {
        setIsOpen(true);
    };

    const handleCloseSideBar = (event: React.MouseEvent) => {
        setIsOpen(false);
    };

    return (
        <>
            {isDesktop ? (
                <SideBar />
            ) : (
                <Sheet variant="outlined" sx={{ height: 50, display: 'flex' }}>
                    <IconButton onClick={handleOpenSideBar} sx={{ ml: 1 }}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={isOpen} onClose={handleCloseSideBar}>
                        <SideBar />
                    </Drawer>
                </Sheet>
            )}
        </>
    );
};
