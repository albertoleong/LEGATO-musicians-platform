import { useState } from 'react';
import './HamburgerMenu.scss'; 
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth()


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
        <Link to='/about' className='menu__item'>About</Link>
        <Link to='/login' className='menu__item'>Log in</Link>
        {isLoggedIn && (
          <Link to='/profile' className='menu__item'>My Profile</Link>
        )}
        <Link to='/booking' className='menu__item'>Browse artists</Link>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
