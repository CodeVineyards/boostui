import Grid, { Grid2Props } from '@mui/material/Grid2'
import { ReactNode } from 'react'

type AppBarItemProps = {
  height?: number
  size?: number
  content: ReactNode
  grow?: number
  gridProps?: Grid2Props
}

const AppBarItem = ({
  height,
  size,
  content,
  grow,
  gridProps,
}: AppBarItemProps) => {
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
      {content}
    </Grid>
  )
}

export default AppBarItem
