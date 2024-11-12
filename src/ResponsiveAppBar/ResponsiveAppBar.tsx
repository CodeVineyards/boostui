'use client'
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid2'
import Toolbar from '@mui/material/Toolbar'
import { useState } from 'react'
import AppBarItem from './components/AppBarItem'
import MenuButton from './components/MenuButton'
import ActionsContainer from './containers/ActionsContainer'
import LogoContainer from './containers/LogoContainer'
import NavContainer from './containers/NavContainer'

type AppBarVariations = 'large' | 'medium' | 'small' | 'centered'

export type ResponsiveAppBarProps = {
  logo?: boolean | undefined
  bottomNav?: boolean | undefined
  dense?: boolean | undefined
  avatar?: boolean | undefined
  pageTitle?: boolean | undefined
  variation?: AppBarVariations
}

const ResponsiveAppBar = ({
  logo = false,
  bottomNav = false,
  dense = false,
  avatar = false,
  pageTitle = false,
  variation = 'large',
}: ResponsiveAppBarProps) => {
  const [height, setHeight] = useState(64)
  return (
    <AppBar
      // position="static"
      color="transparent"
      elevation={0}
      variant="outlined"
      sx={{
        borderRadius: '100em',
      }}
    >
      <Toolbar>
        <Grid minWidth={'100%'} alignItems={'center'} container>
          <AppBarItem size={1} height={height} content={<LogoContainer />} />
          <AppBarItem
            gridProps={{ justifyContent: 'left' }}
            grow={1}
            height={height}
            content={<NavContainer />}
          />
          <AppBarItem height={height} content={<ActionsContainer />} />
          <AppBarItem size={0.75} height={height} content={<MenuButton />} />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default ResponsiveAppBar
