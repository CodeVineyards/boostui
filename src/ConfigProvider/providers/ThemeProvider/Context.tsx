// providers/ThemeProvider/Context.ts
import { Theme } from '@mui/material/styles'
import { createContext } from 'react'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export default ThemeContext
