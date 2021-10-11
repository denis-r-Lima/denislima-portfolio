import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import AuthUserProvider from "../context/AuthContext";
import LoadingProvider from "../context/LoadingContext";

const theme = {
  pallet: {
    color: {
      primary: "hsl(204, 70%, 55%)",
      primaryLight: "hsl(204, 70%, 70%)",
      secondary: "hsl(24, 90%, 55%)",
      secondaryLight: "hsl(24, 90%, 70%)",
    },
  },
};

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
