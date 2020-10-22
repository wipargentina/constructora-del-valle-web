import Header from '@components/Header';
import Footer from '@components/Footer';
import '../styles/styles.scss';
import ScrollTop from '../components/commons/ScrollTop';

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
