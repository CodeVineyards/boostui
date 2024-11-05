// providers/ThemeProvider/ThemeProvider.tsx

import { Theme } from '@mui/material'
import ThemeContext, { ThemeContextType } from './Context'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'

interface ThemeProviderProps {
  children?: React.ReactNode
  theme: Theme
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const value: ThemeContextType = {
    theme,
    toggleTheme: () => console.log('toggle-theme'),
  }

  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default ThemeProvider
