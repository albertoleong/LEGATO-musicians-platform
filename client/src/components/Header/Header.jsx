// Header.js
import { Link } from 'react-router-dom';
import './Header.scss';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import logo from '../../assets/icons/logo1.png';


const Header = () => {
   
    return (
        <section className='header'>
            <Link className='header__logo' to='./'>
                <img src={logo} className='header__image' alt='logo'/>
                <h2 className='header__title'>Legato</h2>
            </Link>
            <div className='header__nav'>
                <div className='header__link'>
                    <button className='header__button'>Sign Up</button>
                </div>
                <HamburgerMenu />
            </div>
        </section>
    );
}

export default Header;
