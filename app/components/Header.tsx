// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'; // remixでのルーティングに使用
import './Header.css';

const Header: React.FC = () => {
  const googleFormEmbedUrl =
    'https://docs.google.com/forms/d/1IzHr0LJN7UERNupOW5KeWtD7Ch5lBxMZ5Bv0Z2Hmcfk/viewform?embedded=true';

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
            <a href={googleFormEmbedUrl} className='link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
