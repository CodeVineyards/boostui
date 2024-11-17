import { ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'server-only'

import Dialog from '@mui/material/Dialog'

import { RootState } from 'lib/store' // Adjust the path according to your store file's location

import {
  closeDialog,
  openDialog,
  setContent as setDialogContent,
} from 'lib/features/dialog/dialogSlice'

type DialogProviderProps = {
  children: ReactNode
}

const DialogProvider = ({ children }: DialogProviderProps) => {
  // Access Redux state
  const isOpen = useSelector((state: RootState) => state.dialog.isOpen)
  const content = useSelector((state: RootState) => state.dialog.content)

  return (
    <>
      {children}
      <Dialog open={isOpen}>{content}</Dialog>
    </>
  )
}

const openDialogAction = () => {
  const dispatch = useDispatch()
  return dispatch(openDialog())
}
const closeDialogAction = () => {
  const dispatch = useDispatch()
  return dispatch(closeDialog())
}
const setDialogContentAction = (content: ReactNode) => () => {
  const dispatch = useDispatch()
  return dispatch(setDialogContent(content))
}
export { closeDialogAction, openDialogAction, setDialogContentAction }

export default DialogProvider
