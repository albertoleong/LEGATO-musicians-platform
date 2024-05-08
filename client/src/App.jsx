import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Booking from './pages/Booking/Booking';


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/booking/:artistId' element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
