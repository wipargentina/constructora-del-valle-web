import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import Link from 'next/link';
export default function Header() {
  return (
    <Navbar collapseOnSelect expand='xl' sticky='top'>
      <div className='container'>
        <Link href='/' passHref>
          <Nav.Link className='foo'>
            <Navbar.Brand>
              <img
                src='/logo-constructora-del-valle.png'
                alt='constructora del valle'
              />
            </Navbar.Brand>
          </Nav.Link>
        </Link>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='mx-auto'>
            <div className='nav-item'>
              <Link href='/veneto-village' passHref>
                <Nav.Link>Veneto Village</Nav.Link>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/veneto-8' passHref>
                <Nav.Link>Veneto VIII</Nav.Link>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/veneto-7' passHref>
                <Nav.Link disabled>Veneto VII</Nav.Link>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/veneto-6' passHref>
                <Nav.Link disabled>Veneto VI</Nav.Link>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/emprendimientos' passHref>
                <Nav.Link>+ Emprendimientos</Nav.Link>
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
