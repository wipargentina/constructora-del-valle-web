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

import data from 'data/veneto8.json';

export default function Veneto8() {
  return (
    <div>
      <Head>
        <title>
          {data.hero.title} - {data.hero.location}
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='product'>
        <Hero data={data.hero} />
        <Menu status={data.status} menu={data.menu} />
        {data.status.information && (
          <Information
            information={data.information}
            investment={data.investment}
          />
        )}
        {data.status.amenities && <Amenities data={data.amenities} />}
        {data.status.video && <Video data={data.video} />}
        {data.status.typologies && <Typologies data={data.typologies} />}
        {data.status.advances && <Advances data={data.advances} />}
        {data.status.investment && <Investment investment={data.investment} />}
        {data.status.location && <Location data={data.location} />}
      </div>
      <div className='commons'>
        <Contact />
      </div>
    </div>
  );
}
