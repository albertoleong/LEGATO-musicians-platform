import './ModalSignUp.scss'


const ModalSignUp = ({ isOpen, closeModal, handleOptionSelection }) => {
  return (
    <div className={isOpen ? "modal" : "modal__closed"}>
      <div className="modal__content">
        <h2 className='modal__title'>How will you be using Legato?</h2>
        <button className='modal__button' onClick={() => handleOptionSelection("Option 1")}>As an artist</button>
        <button className='modal__button' onClick={() => handleOptionSelection("Option 2")}>As an event planner</button>
        <button className='modal__button--close' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default ModalSignUp;

