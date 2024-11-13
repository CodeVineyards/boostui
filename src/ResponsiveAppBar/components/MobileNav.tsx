import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { ReactNode } from 'react'

type MobileNavProps = {
  links: Array<{ text: string; href: string; icon: ReactNode }>
}

const MobileNav = ({ links }: MobileNavProps) => {
  const items = links.map((link) => {
    return (
      <ListItem>
        <ListItemButton>
          <ListItemIcon>{link.icon}</ListItemIcon>
          <ListItemText>{link.text}</ListItemText>
        </ListItemButton>
      </ListItem>
    )
  })
  return <List>{items}</List>
}

export default MobileNav
