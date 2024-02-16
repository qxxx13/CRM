import { Snackbar } from '@mui/joy';
import React, { useEffect, useRef, useState } from 'react';

type SnackBarProps = {
    open: boolean;
    setOpen: (arg: boolean) => void;
    color: 'danger' | 'neutral' | 'primary' | 'success' | 'warning';
    message: string;
};

export const SnackBar: React.FC<SnackBarProps> = ({ color, message, open, setOpen }) => {
    const [left, setLeft] = useState<number>();

    const duration = 2000;

    const timer = useRef<number>();

    const countdown = () => {
        timer.current = window.setInterval(() => {
            setLeft((prev) => (prev === undefined ? prev : Math.max(0, prev - 100)));
        }, 100);
    };

    useEffect(() => {
        if (open) {
            setLeft(duration);
            countdown();
        } else {
            window.clearInterval(timer.current);
        }
        return window.clearInterval(timer.current);
    }, [open, duration]);

    return (
        <>
            <Snackbar
                variant="solid"
                color={color}
                autoHideDuration={duration}
                resumeHideDuration={left}
                onUnmount={() => setLeft(undefined)}
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
            >
                {message}
            </Snackbar>
        </>
    );
};
