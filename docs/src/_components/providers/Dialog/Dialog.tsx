import { Dialog } from '@mui/material';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export interface DialogContextType {
  isOpen: boolean;
  content?: ReactNode | string | null;
  openDialog: Dispatch<SetStateAction<boolean>>;
  closeDialog: Dispatch<SetStateAction<boolean>>;
  setDialogContent: (content: ReactNode) => Dispatch<SetStateAction<ReactNode>>;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export type DialogProps = {
  children: ReactNode;
  content: ReactNode | string | null;
};

const DialogProvider = ({ children, content: propsContent }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(propsContent);

  const setDialogContent = (content: ReactNode | string) => () =>
    setContent(content);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const value: DialogContextType = {
    isOpen,
    content,
    setDialogContent,
    openDialog,
    closeDialog,
  };

  return (
    <DialogContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        {content}
      </Dialog>
    </DialogContext.Provider>
  );
};

export default DialogProvider;
