import Head from 'next/head';
import CompanyCTA from '@components/commons/CompanyCTA';
import Contact from '@components/commons/Contact';

export default function Veneto8() {
  return (
    <div className='product'>
      <Head>
        <title>Veneto VIII</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='section'>
        <div className='container'>
          <h1>Hero Veneto VIII</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Info General</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Galeria de Fotos 1</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Resumen</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Galeria de Fotos 2</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Features 1</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Slide</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Features 2</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Avances de Obra</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Inversión</h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Mapa</h1>
        </div>
      </section>
      <div className='commons'>
        <CompanyCTA />
        <Contact />
      </div>
    </div>
  );
}
