import { Button } from '@mui/joy';
import moment from 'moment';
import { useState } from 'react';
import { OrderType, UserType } from 'shared/types';
import { OrderInfoModal } from 'widgets/orderInfoModal';
import { StatusChip } from 'widgets/statusChip';

type OrderTableItemProps = {
    order: OrderType;
    users: UserType[];
};

export const OrderTableItem: React.FC<OrderTableItemProps> = ({ order, users }) => {
    const user = users.find((user) => user.Id === order.MasterId);

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <tr style={{ zIndex: 0 }}>
            <td>{order.Id}</td>
            <td>{moment(order.Date).format('DD.MM.YY')}</td>
            <td>
                <StatusChip status={order.Status} />
            </td>
            <td>{user?.UserName}</td>
            <td>{order.ClientPhoneNumber}</td>
            <td>{order.Total} ₽</td>
            <td>
                <Button variant="soft" onClick={handleOpenModal}>
                    More
                </Button>
                <OrderInfoModal open={openModal} closeModal={handleCloseModal} order={order} />
            </td>
        </tr>
    );
};
