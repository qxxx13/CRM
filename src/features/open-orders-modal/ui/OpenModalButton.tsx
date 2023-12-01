import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/joy';
import React from 'react';

import { openModal } from '../models/ModalStore';

export const OpenModalButton: React.FC = () => {
    return (
        <Button variant="outlined" startDecorator={<CreateIcon />} sx={{ height: '50%' }} onClick={() => openModal()}>
            New Order
        </Button>
    );
};
