import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Booking from './pages/Booking/Booking';
import SignUp from './pages/SignUp/SignUp';


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/booking/:artistId' element={<Booking />} />
        <Route path='/Sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
