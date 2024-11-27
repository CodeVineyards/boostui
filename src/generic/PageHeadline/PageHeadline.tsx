import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'

type AllowedChildren = string | ReactNode

export type PageHeadlineProps = {
  text?: string
  children?: AllowedChildren
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const PageHeadline = ({
  children,
  text = '',
  variant = 'h1',
}: PageHeadlineProps) => {
  return (
    <Typography variant={variant} component={variant}>
      {children || text}
    </Typography>
  )
}

export default PageHeadline
