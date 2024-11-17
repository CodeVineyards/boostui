// providers/DrawerProvider/Context.ts
import { createContext, Dispatch, ReactNode, SetStateAction } from 'react'

// Define the type of the context
export interface DrawerContextType {
  isOpen: boolean
  content?: ReactNode | string
  openDrawer: Dispatch<SetStateAction<boolean>>
  closeDrawer: Dispatch<SetStateAction<boolean>>
  setDrawerContent: (content: ReactNode) => Dispatch<SetStateAction<ReactNode>>
}

// Create and export the context
const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export default DrawerContext
