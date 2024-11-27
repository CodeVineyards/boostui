// 'use server'
import AppBar from '@mui/material/AppBar'
import Dialog from '@mui/material/Dialog'
import { ReactNode } from 'react'
// export const dynamic = 'force-static'

type DialogSSRProps = {
  content?: ReactNode
  isOpen: boolean
  closeDialog?: () => void
}

const DialogSSR = ({
  content = '<>Dialog</>',
  isOpen,
  closeDialog,
}: DialogSSRProps) => {
  return (
    <Dialog id="#dialog" onClose={closeDialog} fullScreen open={isOpen}>
      <AppBar
        variant="outlined"
        elevation={0}
        color="default"
        sx={{ direction: 'rtl' }}
        position="static"
      >
        <button
          style={{ width: '5em', cursor: 'pointer' }}
          onClick={closeDialog}
        >
          X
        </button>
      </AppBar>
      {content}
    </Dialog>
  )
}

export default DialogSSR
