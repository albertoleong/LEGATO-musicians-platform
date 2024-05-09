import ArtistBooking from '../../components/ArtistBooking/ArtistBooking'
import BookingGrid from '../../components/BookingGrid/BookingGrid'
import './Booking.scss'
import { useParams } from 'react-router-dom'

const Booking = () => {
    const { artistId } = useParams()

    return (
        <main className='booking'>
            <section className='booking__topSection'>
                <h1 className='booking__title'>Book your musician</h1>
            </section>
            {artistId && <ArtistBooking artistId={artistId} />}
            <BookingGrid />
        </main>
    )
}
export default Booking
