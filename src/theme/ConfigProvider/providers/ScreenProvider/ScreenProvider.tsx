'use client'
import { ReactNode, useEffect, useState } from 'react'
import ScreenContext from './Context'

type ScreenProviderProps = {
  children: ReactNode
}

const ScreenProvider = ({ children }: ScreenProviderProps) => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth)

      const handleResize = () => setScreenWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  // const screenWidth = window.innerWidth
  const value = {
    width: screenWidth,
  }
  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  )
}

export default ScreenProvider
