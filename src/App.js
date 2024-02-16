import React from 'react';
import Navbar from './section/navbar';
import Home from './pages/home';
import ContactUs from './pages/contact';
import './fonts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/services';
import About from './pages/about'
import Footer from './section/footer';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

