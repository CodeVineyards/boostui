import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid2'
import Toolbar from '@mui/material/Toolbar'
import ActionsContainer from './containers/ActionsContainer'
import LogoContainer from './containers/LogoContainer'
import MenuContainer from './containers/MenuContainer'
import NavContainer from './containers/NavContainer'

type AppBarVariations = 'large' | 'medium' | 'small' | 'centered'

export type ResponsiveAppBarProps = {
  logo?: boolean | undefined
  bottomNav?: boolean | undefined
  dense?: boolean | undefined
  avatar?: boolean | undefined
  pageTitle?: boolean | undefined
  variation?: AppBarVariations
  height?: number
}

const ResponsiveAppBar = ({
  logo = false,
  bottomNav = false,
  dense = false,
  avatar = false,
  pageTitle = false,
  variation = 'large',
  height = 64,
}: ResponsiveAppBarProps) => {
  const p = { logo, bottomNav, dense, avatar, pageTitle, variation, height }
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
          <LogoContainer size={1} />
          <NavContainer size={7} />
          <div className="simple_flex_divider" style={{ flexGrow: 1 }}></div>
          <ActionsContainer />
          <MenuContainer gridProps={{ justifyContent: 'center' }} size={0.75} />
          <div>{p + ''}</div>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default ResponsiveAppBar
