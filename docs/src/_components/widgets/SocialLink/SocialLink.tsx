import IconButton from '@mui/material/IconButton';
import { ReactNode } from 'react';

export type SocialLinkProps = {
  icon?: ReactNode;
  onClick?: () => void;
};

const SocialLink = ({ icon, onClick }: SocialLinkProps) => {
  return <IconButton onClick={onClick}>{icon || 'icon'}</IconButton>;
};

export default SocialLink;
