import { Settings } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Grid from '@mui/material/Grid2'

const ActionsContainer = () => {
  return (
    <Grid>
      <ButtonGroup variant="text" size="small">
        <Button
          sx={(theme) => ({
            transition: '.25s background-color ease-in-out',
            ':hover': {
              bgcolor: theme.palette.action.hover,
            },
            '*': { transition: '.25s all ease-in-out', color: '#fff' },
            ':hover *': { color: theme.palette.info.main },
          })}
        >
          <Settings sx={(theme) => ({ width: '40px', height: '30px' })} />
        </Button>
        <Button
          sx={(theme) => ({
            px: '5px',
            transition: '.25s background-color ease-in-out',
            ':hover': { bgcolor: theme.palette.action.hover },
            '*': { transition: '.25s all ease-in-out', color: '#fff' },
            ':hover *': { color: theme.palette.info.main },
          })}
        >
          <Avatar sx={{ color: '#fff' }} />
        </Button>
      </ButtonGroup>
    </Grid>
  )
}

export default ActionsContainer
