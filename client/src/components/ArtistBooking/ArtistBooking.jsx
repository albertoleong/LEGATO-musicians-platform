import './ArtistBooking.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import image from '../../assets/images/acoustic.jpg'
import { useNavigate } from 'react-router-dom'

const ArtistBooking = ({ artistId }) => {
    const navigate = useNavigate()
    const [selectedArtist, setSelectedArtist] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
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

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            alert(`Thank you for your inquiry! ${selectedArtist.name} will be in touch soon.`)
            navigate('/')
        } catch (error){
            console.error(error)
        }
    }

    return (
        <section className='profile'>
            <h2 className='profile__name'>{selectedArtist.name}</h2>
            <div className='profile__box'>
                {image ? (<img src={image} alt='artist performing' className='profile__image'/>) : (
                    <div>Loading </div>
                ) }
                <div className='profile__divider'>
                    <div className='profile__info'>
                        <p className='profile__description'>{selectedArtist.description}</p>
                    </div>
                    <div className='profile__contact'>
                        <p className='profile__reach'>Send an inquiry:</p>
                        <form className='profile__form' onSubmit={handleSubmit} >
                            <input className='profile__input' placeholder='Your Email'></input>
                            <textarea className='profile__inquiry' placeholder='Describe your event'></textarea>
                            <button type='submit' className='profile__submit'>Submit</button>
                        </form>
                        {/* <p className='profile__email'>{selectedArtist.email}</p> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtistBooking
