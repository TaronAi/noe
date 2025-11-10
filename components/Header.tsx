import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = 'text-noe-yellow';
  const inactiveLinkClass = 'hover:text-noe-yellow transition-colors duration-300';

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-4xl font-serif font-bold text-noe-dark">
              noe
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    isActive ? activeLinkClass : inactiveLinkClass
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a 
                href="https://www.foody.com.cy/delivery/leykosia/noe-coffee-bar-2000666908?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-noe-yellow text-noe-dark font-bold py-2 px-5 rounded-full text-sm hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Place an Order
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-noe-dark hover:text-noe-yellow focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-noe-yellow text-white' : 'text-noe-dark hover:bg-gray-100'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="https://www.foody.com.cy/delivery/leykosia/noe-coffee-bar-2000666908?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-bold text-center bg-noe-yellow text-noe-dark mt-4"
            >
              Place an Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
