// import { AuthProvider } from './providers/AuthProvider'
'use client'
import { ThemeProvider } from './providers/ThemeProvider'
import defaultTheme from './utils/defaultTheme'

type ConfigProviderProps = {
  children?: React.ReactNode
}

const ConfigProvider = ({ children }: ConfigProviderProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <AuthProvider>{children}</AuthProvider> */}
      {children}
    </ThemeProvider>
  )
}

export default ConfigProvider
