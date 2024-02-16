import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from 'shared/ui';
import { SideBar } from 'widgets/sidebar';

import { CloseOrderPage } from './closeOrderPage';
import { HomePage } from './homePage';
import { LoginPage } from './loginPage';
import { paths } from './models/routes';
import { OrdersPage } from './ordersPage';
import { ProfilePage } from './profilePage';
import { UsersPage } from './usersPage';

type ProtectedRouteProps = {
    children: React.ReactNode;
};

export const AppRouting: React.FC = () => {
    const [isAuth, setIsAuth] = useState<string | 'false'>('false');

    useEffect(() => {
        setIsAuth(localStorage.getItem('isAuth') || 'false');
    }, [localStorage]);

    const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
        const isAuth = localStorage.getItem('isAuth') || 'false';
        if (isAuth === 'false') {
            return <Navigate to="/login" replace />;
        }

        return <>{children}</>;
    };

    return (
        <>
            <Routes>
                <Route
                    path={paths.root}
                    element={
                        <ProtectedRoute>
                            <SideBar />
                            <Layout>
                                <HomePage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={paths.orders}
                    element={
                        <ProtectedRoute>
                            <SideBar />
                            <Layout>
                                <OrdersPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={paths.users}
                    element={
                        <ProtectedRoute>
                            <SideBar />
                            <Layout>
                                <UsersPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={paths.profile}
                    element={
                        <ProtectedRoute>
                            <SideBar />
                            <Layout>
                                <ProfilePage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route path={paths.notfound} element={<></>} />
                <Route
                    path={paths.closeOrder}
                    element={
                        <ProtectedRoute>
                            <CloseOrderPage />
                        </ProtectedRoute>
                    }
                />
                <Route path={paths.login} element={<LoginPage />} />
            </Routes>
        </>
    );
};
