// providers/DialogProvider/index.ts
import { DialogContextType } from './Context'
import Provider from './DialogProvider'

/**
 * Custom hook to access the Dialo context.
 *
 * @function
 * @returns {DialogContextType} The Dialog context value.
 * @throws {Error} If used outside of an DialogProvider.
 * @example
 * const Dialog = useDialog();
 * console.log(Dialog.isDialogenticated);
 */

export default Provider
