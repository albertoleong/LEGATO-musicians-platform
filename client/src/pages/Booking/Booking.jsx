import BookingGrid from '../../components/BookingGrid/BookingGrid'
import './Booking.scss'

const Booking = () => {
    return (
        <main>
            <section className='booking__topSection'>
                <h1 className='booking__title'>Book the musician</h1>
            </section>
            <BookingGrid />
        </main>
    )
}
export default Booking