import Head from 'next/head';
import CompanyCTA from '@components/commons/CompanyCTA';
import Contact from '@components/commons/Contact';
import Hero from '@components/product/Hero';
import Navs from '@components/product/Navs';

export default function Veneto8() {
  return (
    <div className='product'>
      <Head>
        <title>Veneto VIII</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero
        title='Veneto VIII'
        location='Villa Carlos Paz'
        status='Lanzamiento'
        badge='badge badge-danger'
        bookmark='Oportunidad única por pre lanzamiento'
      />
      <Navs />
      <section className='section'>
        <div className='container'>
          <h1>Info General</h1>
          <h3>Textos + precios de referencias + cta</h3>
          <h3>Gran Inversor Veneto...</h3>
          <h3>Galería de multimedia 1: 3 imágenes</h3>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Amenities</h1>
          <h3>Resumen</h3>
          <h3>Galería de multimedia 2: una grande y 2 thumbnails</h3>
          <h3>Texto calidad... + lista 1</h3>
          <h3>Galería de multimedia 3: carousel de fotos</h3>
          <h3>Texto detalle... + lista 1</h3>
          <h3>Galería de multimedia 4: carousel de fotos</h3>
          <h3>Texto arquitectura... + lista 1</h3>
          <h3>Galería de multimedia 5: carousel de fotos o video</h3>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h1>Tipologías</h1>
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
