import { Button, Grid } from '@mui/joy';
import { translate } from 'app/common/translate';
import { Order } from 'entities/index';
import React, { useState } from 'react';
import { OrderType } from 'shared/types';

import { OrderInfoModal } from './OrderInfoModal';
import { Status } from './Status';

type OrderCardProps = {
    OrderObj: OrderType;
};

export const OrderCard: React.FC<OrderCardProps> = ({ OrderObj }) => {
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <>
            <Grid xs={2}>
                <Order
                    MoreButton={<Button onClick={openModal}>{translate('More')}</Button>}
                    Status={<Status status={OrderObj.Status} />}
                    Order={OrderObj}
                />
            </Grid>
            <OrderInfoModal order={OrderObj} closeModal={closeModal} open={open} />
        </>
    );
};
