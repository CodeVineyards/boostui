import { createTheme } from '@mui/material'
import { deepPurple, lime } from '@mui/material/colors'

export default createTheme({
  palette: {
    primary: {
      main: deepPurple['A400'],
      light: deepPurple['100'],
    },
    secondary: {
      main: lime[500],
    },
    background: {
      default: deepPurple[200],
    },
    action: {
      hover: '#ffffff55',
    },
  },
})
