import StoreProvider from '../../lib/StoreProvider'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'

import DialogProvider from './providers/DialogProvider'
import ProvidersAggr from './utils/ProvidersAggr'
import defaultTheme from './utils/defaultTheme'

type ConfigProviderProps = {
  children?: React.ReactNode
}

const ConfigProvider = ({ children }: ConfigProviderProps) => {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>
        <MuiThemeProvider theme={defaultTheme}>
          <DialogProvider>
            <ProvidersAggr>{children}</ProvidersAggr>
          </DialogProvider>
        </MuiThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  )
}

export default ConfigProvider
