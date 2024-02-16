import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-2xl">Your Logo</div>
          <ul className="flex space-x-4">
            <li>
              <a
                className="text-white hover:text-blue-200 transition duration-300 px-4 py-2 rounded-lg"
                href="./mainpage.js"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-blue-200 transition duration-300 px-4 py-2 rounded-lg"
                href="./"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-blue-200 transition duration-300 px-4 py-2 rounded-lg"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-blue-200 transition duration-300 px-4 py-2 rounded-lg"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
