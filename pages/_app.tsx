import "../styles/globals.css"
//import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from "../styles/globalStyles"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
