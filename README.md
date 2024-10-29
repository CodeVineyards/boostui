boostui
Responsive, customizable Material-UI components with integrated context providers for seamless state management.

Features
Responsive Components: Optimized for all screen sizes.
Customizable: Adapt using Material-UI themes and props.
Integrated Providers: Simplify state management with AggrThemeProvider.
Accessibility: Built-in a11y features.
Reliable: Thoroughly tested components.
Installation
bash
Copy code
npm install boostui @mui/material @emotion/react @emotion/styled
Usage
Wrap Your Application
jsx
Copy code
// _app.js or _app.tsx

import { AggrThemeProvider } from 'boostui';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Your custom theme settings
});

function MyApp({ Component, pageProps }) {
  return (
    <AggrThemeProvider theme={theme}>
      <Component {...pageProps} />
    </AggrThemeProvider>
  );
}

export default MyApp;
Use Components
jsx
Copy code
import { ResponsiveAppBar } from 'boostui';

function HomePage() {
  return (
    <ResponsiveAppBar
      logo={{ image: '/logo.png', alt: 'My Logo' }}
      menuItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
      ]}
    />
  );
}

export default HomePage;
Components
AggrThemeProvider
Aggregates multiple context providers:

ThemeProvider
AuthProvider
DrawerProvider
DialogProvider
ToastProvider
ResponsiveAppBar
A customizable, responsive app bar.

Props:

logo: { image: string; alt: string; }
menuItems: Array<{ label: string; href: string; }>
authButtons: boolean
License
MIT License