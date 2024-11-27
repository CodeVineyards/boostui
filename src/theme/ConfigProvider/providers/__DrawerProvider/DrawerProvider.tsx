import Drawer from '@mui/material/Drawer'
import { ReactNode, useState } from 'react'
import DrawerContext, { DrawerContextType } from './Context'

type DrawerProviderProps = {
  children: ReactNode
}

const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ReactNode>(<>DRAWER</>)

  const openDrawer = () => {
    setIsOpen(true)
  }

  const closeDrawer = () => {
    setIsOpen(false)
    // console.log('first')
  }

  const setDrawerContent = (content: ReactNode) => {
    return () => setContent(content)
  }

  const value: DrawerContextType = {
    isOpen: false,
    content,
    openDrawer,
    closeDrawer,
    setDrawerContent,
  }
  return (
    <DrawerContext.Provider value={value}>
      {children}
      <Drawer open={isOpen}>{content}</Drawer>
    </DrawerContext.Provider>
  )
}

export default DrawerProvider
