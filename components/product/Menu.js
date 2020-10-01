import { Link as Scroll } from 'react-scroll';
import IconStar from '@components/icons/IconStart';
import { ProgressBar } from 'react-bootstrap';

export default function Menu(props) {
  return (
    <section className='menu'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-9'>
            <ul className='nav nav-pills'>
              <li class='nav-item'>
                <Scroll
                  to='information'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconStar className='icon' />
                  Info General
                </Scroll>
              </li>
              <li class='nav-item'>
                <Scroll
                  to='amenities'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconStar className='icon' />
                  Amenities
                </Scroll>
              </li>
              <li class='nav-item'>
                <Scroll
                  to='typologies'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconStar className='icon' />
                  Tipologías
                </Scroll>
              </li>
              <li class='nav-item'>
                <Scroll
                  to='investment'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconStar className='icon' />
                  Inversión
                </Scroll>
              </li>
              <li class='nav-item'>
                <Scroll
                  to='advances'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconStar className='icon' />
                  Avance de Obra
                </Scroll>
              </li>
              <li class='nav-item'>
                <Scroll
                  to='location'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={599}
                  className='nav-link'
                >
                  <IconStar className='icon' />
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
