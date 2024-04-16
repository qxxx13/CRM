import { extendTheme } from '@mui/joy';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import {
    Experimental_CssVarsProvider as MaterialCssVarsProvider,
    experimental_extendTheme as materialExtendTheme,
    THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import React, { ReactNode } from 'react';

const theme = extendTheme({ cssVarPrefix: 'demo' });
const materialTheme = materialExtendTheme();

// eslint-disable-next-line react/display-name
export const withTheme = (component: () => ReactNode) => () =>
    (
        <MaterialCssVarsProvider defaultMode="dark" theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
            <JoyCssVarsProvider
                defaultMode="dark"
                theme={theme}
                colorSchemeSelector="#demo_dark-mode-by-default"
                modeStorageKey="demo_dark-mode-by-default"
                disableNestedContext
            >
                {component()}
            </JoyCssVarsProvider>
        </MaterialCssVarsProvider>
    );
