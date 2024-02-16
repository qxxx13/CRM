import { Modal, ModalClose, Sheet, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import { useStore } from 'effector-react';
import { AddNewOrderForm } from 'features/add-new-order';
import { $modalStore, closeModal } from 'features/open-orders-modal';
import React from 'react';
import { UserType } from 'shared/types';

export const AddNewOrderModal: React.FC<{ users: UserType[] }> = ({ users }) => {
    const open = useStore($modalStore);
    return (
        <Modal
            open={open}
            onClose={() => closeModal()}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet variant="outlined" sx={{ p: 3, width: 300, maxHeight: 800, overflow: 'auto', borderRadius: 10 }}>
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography level="title-lg">{translate('AddNewOrder')}</Typography>
                <AddNewOrderForm users={users} />
            </Sheet>
        </Modal>
    );
};
