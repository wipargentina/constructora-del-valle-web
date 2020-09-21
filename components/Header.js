import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import LogoCDV from './LogoCDV'
export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <LogoCDV />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <div className="nav-item">
              <Link href="/veneto-village">
                <a className="nav-link">Veneto Village</a>
              </Link>
            </div>
            <div className="nav-item">
              <Link href="/veneto-6">
                <a className="nav-link">Veneto 6</a>
              </Link>
            </div>
            <div className="nav-item">
              <Link href="/ventures">
                <a className="nav-link">Veneto 7</a>
              </Link>
            </div>
            <div className="nav-item">
              <Link href="/ventures">
                <a className="nav-link">Veneto 8</a>
              </Link>
            </div>
            <div className="nav-item">
              <Link href="/ventures">
                <a className="nav-link">+ Emprendimientos</a>
              </Link>
            </div>
            <div className="nav-item">
              <Link href="/ventures">
                <a className="nav-link">La Empresa</a>
              </Link>
            </div>
          </Nav>
          <Nav>
            <Nav className="Link" href="#phone">
              <div className="nav-item">
                <div className="nav-link">0810 777 8002</div>
              </div>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
