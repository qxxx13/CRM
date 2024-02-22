import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderStatusEnum, OrderType, UserType } from 'shared/types';
import { OrderInfoModal } from 'widgets/orderInfoModal';
import { StatusChip } from 'widgets/statusChip';

type OrderTableItemProps = {
    order: OrderType;
    users: UserType[];
};

export const OrderCardItem: React.FC<OrderTableItemProps> = ({ order, users }) => {
    const user = users.find((user) => user.Id === order.MasterId);

    const navigate = useNavigate();

    const handleMore = () => {
        navigate(`/work/${user?.TelegramChatId}/${order.MessageId}/${order.Id}`);
    };

    return (
        <>
            <Stack flexDirection="row" alignItems="flex-start" justifyContent="space-between">
                <Stack flexDirection="row">
                    <Avatar />
                    <Box sx={{ ml: 1 }}>
                        <Typography level="body-md">{order.ClientPhoneNumber}</Typography>
                        <Typography level="body-md">{user?.UserName}</Typography>
                        <Typography level="body-md">{moment(order.Date).format('DD.MM.YY')}</Typography>
                        {order.Status !== OrderStatusEnum.awaitingPayment ? (
                            <Button onClick={handleMore} variant="outlined">
                                {translate('More')}
                            </Button>
                        ) : (
                            <></>
                        )}
                    </Box>
                </Stack>
                <StatusChip status={order.Status} />
            </Stack>
            <Divider sx={{ m: '8px 0 16px 0' }} />
            {/* <OrderInfoModal closeModal={handleCloseModal} open={openModal} order={order} /> */}
        </>
    );
};
