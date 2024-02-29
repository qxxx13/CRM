import { Box, LinearProgress, Stack, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrderStatusEnum } from 'shared/types';

import { $updateOrderStore } from '../models/updateOrderStore';
import { $orderGetStatus, fetchOrderFx } from '../models/workOderStore';
import { CurrentOptions } from './CurrentOptions';

export const WorkOrderPage = () => {
    const { data: order, error, loading } = useStore($orderGetStatus);
    const update = useStore($updateOrderStore);
    const params = useParams();

    const orderId = params.orderId;
    const messageId = params.messageId;
    const chatId = params.chatId;

    const currentOptionsButtons = CurrentOptions(
        order.Status as OrderStatusEnum,
        String(chatId),
        String(messageId),
        String(orderId),
    );

    useEffect(() => {
        fetchOrderFx({ orderId: String(orderId) });
    }, [update]);

    return (
        <Box sx={{ height: '100vh' }}>
            {!loading ? (
                <Stack sx={{ p: '16px 16px 0 16px', height: 'calc(100% - 16px)' }} justifyContent="space-between">
                    {order.Status !== OrderStatusEnum.pending && (
                        <Stack sx={{ gap: 1 }}>
                            <Typography level="h3">Заявка №{order.Id}</Typography>
                            <Typography level="body-lg">
                                Статус: {translate(order.Status as OrderStatusEnum)}
                            </Typography>
                            <Typography level="body-lg">Город: {order.City}</Typography>
                            <Typography level="body-lg">Адрес: {order.Address}</Typography>
                            <Typography level="body-lg">Номер КЛ: {order.ClientPhoneNumber}</Typography>
                            <Typography level="body-lg">Имя мастера: {order.MasterName}</Typography>
                            <Typography level="body-lg">Озвучка: {order.AnnouncedPrice}</Typography>
                        </Stack>
                    )}

                    <Stack sx={{ gap: 2, mb: 2 }}>{currentOptionsButtons}</Stack>
                </Stack>
            ) : (
                <LinearProgress thickness={1} />
            )}
        </Box>
    );
};
