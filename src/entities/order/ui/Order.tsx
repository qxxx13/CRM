import { Card, CardContent, Stack, Typography } from '@mui/joy';
import React from 'react';

type OrderProps = {
    MoreButton: React.ReactNode;
    Status: React.ReactNode;
};

export const Order: React.FC<OrderProps> = ({ MoreButton, Status }) => {
    return (
        <Card sx={{ width: 200 }}>
            <Stack flexDirection="row" justifyContent="space-between">
                <Typography level="title-lg">Title</Typography>
                {Status}
            </Stack>

            <Typography level="body-sm">DateTime</Typography>
            <Typography level="body-sm">Address</Typography>
            <CardContent orientation="horizontal" sx={{ justifyContent: 'space-between' }}>
                <Stack>
                    <Typography level="body-xs">Total price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        $6,666
                    </Typography>
                </Stack>
                {MoreButton}
            </CardContent>
        </Card>
    );
};
