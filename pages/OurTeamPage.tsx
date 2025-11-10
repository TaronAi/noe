import React from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

const teamMembers = [
  { name: 'Jane Doe', role: 'Founder & Head Barista', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKK92fUbf96OXR4XFgE-Z4Kxr7dKcnVgxzA&s' },
  { name: 'John Smith', role: 'Roastmaster', imageUrl: 'https://us.images.westend61.de/0000966708pw/portrait-of-young-male-barista-at-coffee-shop-kitchen-counter-CUF21796.jpg' },
  { name: 'Emily White', role: 'Pastry Chef', imageUrl: 'https://images.prestigeonline.com/wp-content/uploads/sites/3/2022/03/07181959/Graf-Kwok-Pastry-Chef5.jpg' },
  { name: 'Michael Brown', role: 'Barista', imageUrl: 'https://thecoffeeguru.net/storage/2023/07/the_essential_apparel_pieces_for_every_barista.webp' },
];

const TeamMemberCard: React.FC<{ name: string; role: string; imageUrl: string }> = ({ name, role, imageUrl }) => (
  <div className="text-center group">
    <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-bold text-noe-dark">{name}</h3>
    <p className="text-noe-yellow">{role}</p>
  </div>
);

const OurTeamPage: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-noe-dark">Meet Our Team</h1>
            <p className="mt-4 text-lg text-gray-600">The passionate people behind every cup.</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-serif font-bold text-noe-dark mb-4">The Heart of Noe</h2>
            <p className="text-gray-600 leading-relaxed">
              We're a small, dedicated team united by a love for exceptional coffee and genuine hospitality. We believe that every cup tells a story, from the farm to your hands. Our passion is to make your day a little brighter, one perfect brew at a time.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll key={member.name} delay={index * 0.1 + 0.3}>
              <TeamMemberCard {...member} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.5}>
            <div className="mt-24 text-center bg-white p-12 rounded-lg shadow-xl max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-noe-dark mb-4">Join Our Team</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">
                    Are you passionate about coffee and community? We're always looking for talented individuals to join the Noe family. If you think you'd be a great fit, we'd love to hear from you.
                </p>
                <a 
                    href="mailto:careers@noecoffeebar.com"
                    className="inline-block bg-noe-yellow text-noe-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                >
                    Contact Us
                </a>
            </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default OurTeamPage;