import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/joy';
import React from 'react';

import { openUsersModal } from '../models/UsersModalStore';

export const OpenUsersModalButton: React.FC = () => {
    return (
        <Button
            variant="outlined"
            sx={{ height: '50%', flex: 1 }}
            startDecorator={<CreateIcon />}
            onClick={() => openUsersModal()}
        >
            Create New User
        </Button>
    );
};
