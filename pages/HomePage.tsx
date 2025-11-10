import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/noecoffee/1920/1080')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-down">Welcome to Noe Coffee Bar</h1>
          <p className="text-lg md:text-xl max-w-2xl animate-fade-in-up">Great coffee • Fresh bites • Cozy vibes</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link 
              to="/menu" 
              className="bg-noe-yellow text-noe-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              View Our Menu
            </Link>
            <a
              href="https://www.foody.com.cy/delivery/leykosia/noe-coffee-bar-2000666908?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-noe-dark transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Place an Order
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-bold mb-4">Crafted with Passion</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Noe Coffee Bar was born from a simple idea: to create a space where community, design, and coffee come together. Our shop, built from modern shipping containers, reflects our commitment to innovation and quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We source the finest beans from sustainable farms around the world and roast them to perfection to bring out their unique flavors. Join us for a cup and become part of our story.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://picsum.photos/seed/noeinterior/800/600" alt="Noe Coffee Bar Interior" className="rounded-lg shadow-xl w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
