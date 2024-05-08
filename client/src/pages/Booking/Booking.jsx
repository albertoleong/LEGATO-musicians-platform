import BookingGrid from '../../components/BookingGrid/BookingGrid'
import './Booking.scss'

const Booking = () => {
    
    return (
        <main className='booking'>
            <section className='booking__topSection'>
                <h1 className='booking__title'>Book your musician</h1>
            </section>
            <BookingGrid />
        </main>
    )
}
export default Booking