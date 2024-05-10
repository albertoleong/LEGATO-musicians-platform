import { Link } from 'react-router-dom';
import './ModalSignUp.scss'


const ModalSignUp = ({ isOpen, closeModal }) => {
  return (
    <div className={isOpen ? "modal" : "modal__closed"}>
      <div className="modal__content">
        <h2 className='modal__title'>How will you be using Legato?</h2>
        <Link to='/sign-up' className='modal__link'>
          <button className='modal__button'>As an artist</button>
        </Link>
        <button className='modal__button'>As an event planner</button>
        <button className='modal__button--close' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default ModalSignUp;

