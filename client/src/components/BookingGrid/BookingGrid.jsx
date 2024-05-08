import './BookingGrid.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BookingGrid = () => {

    const [artistsList, setArtistsList] = useState([])
    const API_URL = "http://localhost:8080/"
    //const API_URL = process.env.REACT_APP_API_URL

    useEffect(() => {
        const getArtists = async() => {
        try {
            const artists = await axios.get(API_URL)
            setArtistsList(artists.data)
            console.log(artists.data)
        } catch (error) {
            console.error(error)
            }
        }
        getArtists()
    },[] )

    return (
        <section className='grid'>
            <ul className='grid__list'>
                {artistsList.map((artist) => {
                    return (
                        <li className='grid__item'>
                            <h2>{artist.name}</h2>
                        </li>
                    )
                })} 
            </ul>
        </section>
    )
}
export default BookingGrid