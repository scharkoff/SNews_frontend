import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "theme";
import Header from "../components/Header/index";
import Meta from "../utils/Meta";

// -- Global styles
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta
        title="SNews - главная страница"
        description="SNews - новостной форум"
        link="favicon.ico"
      />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
