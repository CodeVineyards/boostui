import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface DrawerState {
  isOpen: boolean
  content: ReactNode | null | undefined
}

const initialState: DrawerState = {
  isOpen: false,
  content: null,
}

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer(state) {
      state.isOpen = true
    },
    closeDrawer(state) {
      state.isOpen = false
    },
    setContent(state, action: PayloadAction<ReactNode>) {
      state.content = action.payload
    },
  },
})

export const { openDrawer, closeDrawer, setContent } = drawerSlice.actions
export default drawerSlice.reducer
