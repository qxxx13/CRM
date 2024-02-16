import { Modal, Sheet, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import { useStore } from 'effector-react';
import { AddNewUserForm } from 'features/add-new-user';
import { $usersModalStore, closeUsersModal } from 'features/open-users-modal';
import React from 'react';

export const AddNewUserModal: React.FC = () => {
    const open = useStore($usersModalStore);

    return (
        <Modal
            open={open}
            onClose={() => closeUsersModal()}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet sx={{ width: 300, p: 3, borderRadius: 5 }}>
                <Typography level="title-lg">{translate('AddNewUser')}</Typography>
                <AddNewUserForm />
            </Sheet>
        </Modal>
    );
};
