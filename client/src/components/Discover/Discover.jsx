import './Discover.scss'
import pianoGirl from '../../assets/images/piano-girl.jpg'
import check from '../../assets/icons/check.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModalSignUp from '../ModalSignUp/ModalSignUp'

const Discover = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOptionSelection = (option) => {
        console.log("Selected option:", option);
        closeModal();
    };


    return (
        <section className='discover'>
            <img src={pianoGirl} className='discover__image--2' alt='girl playing the piano'/>
            <div className='discover__container'>
                <article className='discover__square'>
                    <div className='discover__miniContainer'>
                        <h2 className='discover__titles'>Trusted Performers</h2>
                        <img src={check} className='discover__icon' alt='check mark'/>
                    </div>
                    <p className='discover__p'>Choose from a wide range of skilled musicians who will bring your event to life.</p>
                </article>
                <article className='discover__square'>
                    <div className='discover__miniContainer'>
                        <h2 className='discover__titles'>Easy Booking</h2>
                        <img src={check} className='discover__icon' alt='check mark'/>
                    </div>
                    <p className='discover__p'>Our simple and intuitive platform makes it effortless to book your favorite musicians.</p>
                </article>
                <article className='discover__square'>
                    <div className='discover__miniContainer'>
                        <h2 className='discover__titles'>Effective Communication</h2>
                        <img src={check} className='discover__icon' alt='check mark'/>
                    </div>
                    <p className='discover__p'>Seamlessly communicate with your artist through the Legato platform.</p>
                </article>
                <p className='discover__par'>
                    "Whether you're planning a wedding, corporate event, or private party, 
                    Legato's diverse selection of musicians will suit your preferences." - Hannah J
                </p>
                <Link className='discover__link--tablet'>
                <button className='discover__button'>Sign Up Today!</button>
            </Link>
            </div>
            <img src={pianoGirl} className='discover__image' alt='girl playing the piano'/>
            <p className='discover__par discover__par--bottom'>
                    "Whether you're planning a wedding, corporate event, or private party, 
                    Legato's diverse selection of musicians will suit your preferences." - Hannah J
            </p>
            <Link className='discover__link'>
                <button onClick={openModal}  className='discover__button'>Sign Up Today!</button>
            </Link>
            {isModalOpen && (
                <ModalSignUp
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    handleOptionSelection={handleOptionSelection}
                />
            )}
        </section>
    )
}
export default Discover