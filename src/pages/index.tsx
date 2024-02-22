import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserType } from 'shared/types';
import { Layout } from 'shared/ui';
import { VariantSideBar } from 'widgets/sidebar';

import { ActiveOrdersPage } from './activeOrdersPage';
import { CloseOrderPage } from './closeOrderPage';
import { HomePage } from './homePage';
import { LoginPage } from './loginPage';
import { paths } from './models/routes';
import { OrdersPage } from './ordersPage';
import { TakeOrderPage } from './other/TakeOrderPage';
import { WentForSparePage } from './other/WentForSparePage';
import { WorkOrderPage } from './other/WorkOrderPage';
import { ProfilePage } from './profilePage';
import { UsersPage } from './usersPage';

type ProtectedRouteProps = {
    children: React.ReactNode;
};

export const AppRouting: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<UserType | Record<string, unknown>>({});
    const [isAuth, setIsAuth] = useState<string | 'false'>('false');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setIsAuth(localStorage.getItem('isAuth') || 'false');

        const role = localStorage.getItem('userRole');

        if (role == '"admin"') {
            setIsAdmin(true);
        }

        setCurrentUser(JSON.parse(localStorage.getItem('user') || '{}'));
    }, [localStorage]);

    const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
        const isAuth = localStorage.getItem('isAuth');
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
                            <VariantSideBar isAdmin={isAdmin} />
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
                            <VariantSideBar isAdmin={isAdmin} />
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
                            <VariantSideBar isAdmin={isAdmin} />
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
                            <VariantSideBar isAdmin={isAdmin} />
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

                <Route
                    path={paths.takeOrder}
                    element={
                        <ProtectedRoute>
                            <TakeOrderPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={paths.workOrder}
                    element={
                        <ProtectedRoute>
                            <WorkOrderPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path={paths.wentOrder}
                    element={
                        <ProtectedRoute>
                            <WentForSparePage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path={paths.activeOrders}
                    element={
                        <ProtectedRoute>
                            <VariantSideBar isAdmin={isAdmin} />
                            <Layout>
                                <ActiveOrdersPage currentUser={currentUser as UserType} />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
};
