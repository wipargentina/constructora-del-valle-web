import Head from 'next/head';
import Slides from '@components/home/Slides';
import Experience from '@components/home/Experience';
import OurVentures from '@components/OurVentures';
import OtherVentures from '@components/OtherVentures';
import CompanyCTA from '@components/CompanyCTA';
import Contact from '@components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='home'>
        <Slides />
        <Experience />
      </div>
      <OurVentures />
      <OtherVentures />
      <CompanyCTA />
      <Contact />
    </div>
  );
}
