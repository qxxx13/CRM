import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    UserName: yup.string().required('Required'),
    TelegramChatId: yup.string().required('Required'),
    Role: yup.string().required('Required'),
    Password: yup.string().required('Required'),
});
