import { ListItem, ListItemButton, ListItemDecorator } from '@mui/joy';
import { translate } from 'app/common/translate';
import { ReactElement } from 'react';

type NavigationButtonProps = {
    navigate: () => void;
    icon: ReactElement;
    name: string;
};

export const NavigationButton: React.FC<NavigationButtonProps> = ({ icon, navigate, name }) => {
    return (
        <ListItem>
            <ListItemButton onClick={navigate} sx={{ borderRadius: 10 }}>
                <ListItemDecorator>{icon}</ListItemDecorator>
                {translate(name)}
            </ListItemButton>
        </ListItem>
    );
};
