// providers/ThemeProvider/index.ts
import { useContext } from 'react'
import ThemeContext, { ThemeContextType } from './Context'
import ThemeProvider from './ThemeProvider'

function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider')
  }

  return context
}

export { ThemeContext, ThemeProvider, useTheme }
