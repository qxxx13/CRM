import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'shared/ui';
import { VariantSideBar } from 'widgets/sidebar';

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
    const [isAuth, setIsAuth] = useState<string | 'false'>('false');

    useEffect(() => {
        setIsAuth(localStorage.getItem('isAuth') || 'false');
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
                            <VariantSideBar />
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
                            <VariantSideBar />
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
                            <VariantSideBar />
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
                            <VariantSideBar />
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

                <Route path={paths.takeOrder} element={<TakeOrderPage />} />
                <Route path={paths.workOrder} element={<WorkOrderPage />} />
                <Route path={paths.wentOrder} element={<WentForSparePage />} />
            </Routes>
        </>
    );
};
