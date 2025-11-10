import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { ScrollDownIcon } from '../components/icons';

const HomePage: React.FC = () => {
  const cupsCounterRef = useRef<HTMLHeadingElement>(null);
  const cupsInView = useInView(cupsCounterRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (cupsInView && cupsCounterRef.current) {
      const node = cupsCounterRef.current;
      const controls = animate(0, 1000, {
        duration: 4,
        ease: "circOut",
        onUpdate(value) {
          node.textContent = String(Math.round(value));
        },
        onComplete() {
            node.textContent = '1000+';
        }
      });
      return () => controls.stop();
    }
  }, [cupsInView]);

  const recipesCounterRef = useRef<HTMLHeadingElement>(null);
  const recipesInView = useInView(recipesCounterRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (recipesInView && recipesCounterRef.current) {
      const node = recipesCounterRef.current;
      const controls = animate(0, 30, {
        duration: 4,
        ease: "circOut",
        onUpdate(value) {
          node.textContent = String(Math.round(value));
        },
        onComplete() {
            node.textContent = '30+';
        }
      });
      return () => controls.stop();
    }
  }, [recipesInView]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cyprus.wiz-guide.com/assets/modules/kat/articles/202510/10580/images/det_noe_wiz_5.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
              Welcome to Noe Coffee Bar
            </h1>
            <p className="mt-4 text-lg md:text-2xl">
              Great coffee • Fresh bites • Cozy vibes
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          aria-label="Scroll down"
        >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ScrollDownIcon />
            </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                  <h2 ref={cupsCounterRef} className="text-5xl md:text-6xl font-serif font-bold text-noe-yellow tracking-tighter">
                      0
                  </h2>
                  <p className="mt-2 text-lg text-gray-600">Cups Brewed with Love</p>
              </div>
              <div className="text-center">
                  <h2 ref={recipesCounterRef} className="text-5xl md:text-6xl font-serif font-bold text-noe-yellow tracking-tighter">
                      0
                  </h2>
                  <p className="mt-2 text-lg text-gray-600">Drink Recipes</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
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
                <img src="https://cyprus.wiz-guide.com/assets/modules/kat/articles/202510/10580/photos/gn_noe_wiz_4.jpg" alt="Noe Coffee Bar Interior" className="rounded-lg shadow-xl w-full h-full object-cover"/>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default HomePage;