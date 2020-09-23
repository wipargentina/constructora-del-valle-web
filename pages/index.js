import Head from 'next/head';
import Slides from '@components/home/Slides';
import Experience from '@components/Experience';
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
      <Slides />
      <Experience />
      <OurVentures />
      <OtherVentures />
      <CompanyCTA />
      <Contact />
    </div>
  );
}
