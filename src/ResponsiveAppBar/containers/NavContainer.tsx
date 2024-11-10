import Grid from '@mui/material/Grid2'
import { ReactNode } from 'react'
import NavBarLink from '../components/NavBarLink'

type Link = { href: string; text: string; icon?: ReactNode }

type NavContainerProps = {
  links?: Array<Link>
}

const NavContainer = ({
  links = [
    { href: '', text: 'link1' },
    { href: 'link2', text: 'link2' },
    { href: '#link3', text: 'link3' },
    { href: '#link4', text: 'link4' },
  ],
}: NavContainerProps) => {
  const linksList =
    links &&
    links.map((link, index) => {
      return <NavBarLink key={index} {...link} />
    })
  return (
    <Grid size={8} container>
      {linksList}
    </Grid>
  )
}

export default NavContainer
