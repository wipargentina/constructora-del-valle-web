import Head from 'next/head';
import OurVentures from '@components/home/OurVentures';
import ProjectsFinished from '@components/commons/ProjectsFinished';
import CompanyCTA from '@components/commons/CompanyCTA';
import Contact from '@components/commons/Contact';

export default function index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container py-5 text-center'>
        <h1>Gracias por comunicarte con nosotros</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          omnis laboriosam id dolorum veniam eveniet quos commodi sunt. Nihil,
          nam.
        </p>
      </div>
      <div className='home'>
        <OurVentures />
        <ProjectsFinished />
        <CompanyCTA />
        <Contact />
      </div>
    </div>
  );
}
