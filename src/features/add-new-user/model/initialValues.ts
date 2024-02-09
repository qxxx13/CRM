import { NewUserType, RoleEnum, UserStatusEnum } from 'shared/types';

export const initialValues: NewUserType = {
    UserName: '',
    TelegramChatId: '',
    Role: RoleEnum.master,
    Password: '',
    IsOnline: false,
    MessageId: '',
    InterestRate: 50,
    Status: UserStatusEnum.dayOff,
};
