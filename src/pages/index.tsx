import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserType } from 'shared/types';
import { Layout } from 'shared/ui';
import { VariantSideBar } from 'widgets/sidebar';

import { ActiveOrdersPage } from './activeOrdersPage';
import { CloseOrderPage } from './closeOrderPage';
import { EditOrderPage } from './editOrderPage';
import { HomePage } from './homePage';
import { LoginPage } from './loginPage';
import { paths } from './models/routes';
import { OrdersPage } from './ordersPage';
import { PaymentOrdersPage } from './paymentOrdersPage/ui/PaymentOrdersPage';
import { ProfilePage } from './profilePage';
import { SDOrdersPage } from './sdOrdersPage/ui/SDOrdersPage';
import { UsersPage } from './usersPage';
import { WorkOrderPage } from './workOrderPage';

type ProtectedRouteProps = {
    children: React.ReactNode;
};

export const AppRouting: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<UserType | Record<string, unknown>>({});
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const role = localStorage.getItem('userRole');

        if (role === '"admin"') {
            setIsAdmin(true);
        }

        setCurrentUser(JSON.parse(localStorage.getItem('user') || '{}'));
    }, []);

    const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
        const isAuth = localStorage.getItem('isAuth');

        console.log(isAuth);

        if (isAuth === 'false' || isAuth === null) {
            return <Navigate to="/login" replace />;
        } else {
            return <>{children}</>;
        }
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
                                <OrdersPage currentUser={currentUser as UserType} />
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
                    path={paths.workOrder}
                    element={
                        <ProtectedRoute>
                            <WorkOrderPage />
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

                <Route
                    path={paths.sdOrdersPage}
                    element={
                        <ProtectedRoute>
                            <VariantSideBar isAdmin={isAdmin} />
                            <Layout>
                                <SDOrdersPage currentUser={currentUser as UserType} />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path={paths.paymentOrdersPage}
                    element={
                        <ProtectedRoute>
                            <VariantSideBar isAdmin={isAdmin} />
                            <Layout>
                                <PaymentOrdersPage currentUser={currentUser as UserType} />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path={paths.editOrder}
                    element={
                        <ProtectedRoute>
                            <VariantSideBar isAdmin={isAdmin} />
                            <Layout>
                                <EditOrderPage />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
};
