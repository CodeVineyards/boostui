// providers/ScrollProvider/Context.ts
import { createContext } from 'react'

// Define the type of the context
export interface ScrollContextType {
  scrolled: boolean
  scrollPosition: number
}

// Create and export the context
const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export default ScrollContext
