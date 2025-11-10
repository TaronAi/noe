import React from 'react';
import { InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-noe-dark text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Noe Coffee Bar. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.foody.com.cy/delivery/leykosia/noe-coffee-bar-2000666908?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-300"
            >
              Order on Foody
            </a>
            <a href="https://www.instagram.com/noe.cafe/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;