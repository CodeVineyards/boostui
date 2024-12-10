import ThemeProvider from '@/providers/Theme';
import { ReactNode } from 'react';
import DrawerProvider from '../providers/Drawer/Drawer';

type AppShellProps = {
  children: ReactNode;
};
const AppShell = ({ children }: AppShellProps) => {
  return (
    <ThemeProvider>
      <DrawerProvider content="">{children}</DrawerProvider>
    </ThemeProvider>
  );
};

export default AppShell;
