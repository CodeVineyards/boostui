// providers/AuthProvider/Context.ts
import { createContext } from 'react'

// Define the type of the context
export interface AuthContextType {
  isAuthenticated: boolean
  user: string | null
  login: (username: string) => void
  logout: () => void
}

// Create and export the context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default AuthContext
