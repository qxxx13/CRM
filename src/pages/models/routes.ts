import { OrdersPage } from 'pages/ordersPage';
import { UsersPage } from 'pages/usersPage';

const paths = { root: '/', orders: '/orders', notfound: '*', users: '/users' };

export const routes = [
    {
        path: paths.root,
        component: OrdersPage,
    },
    {
        path: paths.orders,
        component: OrdersPage,
    },
    {
        path: paths.users,
        component: UsersPage,
    },
    {
        path: paths.notfound,
        component: OrdersPage,
    },
];
