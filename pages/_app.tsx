import GlobalStyle from "../styles/globalStyles";
import AuthUserProvider from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AuthUserProvider>
  );
}

export default MyApp;
