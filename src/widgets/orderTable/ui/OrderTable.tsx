import { Sheet, Table, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import { OrderTableItem } from 'entities/index';
import { OrderType, UserType } from 'shared/types';

type OrderTableProps = {
    orders: OrderType[];
    users: UserType[];
    currentUser: UserType;
};

export const OrderTable: React.FC<OrderTableProps> = ({ orders, users, currentUser }) => {
    const tableItems = orders.map((order, index) => (
        <OrderTableItem order={order} key={index} users={users} currentUser={currentUser} />
    ));

    return (
        <>
            {orders.length === 0 ? (
                <Typography level="h3" sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    {translate('NotFound')}
                </Typography>
            ) : (
                <Sheet className="OrderTableContainer" variant="outlined" sx={{ mt: 2, borderRadius: 4 }}>
                    <Table stickyHeader hoverRow>
                        <thead>
                            <tr style={{ padding: '12px 6px' }}>
                                <th style={{ width: '100px' }}>{translate('Id')}</th>
                                <th>{translate('Date')}</th>
                                <th>{translate('Status')}</th>
                                <th>{translate('MasterId')}</th>
                                <th>{translate('clientPhoneNumber')}</th>
                                <th>{translate('TotalPrice')}</th>
                                <th>{translate('Warning')}</th>
                            </tr>
                        </thead>
                        <tbody>{tableItems}</tbody>
                    </Table>
                </Sheet>
            )}
        </>
    );
};
