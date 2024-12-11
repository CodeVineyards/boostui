import { Drawer } from '@mui/material';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export interface DrawerContextType {
  isOpen: boolean;
  content?: ReactNode | string | null;
  openDrawer: Dispatch<SetStateAction<boolean>>;
  closeDrawer: Dispatch<SetStateAction<boolean>>;
  setDrawerContent: (content: ReactNode) => Dispatch<SetStateAction<ReactNode>>;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export type DrawerProps = {
  children: ReactNode;
  content: ReactNode | string | null;
};

const DrawerProvider = ({ children, content: propsContent }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(propsContent);

  const setDrawerContent = (content: ReactNode | string) => () =>
    setContent(content);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  const value: DrawerContextType = {
    isOpen,
    content,
    setDrawerContent,
    openDrawer,
    closeDrawer,
  };

  return (
    <DrawerContext.Provider value={value}>
      {children}
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        {content}
      </Drawer>
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
