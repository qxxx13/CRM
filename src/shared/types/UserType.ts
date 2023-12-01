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
};
export type NewUserType = Omit<UserType, 'Id'>;
