import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='logoContainer'>
          <h1 className='logo'>Lab</h1>
        </div>
        <ul className='navLinks'>
          <li>
            <a href='#Home' className='link'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='link'>
              About
            </a>
          </li>
          <li>
            <a
              href='https://docs.google.com/forms/d/1IzHr0LJN7UERNupOW5KeWtD7Ch5lBxMZ5Bv0Z2Hmcfk/edit'
              className='link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
