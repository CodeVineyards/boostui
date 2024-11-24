import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface MenuState {
  isOpen: boolean
  content: ReactNode | null | undefined
  anchorEl: null | HTMLElement
}

const initialState: MenuState = {
  isOpen: false,
  content: null,
  anchorEl: null,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu(state) {
      state.isOpen = true
    },
    closeMenu(state) {
      state.isOpen = false
    },
    setContent(state, action: PayloadAction<ReactNode>) {
      state.content = action.payload
    },
  },
})

export const { openMenu, closeMenu, setContent } = menuSlice.actions
export default menuSlice.reducer
