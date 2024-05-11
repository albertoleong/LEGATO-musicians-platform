import './Footer.scss'
import logo from '../../assets/icons/logo2.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
            <h2 className='footer__title'>Legato</h2>
        </div>
        <div className="footer__links">
          <p className='footer__link'>About Us</p>
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
