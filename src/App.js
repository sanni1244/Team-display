import React from 'react';
import Navbar from './navbar';
import Mainpage from './pages/mainpage';
import ContactUs from './pages/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/services';
import About from './pages/about'
import Footer from './pages/footer';
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;