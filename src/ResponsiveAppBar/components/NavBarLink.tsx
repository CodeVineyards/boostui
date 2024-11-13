import Grid from '@mui/material/Grid2'
import Link from 'next/link'
import { ReactNode } from 'react'

type NavBarLinkProps = {
  href: string
  text?: string
  icon?: ReactNode
  height?: number
}

const NavBarLink = ({ href, text, icon, height = 33 }: NavBarLinkProps) => {
  return (
    <Grid
      minHeight={`${height}px`}
      sx={(theme) => ({
        transition: '.2s background-color ease-in-out',
        ':hover': {
          bgcolor: theme.palette.action.hover,
        },
        borderRadius: '10em',
      })}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexGrow={1}
    >
      <Link
        style={{
          minHeight: `${height}px`,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        href={href}
      >
        {icon}
        {text}
      </Link>
    </Grid>
  )
}

export default NavBarLink
