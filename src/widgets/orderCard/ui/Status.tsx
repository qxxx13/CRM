import { Chip } from '@mui/joy';
import React from 'react';
import { StatusEnum } from 'shared/types';

export const Status: React.FC<{ status: StatusEnum }> = ({ status }) => {
    return (
        <>
            {(() => {
                switch (status) {
                    case 'pending': {
                        return (
                            <Chip color="warning" variant="outlined">
                                {status}
                            </Chip>
                        );
                    }
                    case 'fulfilled': {
                        return (
                            <Chip color="success" variant="outlined">
                                {status}
                            </Chip>
                        );
                    }
                    case 'rejected': {
                        return (
                            <Chip color="danger" variant="outlined">
                                {status}
                            </Chip>
                        );
                    }
                }
            })()}
        </>
    );
};
