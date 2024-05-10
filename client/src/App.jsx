import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Booking from './pages/Booking/Booking';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import { AuthProvider } from './AuthContext';


function App() {

  return (
    <>
    <BrowserRouter>
    <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/booking/:artistId' element={<Booking />} />
          <Route path='/Sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />}/>
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
