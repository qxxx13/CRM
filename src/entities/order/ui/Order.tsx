import { Card, CardContent, Stack, Typography } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import { OrderType } from 'shared/types';

type OrderProps = {
    MoreButton: React.ReactNode;
    Status: React.ReactNode;
    Order: OrderType;
};

export const Order: React.FC<OrderProps> = ({ MoreButton, Status, Order }) => {
    const isDesktop = useMediaQuery('(min-width:600px)');

    const cardWidth = isDesktop ? '200px' : '100%';

    return (
        <Card sx={{ width: 200 }}>
            <Stack flexDirection="row" justifyContent="space-between">
                <Typography level="title-lg">{Order.ClientName}</Typography>
                {Status}
            </Stack>

            <Typography level="body-sm">{Order.OrderDateTime}</Typography>
            <Typography level="body-sm">{Order.Address}</Typography>
            <CardContent orientation="horizontal" sx={{ justifyContent: 'space-between' }}>
                <Stack>
                    <Typography level="body-xs">Total price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {Order.Price}
                    </Typography>
                </Stack>
                {MoreButton}
            </CardContent>
        </Card>
    );
};
