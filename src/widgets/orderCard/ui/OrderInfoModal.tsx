import { Button, Modal, ModalClose, Sheet, Stack, Typography } from '@mui/joy';
import { SnackBar } from 'entities/index';
import React, { useState } from 'react';
import { OrderType } from 'shared/types';

import { deleteOrder } from '../api/api';

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
            <Stack flexDirection="row" key={index}>
                <Typography level="body-md">{key}:</Typography>
                <Typography level="body-md">{value}</Typography>
            </Stack>
        );
    });

    const handleDeleteOrder = () => {
        deleteOrder(order.Id);
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
                        Edit
                    </Button>
                    <Button variant="outlined" color="danger" sx={{ width: '100%' }} onClick={handleDeleteOrder}>
                        Delete
                    </Button>
                </Stack>
                <SnackBar
                    open={openSnackBar}
                    setOpen={setOpenSnackBar}
                    color="success"
                    message="Order successfuly deleted"
                />
            </Sheet>
        </Modal>
    );
};
