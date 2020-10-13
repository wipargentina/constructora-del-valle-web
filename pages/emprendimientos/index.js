import Head from 'next/head';
import Ventures from '@components/ventures/Ventures';
import Reasons from '@components/ventures/Reasons';
import ProjectsFinished from '@components/commons/ProjectsFinished';
import CompanyCTA from '@components/commons/CompanyCTA';
import Contact from '@components/commons/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emprendimientos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='ventures'>
        <Ventures />
      </section>
      <div className='commons'>
        <ProjectsFinished />
      </div>
      <section className='ventures'>
        <Reasons />
      </section>
      <div className='commons'>
        <CompanyCTA />
        <Contact />
      </div>
    </div>
  );
}
