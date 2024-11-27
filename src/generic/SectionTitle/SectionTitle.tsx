import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'

type AllowedChildren = string | ReactNode

export type SectionTitleProps = {
  text?: string
  children?: AllowedChildren
  variant?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
const SectionTitle = ({
  children,
  text = '',
  variant = 'h2',
}: SectionTitleProps) => {
  return (
    <Typography variant={variant} component={variant}>
      {children || text}
    </Typography>
  )
}

export default SectionTitle
