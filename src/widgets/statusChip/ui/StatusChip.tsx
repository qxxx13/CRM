import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import CloseIcon from '@mui/icons-material/Close';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DoneIcon from '@mui/icons-material/Done';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PaidIcon from '@mui/icons-material/Paid';
import { Chip } from '@mui/joy';
import React from 'react';
import { OrderStatusEnum } from 'shared/types';

export const StatusChip: React.FC<{ status: OrderStatusEnum }> = ({ status }) => {
    return (
        <>
            {(() => {
                switch (status) {
                    case 'pending': {
                        return (
                            <Chip
                                color="warning"
                                variant="outlined"
                                startDecorator={<AccessTimeIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                Ожидает
                            </Chip>
                        );
                    }
                    case 'fulfilled': {
                        return (
                            <Chip
                                color="success"
                                variant="outlined"
                                startDecorator={<DoneIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                Закрыта
                            </Chip>
                        );
                    }
                    case 'rejectedByClient': {
                        return (
                            <Chip
                                color="danger"
                                variant="outlined"
                                startDecorator={<CloseIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                Отклонена КЛ
                            </Chip>
                        );
                    }
                    case 'rejectedByMaster': {
                        return (
                            <Chip
                                color="danger"
                                variant="outlined"
                                startDecorator={<CloseIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                Отклонена мастером
                            </Chip>
                        );
                    }
                    case 'atWork': {
                        return (
                            <Chip
                                color="neutral"
                                variant="outlined"
                                startDecorator={<EngineeringIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                В работе
                            </Chip>
                        );
                    }
                    case 'active': {
                        return (
                            <Chip
                                color="neutral"
                                variant="outlined"
                                startDecorator={<AssignmentIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                Активна
                            </Chip>
                        );
                    }
                    case 'masterWentForSparePart': {
                        return (
                            <Chip
                                color="neutral"
                                variant="outlined"
                                startDecorator={<DriveEtaIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                Отъехал за ЗЧ
                            </Chip>
                        );
                    }
                    case 'awaitingPayment': {
                        return (
                            <Chip
                                color="neutral"
                                variant="outlined"
                                startDecorator={<PaidIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                Ожидает сдачи
                            </Chip>
                        );
                    }
                    case 'takeToSD': {
                        return (
                            <Chip
                                color="warning"
                                variant="outlined"
                                startDecorator={<BuildIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                Забрал на СД
                            </Chip>
                        );
                    }
                    case 'debt': {
                        return (
                            <Chip
                                color="warning"
                                variant="outlined"
                                startDecorator={<CurrencyExchangeIcon fontSize="small" />}
                                sx={{ zIndex: 0 }}
                            >
                                Долг
                            </Chip>
                        );
                    }
                }
            })()}
        </>
    );
};
