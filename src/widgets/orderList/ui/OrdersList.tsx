import { Box, Stack, Typography } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import { translate } from 'app/common/translate';
import { OrderCardItem } from 'entities/order/OrderCardItem';
import { OrderType, UserType } from 'shared/types';

type OrdersListProps = {
    orders: OrderType[];
    users: UserType[];
};

export const OrdersList: React.FC<OrdersListProps> = ({ orders, users }) => {
    const isDesktop = useMediaQuery('(min-width:600px)');
    const orderCardItems = orders.map((order, index) => <OrderCardItem order={order} key={index} users={users} />);

    return (
        <Box sx={{ mt: 2 }}>
            {orders.length === 0 ? (
                <Typography level="h3" sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    {translate('NotFound')}
                </Typography>
            ) : (
                <Stack flexDirection={isDesktop ? 'row' : 'column'} sx={{ flexWrap: 'wrap' }}>
                    {orderCardItems}
                </Stack>
            )}
        </Box>
    );
};
