import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-noe-dark">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Visit us or give us a call.</p>
        </div>

        <div className="max-w-lg mx-auto text-center mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Visit Us</h3>
              <a href="https://maps.app.goo.gl/543qoWr97FQZ1w7w8" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-noe-yellow transition-colors duration-300">
                📍Ayiou Marona 72, Pera Chorio, Nisou
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Call Us</h3>
              <a href="tel:+35799714101" className="text-gray-600 hover:text-noe-yellow transition-colors duration-300">
                📞99 714 101
              </a>
            </div>
             <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Hours</h3>
              <p className="text-gray-600">Monday - Friday: 5:30am - 5:30pm</p>
              <p className="text-gray-600">Saturday: 6am - 1:30pm</p>
              <p className="text-gray-600">Saturday: 7am - 1:30pm</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Services</h3>
              <p className="text-gray-600 mb-4">Takeaway & Delivery available</p>
              <a
                href="https://www.foody.com.cy/delivery/leykosia/noe-coffee-bar-2000666908?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-noe-yellow text-noe-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Place an Order Online
              </a>
            </div>
          </div>
        </div>
        
        {/* Google Maps Embed */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.870327318028!2d33.38573191560932!3d35.04401562283084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de19302e1c0701%3A0x1b417c46c33c3755!2sNOE%20Coffee%20Bar!5e0!3m2!1sen!2sus!4v1718049969018!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-xl"
            title="Noe Coffee Bar Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
