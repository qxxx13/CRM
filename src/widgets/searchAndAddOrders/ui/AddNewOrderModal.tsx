import { Modal, ModalClose, Sheet, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { AddNewOrderForm } from 'features/add-new-order/ui';
import { $modalStore, closeModal } from 'features/open-orders-modal/models/ModalStore';
import React from 'react';

export const AddNewOrderModal: React.FC = () => {
    const open = useStore($modalStore);
    return (
        <Modal
            open={open}
            onClose={() => closeModal()}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet variant="outlined" sx={{ p: 3, width: 300, maxHeight: 800, overflow: 'auto', borderRadius: 10 }}>
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography level="title-lg">Add new order</Typography>
                <AddNewOrderForm />
            </Sheet>
        </Modal>
    );
};
