import { NewUserType, RoleEnum } from 'shared/types';

export const initialValues: NewUserType = {
    UserName: '',
    TelegramChatId: '',
    Role: RoleEnum.master,
    Password: '',
};
