import { Button, Drawer } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'shared/ui';
import { SideBar } from 'widgets/sidebar';

import { routes } from './models/routes';

export const AppRouting: React.FC = () => {
    const [openSideBar, setOpenSideBar] = useState(false);

    const isDesktop = useMediaQuery('(min-width:600px)');

    const routesContent = routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
    ));

    const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => setOpenSideBar(isOpen);

    return (
        <>
            {isDesktop ? (
                <SideBar />
            ) : (
                <>
                    <Button onClick={() => setOpenSideBar(true)} sx={{ position: 'absolute', top: 8, right: 8 }}>
                        Open sidebar
                    </Button>
                    <Drawer open={openSideBar} onClose={toggleDrawer(false)}>
                        <SideBar />
                    </Drawer>
                </>
            )}
            {isDesktop ? (
                <Layout>
                    <Routes>{routesContent}</Routes>
                </Layout>
            ) : (
                <Routes>{routesContent}</Routes>
            )}
        </>
    );
};
