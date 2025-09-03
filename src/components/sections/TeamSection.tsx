import { useEffect, useRef } from 'react';
import teamSarah from '@/assets/team-sarah.jpg';
import teamMike from '@/assets/team-mike.jpg';
import teamEmma from '@/assets/team-emma.jpg';

const team = [
  {
    image: teamSarah,
    name: 'Sarah Chen',
    role: 'Creative Director'
  },
  {
    image: teamMike,
    name: 'Mike Rodriguez',
    role: 'Lead Developer'
  },
  {
    image: teamEmma,
    name: 'Emma Thompson',
    role: 'UX Designer'
  }
];

export const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.team-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-fade-up');
        }, index * 200);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-20 opacity-0">
          <h2 className="section-title mb-6">
            <span className="section-title-bold">Meet Our</span>{' '}
            <span className="section-title-thin">Team</span>
          </h2>
          <p className="text-xl text-light font-outfit font-light max-w-3xl mx-auto">
            Talented professionals passionate about creativity.
          </p>
        </div>

        {/* Team Grid */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="team-card text-center group opacity-0"
            >
              {/* Image */}
              <div className="relative mb-6 mx-auto w-64 h-64 overflow-hidden rounded-3xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover image-hover"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-2xl font-outfit font-semibold">
                  {member.name}
                </h3>
                <p className="text-accent font-outfit font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};