import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from 'theme';
import { Header } from '../widgets/Header/index';
import Meta from '../utils/Meta';

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta
        title="SNews - главная страница"
        description="SNews - новостной форум"
        link="icon.ico"
      />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
