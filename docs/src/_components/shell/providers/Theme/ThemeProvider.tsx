import { ReactNode } from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';

import { initialTheme } from '@/_utils';

export type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={initialTheme}>{children}</MuiThemeProvider>;
    </AppRouterCacheProvider>
  );
};

export default ThemeProvider;
