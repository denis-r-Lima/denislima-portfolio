import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import AuthUserProvider from "../context/AuthContext";
import LoadingProvider from "../context/LoadingContext";
import smoothscroll from "smoothscroll-polyfill";

import { theme } from "../styles/theme";
import { useEffect } from "react";
import ResumeDataProvider from "../context/ResumeDataContext";
import HabitContextProvider from "../context/HabitContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return (
    <ResumeDataProvider>
      <AuthUserProvider>
        <LoadingProvider>
          <HabitContextProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
              <GlobalStyle />
            </ThemeProvider>
          </HabitContextProvider>
        </LoadingProvider>
      </AuthUserProvider>
    </ResumeDataProvider>
  );
}

export default MyApp;
