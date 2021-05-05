import Header from '@components/Header';
import Footer from '@components/Footer';
import '../styles/styles.scss';
import ScrollTop from '../components/commons/ScrollTop';
import GoogleTagManager from '../components/GoogleTagManager';

function App({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ScrollTop />
    </GoogleTagManager>
  );
}

export default App;
