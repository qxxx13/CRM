import { Box, LinearProgress, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { CloseOrderForm } from 'features/close-order';
import React from 'react';
import { useParams } from 'react-router-dom';

export const CloseOrderPage: React.FC = () => {
    const { id } = useParams();

    /* const { data, error, loading } = useStore($CloseOrderGetStatus); */

    return (
        <Box sx={{ p: 2, position: 'relative' }}>
            {/* {loading && <LinearProgress thickness={3} sx={{ position: 'absolute', top: 0, width: '100%', left: 0 }} />} */}

            <Typography level="h4">Закрытие заявки № {id}</Typography>
            <Box sx={{ mt: 2 }}>
                <CloseOrderForm id={id as string} />
            </Box>

            {/* {error && <Typography level="h4">{error.message}</Typography>} */}
        </Box>
    );
};
