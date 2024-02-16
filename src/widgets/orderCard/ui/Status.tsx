import { Chip } from '@mui/joy';
import React from 'react';
import { OrderStatusEnum } from 'shared/types';

export const Status: React.FC<{ status: OrderStatusEnum }> = ({ status }) => {
    return (
        <>
            {(() => {
                switch (status) {
                    case 'pending': {
                        return (
                            <Chip color="warning" variant="outlined">
                                Ожидает
                            </Chip>
                        );
                    }
                    case 'fulfilled': {
                        return (
                            <Chip color="success" variant="outlined">
                                Закрыта
                            </Chip>
                        );
                    }
                    case 'rejectedByClient': {
                        return (
                            <Chip color="danger" variant="outlined">
                                Отклонена КЛ
                            </Chip>
                        );
                    }
                    case 'rejectedByMaster': {
                        return (
                            <Chip color="danger" variant="outlined">
                                Отклонена мастером
                            </Chip>
                        );
                    }
                    case 'atWork': {
                        return (
                            <Chip color="neutral" variant="outlined">
                                В работе
                            </Chip>
                        );
                    }
                    case 'active': {
                        return (
                            <Chip color="neutral" variant="outlined">
                                Активна
                            </Chip>
                        );
                    }
                    case 'masterWentForSparePart': {
                        return (
                            <Chip color="neutral" variant="outlined">
                                Отъехал за ЗЧ
                            </Chip>
                        );
                    }
                    case 'awaitingPayment': {
                        return (
                            <Chip color="neutral" variant="outlined">
                                Ожидает сдачи
                            </Chip>
                        );
                    }
                }
            })()}
        </>
    );
};
