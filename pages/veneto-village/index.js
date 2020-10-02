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

class VenetoVillage extends React.Component {
  state = {
    informationEnabled: true,
    amenitiesEnabled: true,
    typologiesEnabled: true,
    investmentEnabled: false,
    advancesEnabled: true,
    locationEnabled: true
  };
  render() {
    return (
      <div>
        <Head>
          <title>Veneto Village</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='product'>
          <Hero
            title='Veneto Village'
            location='Villa Carlos Paz'
            image='/veneto-village/hero.jpg'
            status='Disponible'
            badge='badge badge-danger'
            bookmark='Sistema de Construcción Premium'
          />
          <Menu
            state={this.state}
            statusText='92% Vendido'
            statusColor='success'
            statusValue='92'
          />
          {this.state.informationEnabled && <Information />}
          {this.state.amenitiesEnabled && <Amenities />}
          {this.state.typologiesEnabled && <Typologies />}
          {this.state.investmentEnabled && <Investemt />}
          {this.state.advancesEnabled && <Advances />}
          {this.state.locationEnabled && <Location />}
        </div>
        <div className='commons'>
          <CompanyCTA />
          <Contact />
        </div>
      </div>
    );
  }
}

export default VenetoVillage;
