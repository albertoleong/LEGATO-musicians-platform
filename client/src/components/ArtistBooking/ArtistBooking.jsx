import './ArtistBooking.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import image from '../../assets/images/acoustic.jpg'
import { useNavigate } from 'react-router-dom'
import ig from '../../assets/icons/ig.png'
import youtube from '../../assets/icons/tube.png'
import nate from '../../assets/images/nate.jpeg'

const ArtistBooking = ({ artistId }) => {
    const navigate = useNavigate()
    const [selectedArtist, setSelectedArtist] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false) 
    const API_URL = "http://localhost:8080/artists/"

    useEffect(() => {
        const getTheArtist = async () => {
            try {
                const response = await axios.get(`${API_URL}${artistId}`)
                setSelectedArtist(response.data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        getTheArtist()
    }, [artistId, API_URL])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const inquiryData = {
            email: formData.get('email'),
            date: formData.get('date'),
            description: formData.get('description'),
            artistId: selectedArtist.id
        };
        try {
            console.log(inquiryData)
            await axios.post('http://localhost:8080/inquiries', inquiryData);
            setSuccess(true);  
            setTimeout(() => {
                setSuccess(false);  
                navigate('/');
            }, 3000);  
        } catch (error) {
            console.error('Error submitting inquiry:', error);
        }
    };

    return (
        <section className='profile'>
            <h2 className='profile__name'>{selectedArtist.name}</h2>
            <div className='profile__box'>
                {image ? (<img src={nate} alt='artist performing' className='profile__image'/>) : (
                    <div>Loading </div>
                ) }
                <div className='profile__divider'>
                    <div className='profile__info'>
                        <p className='profile__description'>{selectedArtist.description}</p>
                        <p className='profile__rate'>$50/Hour</p>
                    </div>
                    <div className='profile__socials'>
                        <p className='profile__socialTitle'>Listen below:</p>
                            <div>
                                <img src={ig} className='profile__icon' alt='instagram'/>
                                <img src={youtube} className='profile__icon' alt='youtube'/>
                            </div>
                    </div>
                    <div className='profile__contact'>
                        <p className='profile__reach'>Send an inquiry:</p>
                        {success && (
                            <div className='profile__success'>
                                <div className='profile__success__container'>
                                    <p>Thank you for your inquiry! {selectedArtist.name} will be in touch soon.</p>
                                </div>
                            </div>
                        )}
                        <form className='profile__form' onSubmit={handleSubmit} >
                            <input name='email' className='profile__input' placeholder='Your Email' required></input>
                            <input name='date' className='profile__input' placeholder='Date of your event (year/month/day)' required></input>
                            <textarea name='description' className='profile__inquiry' placeholder='Describe your event' required></textarea>
                            <button type='submit' className='profile__submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtistBooking
