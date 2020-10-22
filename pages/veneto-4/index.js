import Head from 'next/head';

import Hero from '@components/product/Hero';
import Menu from '@components/product/Menu';
import Information from '@components/product/Information';
import Amenities from '@components/product/Amenities';
import Typologies from '@components/product/Typologies';
import Investment from '@components/product/Investment';
import Advances from '@components/product/Advances';
import Video from '@components/product/Video';
import Location from '@components/product/Location';

import Contact from '@components/commons/Contact';

import data from 'data/veneto-4.json';

export default function Veneto4() {
  return (
    <div>
      <Head>
        <title>{data.head.title}</title>
        <meta name='description' content={data.head.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='product'>
        <Hero data={data.hero} />
        <Menu status={data.status} menu={data.menu} />
        {data.status.information && (
          <Information
            status={data.status}
            information={data.information}
            investment={data.investment}
          />
        )}
        {data.status.amenities && <Amenities data={data.amenities} />}
        {data.status.video && <Video video={data.video} />}
        {data.status.typologies && <Typologies data={data.typologies} />}
        {data.status.advances && <Advances advances={data.advances} />}
        {data.status.investment && <Investment investment={data.investment} />}
        {data.status.location && <Location location={data.location} />}
      </div>
      <div className='commons'>
        <Contact subject='Veneto IV' tags='veneto-4' />
      </div>
    </div>
  );
}
