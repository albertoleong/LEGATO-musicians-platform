import './Landing.scss'
import trio from '../../assets/images/suit-trio.jpg'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <section className='landing'>
            <div className='landing__container'>
                <h1 className='landing__title'>Find the perfect artist for your next event</h1>
                <p className='landing__par'>This is some sort of call to action or description</p>
                <div className='landing__buttons'>
                    <Link className='landing__link'>
                        <button className='landing__button'>Start Booking</button>
                    </Link>
                    <Link className='landing__link'>
                        <button className='landing__button landing__button--white'>Learn More</button>
                    </Link>
                </div>
            </div>
            <img src={trio} alt='band performing live' className='landing__image'/>
        </section>
    )
}

export default Landing