import { Link } from 'react-router-dom'
import './Header.scss'

const Header =() => {
    return (
        <section className='header'>
            <div className='header__logo'>
                <img className='header_image' alt='logo'/>
                <h1 className='header__title'>Legato</h1>
            </div>
            <div className='header__nav'>
                <Link className='header__link'>
                    <button className='header__button'>Sign Up</button>
                </Link>
            </div>
        </section>
    )
}

export default Header