import { instance } from 'shared/api';

export const editNewCoordinate = (editedCoordinate: { Comments: string; CoordinateUrl: string; Id: number }) => {
    const edit = instance.patch('prom/editCoordinate', editedCoordinate);

    return edit;
};

export const deleteCoordinate = (coordinateId: string) => {
    const deletedCoordinate = instance.patch(`prom/deleteCoordinate/${coordinateId}`).then((res) => res.data);

    return deletedCoordinate;
};
