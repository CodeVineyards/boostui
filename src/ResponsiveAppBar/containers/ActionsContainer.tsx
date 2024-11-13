import { Settings } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Grid, { Grid2Props } from '@mui/material/Grid2'

type ActionsContainerProps = {
  height?: number
  size?: number
  grow?: number
  gridProps?: Grid2Props
}

const ActionsContainer = ({
  height,
  size,
  grow,
  gridProps,
}: ActionsContainerProps) => {
  return (
    <Grid
      paddingX={'5px'}
      flexGrow={grow}
      size={size}
      alignItems={'center'}
      display={'flex'}
      minHeight={`${height}px`}
      {...gridProps}
    >
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
          <Settings sx={(theme) => ({ width: '30px', height: '30px' })} />
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
          <Avatar sx={{ color: '#fff', width: '30px', height: '30px' }} />
        </Button>
      </ButtonGroup>
    </Grid>
  )
}

export default ActionsContainer
