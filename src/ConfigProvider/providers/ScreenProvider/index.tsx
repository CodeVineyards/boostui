// providers/ScreenProvider/index.ts
import { useContext } from 'react'
import Context, { ScreenContextType } from './Context'
import Provider from './ScreenProvider'

/**
 * Custom hook to access the Dialo context.
 *
 * @function
 * @returns {ScreenContextType} The Screen context value.
 * @throws {Error} If used outside of an ScreenProvider.
 * @example
 * const Screen = useScreen();
 * console.log(Screen.isScreenenticated);
 */
function useScreen(): ScreenContextType {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useScreen must be used within an ScreenProvider')
  }

  return context
}

export { Context as ScreenContext, Provider as ScreenProvider, useScreen }
