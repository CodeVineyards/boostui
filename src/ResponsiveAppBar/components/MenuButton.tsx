import Menu from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

type MenuButtonProps = {}

const MenuButton = ({}: MenuButtonProps) => {
  return (
    <IconButton
      size="large"
      sx={(theme) => ({
        transition: '.25s background-color ease-in-out',
        ':hover': { bgcolor: theme.palette.action.hover },
        '*': { transition: '.25s all ease-in-out', color: '#fff' },
        ':hover *': { color: theme.palette.info.main },
      })}
    >
      <Menu />
    </IconButton>
  )
}

export default MenuButton
