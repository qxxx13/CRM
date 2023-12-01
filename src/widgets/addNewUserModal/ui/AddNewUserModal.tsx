import { Modal, Sheet, Typography } from '@mui/joy';
import { useStore } from 'effector-react';
import { AddNewUserForm } from 'features/add-new-user/ui/AddNewUserForm';
import { $usersModalStore, closeUsersModal } from 'features/open-users-modal/models/UsersModalStore';
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
                <Typography level="title-lg">Add new User</Typography>
                <AddNewUserForm />
            </Sheet>
        </Modal>
    );
};
