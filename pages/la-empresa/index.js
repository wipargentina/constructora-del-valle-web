import Head from 'next/head';
import Contact from '@components/commons/Contact';
import HeroCompany from '../../components/company/HeroCompany';
import ContentCompany from '../../components/company/ContentCompany';

export default function LaEmpresa() {
  return (
    <div>
      <Head>
        <title>La Empresa</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section id='top' className='company'>
        <HeroCompany />
        <ContentCompany />
      </section>
      <div className='commons'>
        <Contact />
      </div>
    </div>
  );
}
