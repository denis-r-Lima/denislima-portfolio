import GlobalStyle from "../styles/globalStyles";
import AuthUserProvider from "../context/AuthContext";
import LoadingProvider from "../context/LoadingContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <LoadingProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </LoadingProvider>
    </AuthUserProvider>
  );
}

export default MyApp;
