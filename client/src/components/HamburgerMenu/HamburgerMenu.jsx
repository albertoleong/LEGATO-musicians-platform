import React, { useState } from 'react';
import './HamburgerMenu.scss'; 
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li className='menu__item'>About</li>
        <Link to='/login' className='menu__item'>Log in</Link>
        <li className='menu__item'>FAQ</li>
        <li className='menu__item'>Contact Us</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
