// providers/DialogProvider/Context.ts
import { Dispatch, ReactNode, SetStateAction } from 'react'

// Define the type of the context
export interface DialogContextType {
  isOpen: boolean
  content?: ReactNode | string
  openDialog: Dispatch<SetStateAction<boolean>>
  closeDialog: Dispatch<SetStateAction<boolean>>
  setDialogContent: (content: ReactNode) => Dispatch<SetStateAction<ReactNode>>
}
