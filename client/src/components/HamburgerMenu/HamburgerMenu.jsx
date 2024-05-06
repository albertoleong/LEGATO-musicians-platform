import React, { useState } from 'react';
import './HamburgerMenu.scss'; 

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
        <li>About</li>
        <li>Log in</li>
        <li>FAQ</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
