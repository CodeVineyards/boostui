'use client'
import { useAppDispatch, useAppSelector } from 'lib/hooks'
import { ReactNode } from 'react'

import { RootState } from 'lib/store' // Adjust the path according to your store file's location

import {
  closeDialog,
  openDialog,
  setContent as setDialogContent,
} from 'lib/features/dialog/dialogSlice'
import DialogSSR from './DialogSSR'

type DialogProviderProps = {
  children: ReactNode
}

const DialogProvider = ({ children }: DialogProviderProps) => {
  const dispatch = useAppDispatch()

  // Access Redux state
  const isOpen: boolean = useAppSelector(
    (state: RootState) => state.dialog.isOpen
  )
  // const content = useAppSelector((state: RootState) => state.dialog.content)

  return (
    <>
      {children}
      <DialogSSR
        closeDialog={() => dispatch(closeDialog())}
        isOpen={isOpen}
        content={'content'}
      />
    </>
  )
}

const openDialogAction = () => {
  const dispatch = useAppDispatch()
  return dispatch(openDialog())
}
const closeDialogAction = () => {
  const dispatch = useAppDispatch()
  return dispatch(closeDialog())
}
const setDialogContentAction = (content: ReactNode) => () => {
  const dispatch = useAppDispatch()
  return dispatch(setDialogContent(content))
}
export { closeDialogAction, openDialogAction, setDialogContentAction }

export default DialogProvider
