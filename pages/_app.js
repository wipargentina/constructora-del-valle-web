import Header from '@components/Header'
import Footer from '@components/Footer'
import '../styles/styles.scss'

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
