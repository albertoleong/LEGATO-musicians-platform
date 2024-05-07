import './Discover.scss'
import pianoGirl from '../../assets/images/piano-girl.jpg'
import check from '../../assets/icons/check.png'
import { Link } from 'react-router-dom'

const Discover = () => {
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
                    Whether you're planning a wedding, corporate event, or private party, 
                    our diverse selection of musicians will suit your preferences.
                </p>
                <Link className='discover__link--tablet'>
                <button className='discover__button'>Sign Up Today!</button>
            </Link>
            </div>
            <img src={pianoGirl} className='discover__image' alt='girl playing the piano'/>
            <p className='discover__par discover__par--bottom'>
                    Whether you're planning a wedding, corporate event, or private party, 
                    our diverse selection of musicians will suit your preferences.
            </p>
            <Link className='discover__link'>
                <button className='discover__button'>Sign Up Today!</button>
            </Link>
        </section>
    )
}
export default Discover