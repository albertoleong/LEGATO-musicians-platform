import './Footer.scss'
import logo from '../../assets/icons/logo2.png'; // Import your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
            <h2 className='footer__title'>Legato</h2>
        </div>
        <div className="footer__social-links">
          {/* Add social media icons/links here */}
          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="footer__links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer__logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
