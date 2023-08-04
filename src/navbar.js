import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavGate = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="nav-bar bg-blue-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="path/to/your-logo.png" // Replace with the path to your logo image
              alt="Logo"
              className="block h-10 w-20 rounded-full sm:mx-0 sm:shrink-0 object-cover border-4 border-white grid grid-cols-2 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 fix-all"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              activeClassName="active" // This class will be applied to the active link
              className="text-white font-bold"
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="text-white font-bold hover:text-blue-300"
            >
              Contact
            </NavLink>
            <NavLink
              to="/services"
              activeClassName="active"
              className="text-white font-bold hover:text-blue-300"
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="active"
              className="text-white font-bold hover:text-blue-300"
            >
              About
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-blue-300"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <NavLink
              to="/"
              activeClassName="active"
              className="block text-white font-bold py-2 px-4"
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="block text-white font-bold py-2 px-4 hover:text-blue-300"
            >
              Contact
            </NavLink>
            <NavLink
              to="/services"
              activeClassName="active"
              className="block text-white font-bold py-2 px-4 hover:text-blue-300"
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="active"
              className="block text-white font-bold py-2 px-4 hover:text-blue-300"
            >
              About
            </NavLink>
          </div>
        )}
      </nav>
      {props.children}
    </>
  );
};

export default NavGate;

