import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
export default function Header() {
  return (
    <Navbar collapseOnSelect expand='xl' sticky='top'>
      <div className='container'>
        <Link href='/' passHref>
          <Nav.Link className='p-0'>
            <Navbar.Brand>
              <img className='logo' src='/Logo.svg' alt='logo' />
            </Navbar.Brand>
          </Nav.Link>
        </Link>
        <img
          src='/logo-veneto.svg'
          alt='logo veneto'
          height='30'
          className='d-xl-none ml-auto mr-3'
        />
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='mx-auto'>
            <div className='nav-item'>
              <Link href='/veneto-village' passHref>
                <Nav.Link>Veneto Village</Nav.Link>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/veneto-8-fontana-di-veneto' passHref>
                <Nav.Link>Veneto VIII</Nav.Link>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/veneto-7' passHref>
                <Nav.Link>Veneto VII</Nav.Link>
              </Link>
            </div>
            <div className='nav-item'>
              <Link href='/veneto-6' passHref>
                <Nav.Link>Veneto VI</Nav.Link>
              </Link>
            </div>
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
          <Nav className='Link mt-0 d-none d-sm-block' href='#phone'>
            <div className='nav-item'>
              <div className='nav-link'>
                <img src='/logo-veneto.svg' alt='logo veneto' height='30' />
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
