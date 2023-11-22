import { OrdersPage } from '../ui/OrdersPage';

const paths = { root: '/', orders: '/orders', notfound: '*' };

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
        path: paths.notfound,
        component: OrdersPage,
    },
];
