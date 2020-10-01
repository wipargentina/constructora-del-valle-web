import { Link as Scroll } from 'react-scroll';
import IconRocket from '@components/icons/IconRocket';
import { ProgressBar } from 'react-bootstrap';
import IconFile from '@components/icons/IconFile';
import IconStarLight from '@components/icons/IconStartLight';
import IconStore from '@components/icons/IconStore';
import IconCurrencyDollar from '@components/icons/IconCurrencyDollar';
import IconLocation from '@components/icons/IconLocation';

export default function Menu(props) {
  return (
    <section className='menu'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-9'>
            <ul className='nav nav-pills'>
              <li className='nav-item'>
                <Scroll
                  to='information'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconFile className='icon' />
                  Info General
                </Scroll>
              </li>
              <li className='nav-item'>
                <Scroll
                  to='amenities'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconStarLight className='icon' />
                  Amenities
                </Scroll>
              </li>
              <li className='nav-item'>
                <Scroll
                  to='typologies'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconStore className='icon' />
                  Tipologías
                </Scroll>
              </li>
              <li className='nav-item'>
                <Scroll
                  to='investment'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconCurrencyDollar className='icon' />
                  Inversión
                </Scroll>
              </li>
              <li className='nav-item'>
                <Scroll
                  to='advances'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconRocket className='icon' />
                  Avance de Obra
                </Scroll>
              </li>
              <li className='nav-item'>
                <Scroll
                  to='location'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconLocation className='icon' />
                  Ubicación
                </Scroll>
              </li>
            </ul>
          </div>
          <div className='col-xl-3'>
            <div className='status'>
              <span className='text-danger'>Lanzamiento</span>
              <ProgressBar variant='danger' now={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
