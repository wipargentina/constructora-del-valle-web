import Head from 'next/head';

import Hero from '@components/product/Hero';
import Menu from '@components/product/Menu';
import Information from '@components/product/Information';
import Amenities from '@components/product/Amenities';
import Typologies from '@components/product/Typologies';
import Investemt from '@components/product/Investemt';
import Advances from '@components/product/Advances';
import Location from '@components/product/Location';

import CompanyCTA from '@components/commons/CompanyCTA';
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
        {data.status.information && <Information data={data.information} />}
        {data.status.amenities && <Amenities data={data.amenities} />}
        {data.status.typologies && <Typologies data={data.typologies} />}
        {data.status.investment && <Investemt data={data.investment} />}
        {data.status.advances && <Advances data={data.advances} />}
        {data.status.location && <Location data={data.location} />}
      </div>
      <div className='commons'>
        <CompanyCTA />
        <Contact />
      </div>
    </div>
  );
}
