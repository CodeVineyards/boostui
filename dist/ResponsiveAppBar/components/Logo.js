import { jsx as _jsx } from "react/jsx-runtime";
import Link from '@mui/material/Link';
const Logo = ({ text, href, imageUrl, alt, ariaLabel }) => {
    return (_jsx(Link, { "aria-label": ariaLabel, href: href || '', children: (!imageUrl && text) || 'LOGO' }));
};
export default Logo;
