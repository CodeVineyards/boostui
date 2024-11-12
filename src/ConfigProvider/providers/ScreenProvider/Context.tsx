// providers/ScreenProvider/Context.ts
import { createContext } from 'react'

// Define the type of the context
export interface ScreenContextType {
  width: number
}

// Create and export the context
const ScreenContext = createContext<ScreenContextType | undefined>(undefined)

export default ScreenContext
