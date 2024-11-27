import Grid, { Grid2Props } from '@mui/material/Grid2'
import { ReactNode } from 'react'
import NavBarLink from '../components/NavBarLink'

type Link = { href: string; text: string; icon?: ReactNode }

type NavContainerProps = {
  links?: Array<Link>
  height?: number
  size?: number
  grow?: number
  gridProps?: Grid2Props
}

const NavContainer = ({
  links = [
    { href: '', text: 'link1' },
    { href: 'link2', text: 'link2' },
    { href: '#link3', text: 'link3' },
    { href: '#link4', text: 'link4' },
  ],
  height,
  size,
  grow,
  gridProps,
}: NavContainerProps) => {
  const linksList =
    links &&
    links.map((link, index) => {
      return <NavBarLink key={index} {...link} />
    })
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
      {linksList}
    </Grid>
  )
}

export default NavContainer
