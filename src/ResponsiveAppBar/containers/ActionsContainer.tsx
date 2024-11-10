import { Settings } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import Grid from '@mui/material/Grid2'

const ActionsContainer = () => {
  return (
    <Grid>
      <IconButton
        sx={(theme) => ({
          transition: '.25s background-color ease-in-out',
          ':hover': { bgcolor: theme.palette.action.hover },
        })}
      >
        <Settings color="secondary" />
      </IconButton>
      <IconButton
        sx={(theme) => ({
          transition: '.25s background-color ease-in-out',
          ':hover': { bgcolor: theme.palette.action.hover },
        })}
      >
        <Avatar />
      </IconButton>
    </Grid>
  )
}

export default ActionsContainer
