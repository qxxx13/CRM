import { Button } from '@mui/joy';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderType, UserType } from 'shared/types';
import { OrderInfoModal } from 'widgets/orderInfoModal';
import { StatusChip } from 'widgets/statusChip';

type OrderTableItemProps = {
    order: OrderType;
    users: UserType[];
    currentUser: UserType;
};

export const OrderTableItem: React.FC<OrderTableItemProps> = ({ order, users }) => {
    const navigate = useNavigate();
    const user = users.find((user) => user.Id === order.MasterId);

    const handleClick = () => {
        navigate(`/orderInfo/${order.Id}`);
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
            <td>{order.CompanyShare} ₽</td>
            <td>
                <Button variant="soft" onClick={handleClick}>
                    More
                </Button>
                {/* <OrderInfoModal open={openModal} closeModal={handleCloseModal} order={order} /> */}
            </td>
        </tr>
    );
};
