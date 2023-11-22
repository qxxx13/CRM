import { CssVarsProvider, extendTheme } from '@mui/joy';
import React, { ReactNode } from 'react';

const theme = extendTheme({});

// eslint-disable-next-line react/display-name
export const withTheme = (component: () => ReactNode) => () =>
    (
        <CssVarsProvider defaultMode="light" theme={theme}>
            {component()}
        </CssVarsProvider>
    );
