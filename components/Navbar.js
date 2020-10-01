import React from 'react';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-xl navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Features
              </a>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a class='dropdown-item' href='#'>
                  Action
                </a>
                <a class='dropdown-item' href='#'>
                  Another action
                </a>
                <div class='dropdown-divider'></div>
                <a class='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link disabled'
                href='#'
                tabindex='-1'
                aria-disabled='true'
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
