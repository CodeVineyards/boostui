import { PayloadAction } from '@reduxjs/toolkit'
import { createAppSlice } from 'lib/createAppSlice'

export interface AuthState {
  isAuthenticated: boolean
  user: { id: string; name: string } | null
  token: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ user: AuthState['user']; token: string }>
    ) {
      state.isAuthenticated = true
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
      state.token = null
    },
    refreshToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
  },
})

export const { login, logout, refreshToken } = authSlice.actions
export default authSlice.reducer
