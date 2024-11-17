'use client'
import { ReactNode } from 'react'
import { AuthProvider } from '../providers/AuthProvider'
import ScreenProvider from '../providers/ScreenProvider'
import ScrollProvider from '../providers/ScrollProvider/ScrollProvider'

export type ProvidersAggrProps = {
  children: ReactNode
}

const ProvidersAggr = ({ children }: ProvidersAggrProps) => {
  return (
    <AuthProvider>
      <ScreenProvider>
        <ScrollProvider>{children}</ScrollProvider>
      </ScreenProvider>
    </AuthProvider>
  )
}

export default ProvidersAggr
