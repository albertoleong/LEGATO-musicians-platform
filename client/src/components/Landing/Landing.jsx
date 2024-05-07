import './Landing.scss'
import gig from '../../assets/images/bass-boy.jpg'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <section className='landing'>
            <div className='landing__container'>
                <h1 className='landing__title'>Find the perfect artist for your next event</h1>
                <p className='landing__par'>Legato is your go-to platform for finding and booking talented musicians and artists for any occasion.</p>
                <div className='landing__buttons'>
                    <Link className='landing__link' to={'/booking'}>
                        <button className='landing__button'>Start Booking</button>
                    </Link>
                    <Link className='landing__link'>
                        <button className='landing__button landing__button--white'>Learn More</button>
                    </Link>
                </div>
            </div>
            <img src={gig} alt='band performing live' className='landing__image'/>
        </section>
    )
}

export default Landing