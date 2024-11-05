'use client'
import Dialog from '@mui/material/Dialog'
import { ReactNode, useState } from 'react'
import DialogContext, { DialogContextType } from './Context'

type DialogProviderProps = {
  children: ReactNode
}

const DialogProvider = ({ children }: DialogProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ReactNode>(<>Dialog</>)

  const openDialog = () => {
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  const setDialogContent = (content: ReactNode) => {
    return () => setContent(content)
  }

  const value: DialogContextType = {
    isOpen: false,
    content: <>Dialog</>,
    openDialog,
    closeDialog,
    setDialogContent,
  }
  return (
    <DialogContext.Provider value={value}>
      {children}
      <Dialog open={isOpen}>{content}</Dialog>
    </DialogContext.Provider>
  )
}

export default DialogProvider
