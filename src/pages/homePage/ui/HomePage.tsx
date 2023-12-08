import { Card, Stack, Typography } from '@mui/joy';
import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react';

export const HomePage: React.FC = () => {
    return (
        <>
            <Typography level="h1">Analitycs</Typography>
            <Stack flexDirection="row" justifyContent="space-between" sx={{ mt: 4 }}>
                <Card sx={{ width: 300, height: 100 }}></Card>
                <Card sx={{ width: 300, height: 100 }}></Card>
                <Card sx={{ width: 300, height: 100 }}></Card>
                <Card sx={{ width: 300, height: 100 }}></Card>
            </Stack>
            <Stack flexDirection="row">
                <Card>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                        width={500}
                        height={300}
                    />
                </Card>
            </Stack>
        </>
    );
};
