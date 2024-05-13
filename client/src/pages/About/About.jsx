import { Link } from 'react-router-dom';
import './About.scss';

const About = () => {

    return (
        <main className="about">
            <section className="about__container">
                <h1 className="about__title">About Us</h1>
                <p className="about__description">
                    Welcome to Legato, where we connect event organizers with talented musicians
                    to make every occasion memorable. Whether you're planning a wedding, a corporate event, or
                    a cozy night at your favorite coffee shop, we've got the perfect musicians for you.
                </p>
            </section>

            <section className="about__container">
                <h2 className="about__title">Why Choose Us?</h2>
                <ul className="about__benefit-list">
                    <li className="about__description">
                            Explore a diverse selection of musicians, from solo performers to full bands,
                            covering various music genres to suit your event's vibe.
                    </li>
                    <li className="about__description">Seamless Booking Experience</li>
                    <li className="about__description">Verified Musicians for Quality Assurance</li>
                    <li className="about__description">24/7 Customer Support</li>
                </ul>
            </section>

            <section className="about__container">
                <h2 className="about__title">Ready to Book Your Perfect Musician?</h2>
                <p className="about__description">
                    Start planning your event with Legato today and experience the magic of live music.
                </p>
                <Link to='/booking'>
                    <button className="about__button">Get Started</button>
                </Link>
            </section>
        </main>
    )
}
export default About;
