import { Box, Button, Input, Stack, Typography } from '@mui/joy';
import { translate } from 'app/common/translate';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { login } from '../api/loginApi';

export const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ username: string; password: string }>();
    const onSubmit: SubmitHandler<{ username: string; password: string }> = (data) => loginUser(data);

    const navigate = useNavigate();

    const loginUser = async (data: { username: string; password: string }) => {
        const loginData = { telegramId: '', ...data };
        await login(loginData);

        navigate('/activeOrders');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    p: 2,
                }}
            >
                <Typography level="h3">{translate('Login')}</Typography>
                <Input
                    {...register('username', { required: true })}
                    placeholder="username"
                    color={errors.username ? 'danger' : 'neutral'}
                />
                <Input
                    {...register('password', { required: true })}
                    placeholder="password"
                    color={errors.password ? 'danger' : 'neutral'}
                    type="password"
                />
                <Button variant="outlined" type="submit">
                    Login
                </Button>
            </Box>
        </form>
    );
};
