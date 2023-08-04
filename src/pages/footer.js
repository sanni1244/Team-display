// Footer.js

import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-4">
          <p>&copy; {new Date().getFullYear()} Your Data Science Company</p>
          <div className="border border-white h-6"></div>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
