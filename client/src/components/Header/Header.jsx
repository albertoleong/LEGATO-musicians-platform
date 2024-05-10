import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import './Header.scss';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import logo from '../../assets/icons/logo1.png';
import loggedInImage from '../../assets/images/piano-girl.jpg';

const Header = () => {
    const { isLoggedIn, logout } = useAuth()

    return (
        <section className='header'>
            <Link className='header__logo' to='./'>
                <img src={logo} className='header__image' alt='logo'/>
                <h2 className='header__title'>Legato</h2>
            </Link>
            <div className='header__nav'>
                {!isLoggedIn && (
                    <Link to='/sign-up' className='header__link'>
                        <button className='header__button'>Sign Up</button>
                    </Link>
                )}
                {isLoggedIn && (
                    <button onClick={logout} className='header__button'>Logout</button> 
                )}
                {isLoggedIn && <img src={loggedInImage} className='header__loggedin-image' alt='Logged In'/>} 
                <HamburgerMenu /> 
            </div>
        </section>
    );
};

export default Header;




// import { Link } from 'react-router-dom';
// import './Header.scss';
// import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
// import logo from '../../assets/icons/logo1.png';


// const Header = () => {
   
//     return (
//         <section className='header'>
//             <Link className='header__logo' to='./'>
//                 <img src={logo} className='header__image' alt='logo'/>
//                 <h2 className='header__title'>Legato</h2>
//             </Link>
//             <div className='header__nav'>
//                 <Link to='/sign-up' className='header__link'>
//                     <button className='header__button'>Sign Up</button>
//                 </Link>
//                 <HamburgerMenu />
//             </div>
//         </section>
//     );
// }

// export default Header;
