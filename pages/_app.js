import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <header>header</header>
      <Component {...pageProps} />
      <footer>footer</footer>
    </>
  )
}

export default App
