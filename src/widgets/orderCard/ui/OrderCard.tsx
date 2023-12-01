import { Button } from '@mui/joy';
import { Order } from 'entities/index';
import React from 'react';

import { Status } from './Status';

export const OrderCard: React.FC = () => {
    return <Order MoreButton={<Button variant="solid">More</Button>} Status={<Status />} />;
};
