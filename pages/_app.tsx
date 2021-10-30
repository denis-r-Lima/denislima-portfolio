import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import AuthUserProvider from "../context/AuthContext";
import LoadingProvider from "../context/LoadingContext";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <LoadingProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </LoadingProvider>
    </AuthUserProvider>
  );
}

export default MyApp;
