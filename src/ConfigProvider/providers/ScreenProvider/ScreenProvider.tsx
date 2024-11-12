import { ReactNode } from 'react'
import ScreenContext from './Context'

type ScreenProviderProps = {
  children: ReactNode
}

const ScreenProvider = ({ children }: ScreenProviderProps) => {
  const screenWidth = window.innerWidth
  const value = {
    width: screenWidth,
  }
  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  )
}

export default ScreenProvider
