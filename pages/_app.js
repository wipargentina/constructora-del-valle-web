import Header from '@components/Header';
import Footer from '@components/Footer';
import '../styles/styles.scss';
import ScrollTop from '../components/commons/ScrollTop';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
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
