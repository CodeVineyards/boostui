// providers/DrawerProvider/index.ts
import { useContext } from 'react'
import Context, { DrawerContextType } from './Context'
import Provider from './DrawerProvider'

/**
 * Custom hook to access the Dialo context.
 *
 * @function
 * @returns {DrawerContextType} The Drawer context value.
 * @throws {Error} If used outside of an DrawerProvider.
 * @example
 * const Drawer = useDrawer();
 * console.log(Drawer.isDrawerenticated);
 */
function useDrawer(): DrawerContextType {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useDrawer must be used within an DrawerProvider')
  }

  return context
}

export { Context as DrawerContext, Provider as DrawerProvider, useDrawer }
