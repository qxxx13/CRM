import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/joy';
import { translate } from 'app/common/translate';
import React from 'react';

import { openModal } from '../models/ModalStore';

export const OpenModalButton: React.FC = () => {
    return (
        <Button variant="outlined" startDecorator={<CreateIcon />} sx={{ height: '50%' }} onClick={() => openModal()}>
            {translate('CreateNewOrder')}
        </Button>
    );
};
