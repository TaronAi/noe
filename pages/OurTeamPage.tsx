import React from 'react';

const teamMembers = [
  { name: 'Jane Doe', role: 'Founder & Head Barista', imageUrl: 'https://picsum.photos/seed/jane/400/400' },
  { name: 'John Smith', role: 'Roastmaster', imageUrl: 'https://picsum.photos/seed/john/400/400' },
  { name: 'Emily White', role: 'Pastry Chef', imageUrl: 'https://picsum.photos/seed/emily/400/400' },
  { name: 'Michael Brown', role: 'Barista', imageUrl: 'https://picsum.photos/seed/michael/400/400' },
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
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-noe-dark">Meet Our Team</h1>
          <p className="mt-4 text-lg text-gray-600">The passionate people behind every cup.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;
