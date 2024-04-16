import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Button, Input, Stack } from '@mui/joy';
import React from 'react';
import { CoordinatesType } from 'shared/types/PromTypes';

export const EditCoordinates: React.FC<{ coordinate: CoordinatesType }> = ({ coordinate }) => {
    return (
        <AccordionGroup size="md">
            <Accordion variant="outlined">
                <AccordionSummary>Точка маршрута №{coordinate.Id}</AccordionSummary>
                <AccordionDetails>
                    <Stack gap={1} sx={{ p: 1 }}>
                        <Input placeholder="Широта" />
                        <Input placeholder="Долгота" />
                        <Input placeholder="Ссылка на точку" />

                        <Button variant="outlined">Сохранить точку</Button>
                        <Button variant="outlined" color="danger">
                            Удалить точку
                        </Button>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>
    );
};
