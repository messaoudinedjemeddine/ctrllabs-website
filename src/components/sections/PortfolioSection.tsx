import { useEffect, useRef } from 'react';
import portfolioInterior from '@/assets/portfolio-interior.jpg';
import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioEcommerce from '@/assets/portfolio-ecommerce.jpg';

const projects = [
  {
    image: portfolioInterior,
    title: 'Interior Design Studio',
    category: 'Branding & Web Design'
  },
  {
    image: portfolioBranding,
    title: 'Tech Startup Identity',
    category: 'Brand Identity'
  },
  {
    image: portfolioEcommerce,
    title: 'Premium E-commerce',
    category: 'UI/UX & Development'
  },
  {
    image: portfolioInterior,
    title: 'Luxury Resort Website',
    category: 'Web Design'
  },
  {
    image: portfolioBranding,
    title: 'Financial Services App',
    category: 'Mobile Design'
  },
  {
    image: portfolioEcommerce,
    title: 'Creative Agency Site',
    category: 'Full-Stack Development'
  }
];

export const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      const cards = gridRef.current.querySelectorAll('.portfolio-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-fade-up');
        }, index * 200);
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="portfolio" className="py-32 bg-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-20 opacity-0">
          <h2 className="section-title mb-6">
            <span className="section-title-bold">Featured</span>{' '}
            <span className="section-title-thin">Projects</span>
          </h2>
          <p className="text-xl text-light font-outfit font-light max-w-3xl mx-auto">
            A curated selection of our most impactful work in the Algerian digital landscape.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="portfolio-card group cursor-pointer opacity-0"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-card border border-border hover:shadow-[var(--shadow-soft)] transition-smooth">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover image-hover"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth" />
                  
                  {/* Hover overlay with "View Project" text */}
                  <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <span className="text-white font-outfit font-semibold text-lg">View Project</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-outfit font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-accent font-outfit font-medium text-sm">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};