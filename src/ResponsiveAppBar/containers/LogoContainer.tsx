import Logo from '../components/Logo'

import Grid, { Grid2Props } from '@mui/material/Grid2'

type LogoContainerProps = {
  height?: number
  size?: number
  grow?: number
  gridProps?: Grid2Props
}

const LogoContainer = ({
  height,
  size,
  grow,
  gridProps,
}: LogoContainerProps) => {
  return (
    <Grid
      paddingX={'5px'}
      flexGrow={grow}
      size={size}
      alignItems={'center'}
      display={'flex'}
      minHeight={`${height}px`}
      justifyContent={'center'}
      {...gridProps}
    >
      <Logo />
    </Grid>
  )
}

export default LogoContainer
