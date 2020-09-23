import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
export default function Header() {
  return (
    <Navbar expand='lg' sticky='top'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>
            <img
              src='logo-constructora-del-valle.png'
              alt='constructora del valle'
            />
          </a>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <div className='nav-item'>
              <Link href='/veneto-village'>
                <a className='nav-link'>Veneto Village</a>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/veneto-6'>
                <a className='nav-link'>Veneto 6</a>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/veneto-7'>
                <a className='nav-link'>Veneto 7</a>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/veneto-8'>
                <a className='nav-link'>Veneto 8</a>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/emprendimientos'>
                <a className='nav-link'>+ Emprendimientos</a>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/la-empresa'>
                <a className='nav-link'>La Empresa</a>
              </Link>
            </div>
          </Nav>
          <Nav>
            <Nav className='Link' href='#phone'>
              <div className='nav-item'>
                <div className='nav-link d-flex align-items-center'>
                  <img src='/icons/phone.svg' alt='' height='16' />
                  <span className='ml-2'>0810 777 8002</span>
                </div>
              </div>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
