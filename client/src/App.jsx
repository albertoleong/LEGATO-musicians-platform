import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/artists/:artistId' element={<Home />} /> */}
        {/* <Route path='/upload' element={<UploadPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
