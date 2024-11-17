import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LocaleSymbols } from './types'

export interface LocaleState {
  locale: string
}

const initialState: LocaleState = {
  locale: 'en', // Default to English, but this can be changed
}

const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<LocaleSymbols>) {
      state.locale = action.payload
    },
  },
})

export const { setLocale } = localeSlice.actions
export default localeSlice.reducer
