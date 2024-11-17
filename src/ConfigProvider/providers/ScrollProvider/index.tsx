// providers/ScrollProvider/index.ts
import { useContext } from 'react'
import Context, { ScrollContextType } from './Context'
import Provider from './ScrollProvider'

/**
 * Custom hook to access the Dialo context.
 *
 * @function
 * @returns {ScrollContextType} The Scroll context value.
 * @throws {Error} If used outside of an ScrollProvider.
 * @example
 * const Scroll = useScroll();
 * console.log(Scroll.isScrollenticated);
 */
function useScroll(): ScrollContextType {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useScroll must be used within an ScrollProvider')
  }

  return context
}

export { Context as ScrollContext, useScroll }
export default Provider
