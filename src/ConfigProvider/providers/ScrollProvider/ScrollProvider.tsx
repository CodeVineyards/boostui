'use client'
import { ReactNode, useEffect, useState } from 'react'
import ScrollContext from './Context'

type ScrollProviderProps = {
  children: ReactNode
}

const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [scrolled, setSCrolled] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleDidScrolled = () => setSCrolled(true)
      window.addEventListener('scrollend', handleDidScrolled)

      const handleScrollPos = (pos: number) => setScrollPos(pos)
      window.addEventListener('scroll', () => handleScrollPos(window.scrollY))

      return () => window.removeEventListener('scrollend', handleDidScrolled)
    }
  }, [])

  const value = {
    scrolled: scrolled,
    scrollPosition: scrollPos,
  }
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  )
}

export default ScrollProvider
