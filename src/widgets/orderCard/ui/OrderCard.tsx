import { Button, Grid } from '@mui/joy';
import { Order } from 'entities/index';
import React from 'react';
import { OrderType } from 'shared/types';

import { Status } from './Status';

type OrderCardProps = {
    OrderObj: OrderType;
};

export const OrderCard: React.FC<OrderCardProps> = ({ OrderObj }) => {
    return (
        <Grid xs={2}>
            <Order
                MoreButton={<Button variant="solid">More</Button>}
                Status={<Status status={OrderObj.Status} />}
                Order={OrderObj}
            />
        </Grid>
    );
};
