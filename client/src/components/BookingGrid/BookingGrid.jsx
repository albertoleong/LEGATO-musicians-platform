import './BookingGrid.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BookingGrid = () => {
    const [artistsList, setArtistsList] = useState([])
    const [filter, setFilter] = useState('')
    const API_URL = "http://localhost:8080/"

    useEffect(() => {
        const getArtists = async() => {
            try {
                const artists = await axios.get(API_URL)
                setArtistsList(artists.data)
            } catch (error) {
                console.error(error)
            }
        }
        getArtists()
    },[] )

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const filteredArtists = artistsList.filter(artist => {
        return artist.type.toLowerCase().includes(filter.toLowerCase()) || 
               artist.music_styles.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <section className='grid'>
            <input 
                className='grid__input'
                type="text" 
                placeholder="Filter by type or music genre" 
                value={filter} 
                onChange={handleFilterChange} 
            />
            <ul className='grid__list'>
                {filteredArtists.map((artist) => {
                    return (
                        <li className='grid__item' key={artist.id}>
                            <div className='grid__div'>
                                <h2 className='grid__name'>{artist.name}</h2>
                                <p>{artist.type}</p>
                            </div>
                            <p className='grid__par'>{artist.music_styles}</p>
                        </li>
                    )
                })} 
            </ul>
        </section>
    )
}

export default BookingGrid
