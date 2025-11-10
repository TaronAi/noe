import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-noe-dark">Our Story</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">More than just a coffee shop, we're a destination built on a dream.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/noecontainer/800/900" 
              alt="Noe Coffee Bar exterior" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Noe Coffee Bar started as a sketch on a napkin—a vision for a unique space that combines minimalist industrial architecture with the warmth of a neighborhood coffee shop. We found our home in a set of repurposed shipping containers, a testament to our belief in sustainable and innovative design.
            </p>
            <p>
              Our mission is simple: to serve exceptional coffee and create a welcoming environment for our community. Every bean is ethically sourced and meticulously roasted to highlight its unique character. We believe that a great cup of coffee has the power to brighten a day, spark a conversation, and bring people together.
            </p>
            <p>
              From the clean lines of our architecture to the carefully crafted latte art, every detail at Noe is intentional. We invite you to relax, connect, and enjoy the moment with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
