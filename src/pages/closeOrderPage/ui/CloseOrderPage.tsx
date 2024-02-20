import { Box, LinearProgress, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { CloseOrderForm } from 'features/close-order';
import React from 'react';
import { useParams } from 'react-router-dom';

export const CloseOrderPage: React.FC = () => {
    const params = useParams();

    const orderId = String(params.orderId);
    const messageId = String(params.messageId);
    const chatId = String(params.chatId);

    /* const { data, error, loading } = useStore($CloseOrderGetStatus); */

    return (
        <Box sx={{ p: 2, position: 'relative' }}>
            {/* {loading && <LinearProgress thickness={3} sx={{ position: 'absolute', top: 0, width: '100%', left: 0 }} />} */}

            <Typography level="h4">Закрытие заявки № {orderId}</Typography>
            <Box sx={{ mt: 2 }}>
                <CloseOrderForm chatId={chatId} messageId={messageId} orderId={orderId} />
            </Box>

            {/* {error && <Typography level="h4">{error.message}</Typography>} */}
        </Box>
    );
};
