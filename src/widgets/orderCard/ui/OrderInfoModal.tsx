import { Button, Modal, ModalClose, Sheet, Stack, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import { SnackBar } from 'entities/index';
import React, { useState } from 'react';
import { OrderType } from 'shared/types';

import { deleteOrder } from '../api/OrderCardApi';

type OrderInfoModalProps = {
    order: OrderType;
    open: boolean;
    closeModal: () => void;
};

export const OrderInfoModal: React.FC<OrderInfoModalProps> = ({ order, open, closeModal }) => {
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const TextInfo = Object.entries(order).map((entry, index) => {
        const [key, value] = entry;
        return (
            <Sheet sx={{ display: 'flex', flexDirection: 'row' }} key={index} variant="outlined">
                <Typography level="body-md">{key}: </Typography>
                <Typography level="body-md">{value}</Typography>
            </Sheet>
        );
    });

    const handleDeleteOrder = async () => {
        await deleteOrder(order.Id);
        setOpenSnackBar(true);
    };

    return (
        <Modal
            open={open}
            onClose={() => closeModal()}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet
                variant="outlined"
                sx={{
                    p: 3,
                    width: 300,
                    maxHeight: 800,
                    overflow: 'auto',
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography level="title-lg">Order info</Typography>
                {TextInfo}
                <Stack flexDirection="row">
                    <Button variant="outlined" sx={{ width: '100%' }}>
                        {translate('Edit')}
                    </Button>
                    <Button variant="outlined" color="danger" sx={{ width: '100%' }} onClick={handleDeleteOrder}>
                        {translate('Delete')}
                    </Button>
                </Stack>
                <SnackBar
                    open={openSnackBar}
                    setOpen={setOpenSnackBar}
                    color="success"
                    message="Order successfully deleted"
                />
            </Sheet>
        </Modal>
    );
};
