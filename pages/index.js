import Head from 'next/head';
import Slides from '@components/home/Slides';
import Experience from '@components/home/Experience';
import OurVentures from '@components/home/OurVentures';
import OtherVentures from '@components/home/OtherVentures';
import Benefits from '../components/home/Benefits';
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
        <OurVentures />
        <OtherVentures />
        <Benefits />
      </div>
      <CompanyCTA />
      <Contact />
    </div>
  );
}
