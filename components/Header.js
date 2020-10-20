import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
export default function Header() {
  return (
    <Navbar collapseOnSelect expand='xl' sticky='top'>
      <div className='container'>
        {/* <Link href='/' passHref>
          <Nav.Link className='foo'>
            <Navbar.Brand>
              <img className='logo' src='/Logo.svg' alt='logo' />
            </Navbar.Brand>
          </Nav.Link>
        </Link> */}
        <a href='/' className='navbar-brand'>
          <img className='logo' src='/Logo.svg' alt='logo' />
        </a>
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
            {/* <div className='nav-item'>
              <Link href='/emprendimientos' passHref>
                <Nav.Link>+ Emprendimientos</Nav.Link>
              </Link>
            </div> */}
            <NavDropdown title='+ Emprendimientos' id='basic-nav-dropdown'>
              <Link href='/veneto-5' passHref>
                <NavDropdown.Item>Veneto V</NavDropdown.Item>
              </Link>
              <Link href='/veneto-4' passHref>
                <NavDropdown.Item>Veneto IV</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href='/emprendimientos' passHref>
                <NavDropdown.Item>Nuestros Emprendimientos</NavDropdown.Item>
              </Link>
              <Link href='/proyectos-terminados' passHref>
                <NavDropdown.Item>Proyectos Finalizados</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <div className='nav-item'>
              <Link href='/la-empresa' passHref>
                <Nav.Link>La Empresa</Nav.Link>
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
