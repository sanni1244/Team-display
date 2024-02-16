import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavGate = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-400 to-purple-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl navName1">PortFolio</div>
          <div className="hidden md:flex space-x-10">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="text-white font-bold hover:text-blue-300 "
            >
              Home
            </NavLink>
            <NavLink
              to="/Contact"
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
              Skills
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="active"
              className="text-white font-bold hover:text-blue-300"
            >
              About Me
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
              exact
              to="portfolio/"
              activeClassName="active"
              className="block text-white font-bold py-2 px-4 hover:text-blue-300"
            >
              Home
            </NavLink>
            <NavLink
              to="portfolio/contact"
              activeClassName="active"
              className="block text-white font-bold py-2 px-4 hover:text-blue-300"
            >
              Contact
            </NavLink>
            <NavLink
              to="portfolio/services"
              activeClassName="active"
              className="block text-white font-bold py-2 px-4 hover:text-blue-300"
            >
              Services
            </NavLink>
            <NavLink
              to="portfolio/about"
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
