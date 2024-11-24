import {
  closeDialog,
  openDialog,
  setContent as setDialogContent,
} from 'lib/features/dialog/dialogSlice'

import {
  closeDrawer,
  openDrawer,
  setContent as setDrawerContent,
} from 'lib/features/drawer/drawerSlice'

import { ReactNode } from 'react'
import { useDispatch } from 'react-redux'

export const useDialogActions = () => {
  const dispatch = useDispatch()

  return {
    openDialog: () => dispatch(openDialog()),
    closeDialog: () => dispatch(closeDialog()),
    setDialogContent: (content: ReactNode) =>
      dispatch(setDialogContent(content)),
  }
}

export const useDrawerActions = () => {
  const dispatch = useDispatch()

  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    setDrawerContent: () => dispatch(setDrawerContent()), // Optional action to toggle the drawer
  }
}
