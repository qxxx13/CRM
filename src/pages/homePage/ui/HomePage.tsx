import { Card, Stack, Typography } from '@mui/joy';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';

export const HomePage: React.FC = () => {
    return (
        <>
            {/* <Typography level="h1">Analytics</Typography>
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
                <Card>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </Card>
            </Stack> */}
        </>
    );
};
