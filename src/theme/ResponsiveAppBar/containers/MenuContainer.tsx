import Grid, { Grid2Props } from '@mui/material/Grid2'
import MenuButton from '../components/MenuButton'

type MenuContainerProps = {
  height?: number
  size?: number
  grow?: number
  gridProps?: Grid2Props
}

const MenuContainer = ({
  height,
  size,
  grow,
  gridProps,
}: MenuContainerProps) => {
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
      <MenuButton />
    </Grid>
  )
}

export default MenuContainer
