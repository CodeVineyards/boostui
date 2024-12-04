import StoreProvider from '@/lib/StoreProvider'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'

// import DialogProvider from './providers/DialogProvider'
import DialogSSR from './providers/DialogProvider/DialogSSR'
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
          {/* <DialogProvider> */}
          <ProvidersAggr>
            {children}
            <DialogSSR isOpen={false} content="content" />
          </ProvidersAggr>
          {/* </DialogProvider> */}
        </MuiThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  )
}

export default ConfigProvider
