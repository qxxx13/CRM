import { Button, Card, CardContent, Chip, Stack, Typography } from '@mui/joy';
import React from 'react';

export const OrderCard: React.FC = () => {
    return (
        <Card sx={{ width: 200 }}>
            <Stack flexDirection="row" justifyContent="space-between">
                <Typography level="title-lg">Title</Typography>
                <Chip variant="outlined" color="success">
                    Order Status
                </Chip>
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
                <Button size="lg">More</Button>
            </CardContent>
        </Card>
    );
};
