import './Footer.scss'
import logo from '../../assets/icons/logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
            <h2 className='footer__title'>Legato</h2>
        </div>
        <div className="footer__links">
          <Link to='/about' className='footer__link'>About Us</Link>
          <p className='footer__link'>Contact Us</p>
        </div>
        <div className="footer__logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
