import './BookingGrid.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BookingGrid = () => {
    const [artistsList, setArtistsList] = useState([])
    const [filter, setFilter] = useState('')
    const [locationFilter, setLocationFilter] = useState('') // New state for location filter
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

    const handleLocationChange = (event) => { 
        setLocationFilter(event.target.value)
    }

    const filteredArtists = artistsList.filter(artist => {
        return (artist.type.toLowerCase().includes(filter.toLowerCase()) || 
               artist.music_styles.toLowerCase().includes(filter.toLowerCase())) &&
               (locationFilter === '' || artist.location === locationFilter) 
    })

    return (
        <section className='grid'>
            <div className='grid__filter'>
                <input 
                    className='grid__input'
                    type="text" 
                    placeholder="Search by music genre" 
                    value={filter} 
                    onChange={handleFilterChange} 
                />
                <select className='grid__input grid__input--location' onChange={handleLocationChange}>
                    <option value="">All Locations</option>
                    <option value="Columbus, OH">Columbus, OH</option>
                    <option value="New York City, NY">New York City, NY</option>
                </select>
            </div>
            <ul className='grid__list'>
                {filteredArtists.map((artist) => {
                    return (
                        <Link to={`/booking/${artist.id}`}  className='grid__link' key={artist.id}>
                            <li className='grid__item'>
                                <div className='grid__div'>
                                    <h2 className='grid__name'>{artist.name}</h2>
                                    <p className='grid__par'>{artist.type}</p>
                                </div>
                                <p className='grid__par'>{artist.music_styles}</p>
                            </li>
                        </Link>
                    )
                })} 
            </ul>
        </section>
    )
}

export default BookingGrid
