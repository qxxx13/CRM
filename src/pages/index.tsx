import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'shared/index';
import { SideBar } from 'widgets/sidebar';

import { routes } from './ordersPage/models/routes';

export const AppRouting: React.FC = () => {
    const routesContent = routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
    ));

    return (
        <>
            <SideBar />
            <Layout>
                <Routes>{routesContent}</Routes>
            </Layout>
        </>
    );
};
