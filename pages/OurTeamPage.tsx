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
    <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll key={member.name} delay={index * 0.1}>
              <TeamMemberCard {...member} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;