import React, { useState } from 'react';

import Head from 'next/head';
import CompanyCTA from '@components/commons/CompanyCTA';
import Contact from '@components/commons/Contact';
import Hero from '@components/product/Hero';
import Menu from '@components/product/Menu';
import Information from '@components/product/Information';
import Amenities from '@components/product/Amenities';
import Typologies from '@components/product/Typologies';
import Investemt from '@components/product/Investemt';
import Advances from '@components/product/Advances';
import Location from '@components/product/Location';

export default function VenetoVillage() {
  const [information, setInformation] = useState(true);
  const [amenities, setAmenities] = useState(true);
  const [typologies, setTypologies] = useState(true);
  const [investment, setInvestemt] = useState(true);
  const [advances, setAdvances] = useState(true);
  const [location, setLocation] = useState(true);

  return (
    <div>
      <Head>
        <title>Veneto Village</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='product'>
        <Hero
          title='Veneto VIII'
          location='Villa Carlos Paz'
          image='/veneto-8/hero.jpg'
          status='Lanzamiento'
          badge='badge badge-danger'
          bookmark='Oportunidad única por pre lanzamiento'
        />
        <Menu
          information={information}
          amenities={amenities}
          typologies={typologies}
          investment={investment}
          advances={advances}
          location={location}
          statusText='Lanzamiento'
          statusColor='danger'
          statusValue='60'
        />
        {information && <Information />}
        {amenities && <Amenities />}
        {typologies && <Typologies />}
        {investment && <Investemt />}
        {advances && <Advances />}
        {location && <Location />}
      </div>
      <div className='commons'>
        <CompanyCTA />
        <Contact />
      </div>
    </div>
  );
}

// class Veneto8 extends React.Component {
//   state = {
//     informationEnabled: true,
//     amenitiesEnabled: true,
//     typologiesEnabled: true,
//     investmentEnabled: true,
//     advancesEnabled: true,
//     locationEnabled: true
//   };
//   render() {
//     return (
//       <div>
//         <Head>
//           <title>Veneto VIII</title>
//           <link rel='icon' href='/favicon.ico' />
//         </Head>
//         <div className='product'>
//           <Hero
// title='Veneto VIII'
// location='Villa Carlos Paz'
// image='/veneto-8/hero.jpg'
// status='Lanzamiento'
// badge='badge badge-danger'
// bookmark='Oportunidad única por pre lanzamiento'
//           />
//           <Menu
//             state={this.state}
// statusText='Lanzamiento'
// statusColor='danger'
// statusValue='60'
//           />
//           {this.state.informationEnabled && <Information />}
//           {this.state.amenitiesEnabled && <Amenities />}
//           {this.state.typologiesEnabled && <Typologies />}
//           {this.state.investmentEnabled && <Investemt />}
//           {this.state.advancesEnabled && <Advances />}
//           {this.state.locationEnabled && <Location />}
//         </div>
//         <div className='commons'>
//           <CompanyCTA />
//           <Contact />
//         </div>
//       </div>
//     );
//   }
// }

// export default Veneto8;
