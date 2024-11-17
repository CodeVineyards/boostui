import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth/authSlice'
import dialogReducer from './features/dialog/dialogSlice'
import drawerReducer from './features/drawer/drawerSlice'
import localeReducer from './features/locale/localeSlice'
import menuReducer from './features/menu/menuSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      drawer: drawerReducer,
      dialog: dialogReducer,
      locale: localeReducer,
      menu: menuReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
