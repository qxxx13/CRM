export enum RoleEnum {
    master = 'master',
    admin = 'admin',
}

export type UserType = {
    Id: number;
    UserName: string;
    TelegramChatId: string;
    Role: RoleEnum;
    Password: string;
    isOnline: boolean;
};
export type NewUserType = Omit<UserType, 'Id'>;
