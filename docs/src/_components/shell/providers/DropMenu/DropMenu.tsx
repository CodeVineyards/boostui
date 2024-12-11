import { Menu } from '@mui/material';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export interface MenuContextType {
  isOpen: boolean;
  content?: ReactNode | string | null;
  openMenu: Dispatch<SetStateAction<boolean>>;
  closeMenu: Dispatch<SetStateAction<boolean>>;
  setMenuContent: (content: ReactNode) => Dispatch<SetStateAction<ReactNode>>;
  anchorEl: HTMLElement | null;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export type MenuProps = {
  children: ReactNode;
  content: ReactNode | string | null;
};

const MenuProvider = ({ children, content: propsContent }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(propsContent);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const setMenuContent = (content: ReactNode | string) => () =>
    setContent(content);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const value: MenuContextType = {
    isOpen,
    content,
    setMenuContent,
    openMenu,
    closeMenu,
    anchorEl,
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
      <Menu open={isOpen} onClose={() => setIsOpen(false)}>
        {content}
      </Menu>
    </MenuContext.Provider>
  );
};

export default MenuProvider;
