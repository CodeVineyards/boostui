// providers/AuthProvider/index.ts
import { useContext } from 'react'
import Provider from './AuthProvider'
import Context, { AuthContextType } from './Context'

/**
 * Custom hook to access the authentication context.
 *
 * @function
 * @returns {AuthContextType} The authentication context value.
 * @throws {Error} If used outside of an AuthProvider.
 * @example
 * const auth = useAuth();
 * console.log(auth.isAuthenticated);
 */
function useAuth(): AuthContextType {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { Context as AuthContext, Provider as AuthProvider, useAuth }
