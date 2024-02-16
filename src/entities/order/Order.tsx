import { Card, CardContent, Stack, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import * as moment from 'moment';
import React from 'react';
import { OrderType } from 'shared/types';

type OrderProps = {
    MoreButton: React.ReactNode;
    Status: React.ReactNode;
    Order: OrderType;
};

export const Order: React.FC<OrderProps> = ({ MoreButton, Status, Order }) => {
    return (
        <Card sx={{ width: 220 }}>
            <Stack flexDirection="row" justifyContent="space-between">
                <Typography level="title-md">{Order.ClientPhoneNumber}</Typography>
                {Status}
            </Stack>

            <Typography level="body-sm">{moment(Order.Date).format('DD.MM.YY')}</Typography>
            <Typography level="body-sm">{Order.Time}</Typography>
            <Typography level="body-sm">{Order.Address}</Typography>
            <CardContent orientation="horizontal" sx={{ justifyContent: 'space-between' }}>
                <Stack>
                    <Typography level="body-xs">{translate('TotalPrice')}:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {Order.Price}₽
                    </Typography>
                </Stack>
                {MoreButton}
            </CardContent>
        </Card>
    );
};
