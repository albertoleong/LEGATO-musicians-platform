import Discover from '../../components/Discover/Discover'
import Landing from '../../components/Landing/Landing'
import './Home.scss'

const Home = () => {
    return (
        <main className='home'>
            <Landing />
            <Discover />
        </main>
    )
}
export default Home