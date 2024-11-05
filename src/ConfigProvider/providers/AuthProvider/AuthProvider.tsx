// providers/AuthProvider/AuthProvider.tsx
import { useState } from 'react'
import AuthContext, { AuthContextType } from './Context'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState<string | null>(null)

  const login = (username: string) => {
    setUser(username)
    setAuthenticated(true)
  }

  const logout = () => {
    setUser(null)
    setAuthenticated(false)
  }

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
