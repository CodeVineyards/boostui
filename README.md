# BoostUI

**Responsive, customizable Material-UI components with integrated context providers for seamless state management.**

## Features

- **Responsive Components**: Optimized for all screen sizes.
- **Customizable**: Adapt using Material-UI themes and props.
- **Integrated Providers**: Simplify state management with `AggrThemeProvider`.
- **Accessibility**: Built-in a11y features.
- **Reliable**: Thoroughly tested components.

## Installation

```bash
npm install boostui @mui/material @emotion/react @emotion/styled
```

## Usage

Wrap your Next.js app with the `AggrThemeProvider` to provide theme and state management across the app.

```jsx
import { AggrThemeProvider } from 'boostui';
import theme from './path-to-your-theme';

function MyApp({ Component, pageProps }) {
  return (
    <AggrThemeProvider theme={theme}>
      <Component {...pageProps} />
    </AggrThemeProvider>
  );
}

export default MyApp;
```

License
This project is licensed under the MIT License.
