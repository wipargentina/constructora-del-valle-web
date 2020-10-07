// import { Link as Scroll } from 'react-scroll';
import { ProgressBar } from 'react-bootstrap';
import MenuButton from '@components/product/MenuButton';

export default function Menu(props) {
  const status = props.status;
  const menu = props.menu;

  return (
    <section className='menu'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-9'>
            <ul className='nav nav-pills'>
              {status.information && (
                <li className='nav-item'>
                  <MenuButton
                    to='information'
                    icon='IconFile'
                    title='Info General'
                  />
                </li>
              )}
              {status.amenities && (
                <li className='nav-item'>
                  <MenuButton
                    to='amenities'
                    icon='IconStarLight'
                    title='Amenities'
                  />
                </li>
              )}
              {status.typologies && (
                <li className='nav-item'>
                  <MenuButton
                    to='typologies'
                    icon='IconStore'
                    title='Tipologías'
                  />
                </li>
              )}
              {status.investment && (
                <li className='nav-item'>
                  <MenuButton
                    to='investment'
                    icon='IconCurrencyDollar'
                    title='Inversión'
                  />
                </li>
              )}
              {status.advances && (
                <li className='nav-item'>
                  <MenuButton
                    to='advances'
                    icon='IconRocket'
                    title='Avance de Obra'
                  />
                </li>
              )}
              {status.location && (
                <li className='nav-item'>
                  <MenuButton
                    to='location'
                    icon='IconLocation'
                    title='Ubicación'
                  />
                </li>
              )}
            </ul>
          </div>
          <div className='col-xl-3'>
            <div className='status'>
              <span className={`text-${menu.statusColor}`}>
                {menu.statusText}
              </span>
              <ProgressBar variant={menu.statusColor} now={menu.statusValue} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
