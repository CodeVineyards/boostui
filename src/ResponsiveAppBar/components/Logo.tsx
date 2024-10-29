import Link from '@mui/material/Link'

type LogoProps = {
  text?: string // Text for the logo when no image is provided
  href?: string // URL for the link
  imageUrl?: string // Image URL, replaces the text when provided
  alt?: string // Alt text for the image, defaults to 'Logo'
  ariaLabel?: string // Optional ARIA label for accessibility
}

const Logo = ({ text, href, imageUrl, alt, ariaLabel }: LogoProps) => {
  return (
    <Link aria-label={ariaLabel} href={href || ''}>
      {(!imageUrl && text) || 'LOGO'}
    </Link>
  )
}

export default Logo
