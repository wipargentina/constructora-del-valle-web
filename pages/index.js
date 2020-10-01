import Head from 'next/head';
import Slides from '@components/home/Slides';
import Experience from '@components/home/Experience';
import OurVentures from '@components/home/OurVentures';
import ProjectsFinished from '@components/commons/ProjectsFinished';
import Benefits from '@components/home/Benefits';
import CompanyCTA from '@components/commons/CompanyCTA';
import Contact from '@components/commons/Contact';

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
        <ProjectsFinished />
        <Benefits />
        <CompanyCTA />
        <Contact />
      </div>
    </div>
  );
}
