import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { CustomCursor } from '@/components/CustomCursor';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/sections/Footer';

// Project data - you can expand this with more projects
const projectData = {
  'interior-design-studio': {
    title: 'Interior Design Studio',
    category: 'Branding & Web Design',
    description: 'A comprehensive website for a luxury interior design studio, featuring portfolio showcases, client testimonials, and an intuitive booking system.',
    features: [
      'Responsive design optimized for all devices',
      'Portfolio gallery with filtering capabilities',
      'Client testimonial management system',
      'Online consultation booking platform',
      'SEO optimized content structure',
      'Fast loading times and smooth animations'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    screenshots: [
      '/src/assets/portfolio-interior.jpg',
      '/src/assets/portfolio-branding.jpg',
      '/src/assets/portfolio-ecommerce.jpg'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  'tech-startup-identity': {
    title: 'Tech Startup Identity',
    category: 'Brand Identity',
    description: 'Complete brand identity design for a cutting-edge tech startup, including logo design, color palette, typography, and brand guidelines.',
    features: [
      'Modern and scalable logo design',
      'Comprehensive brand guidelines',
      'Custom color palette and typography',
      'Brand application examples',
      'Digital and print-ready assets',
      'Brand consistency documentation'
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    screenshots: [
      '/src/assets/portfolio-branding.jpg',
      '/src/assets/portfolio-interior.jpg',
      '/src/assets/portfolio-ecommerce.jpg'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  'premium-ecommerce': {
    title: 'Premium E-commerce',
    category: 'UI/UX & Development',
    description: 'A high-performance e-commerce platform built specifically for the Algerian market, featuring local payment integrations and delivery solutions.',
    features: [
      'Local payment gateway integration (Chargily)',
      'Delivery service integration (Yalidine)',
      'Advanced product catalog management',
      'Secure user authentication system',
      'Order tracking and management',
      'Multi-language support (Arabic/French)'
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    screenshots: [
      '/src/assets/portfolio-ecommerce.jpg',
      '/src/assets/portfolio-interior.jpg',
      '/src/assets/portfolio-branding.jpg'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  'luxury-resort-website': {
    title: 'Luxury Resort Website',
    category: 'Web Design',
    description: 'An elegant and immersive website for a luxury resort, featuring stunning visuals, virtual tours, and seamless booking experiences.',
    features: [
      'Immersive hero section with video backgrounds',
      'Virtual tour integration',
      'Advanced booking calendar system',
      'Multi-room availability checker',
      'Local attraction recommendations',
      'Mobile-first responsive design'
    ],
    technologies: ['React', 'Three.js', 'Node.js', 'MongoDB'],
    screenshots: [
      '/src/assets/portfolio-interior.jpg',
      '/src/assets/portfolio-ecommerce.jpg',
      '/src/assets/portfolio-branding.jpg'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  'financial-services-app': {
    title: 'Financial Services App',
    category: 'Mobile Design',
    description: 'A secure and user-friendly mobile application for financial services, featuring advanced security measures and intuitive user experience.',
    features: [
      'Biometric authentication system',
      'Real-time transaction monitoring',
      'Investment portfolio tracking',
      'Secure messaging system',
      'Multi-currency support',
      'Offline functionality'
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    screenshots: [
      '/src/assets/portfolio-branding.jpg',
      '/src/assets/portfolio-interior.jpg',
      '/src/assets/portfolio-ecommerce.jpg'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  'creative-agency-site': {
    title: 'Creative Agency Site',
    category: 'Full-Stack Development',
    description: 'A dynamic and interactive website for a creative agency, showcasing their work through engaging animations and modern web technologies.',
    features: [
      'Interactive portfolio showcases',
      'Real-time collaboration tools',
      'Client project management system',
      'Blog and content management',
      'Advanced analytics dashboard',
      'Performance optimization'
    ],
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'Redis', 'AWS'],
    screenshots: [
      '/src/assets/portfolio-ecommerce.jpg',
      '/src/assets/portfolio-branding.jpg',
      '/src/assets/portfolio-interior.jpg'
    ],
    liveUrl: '#',
    githubUrl: '#'
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const project = projectData[projectId as keyof typeof projectData];

  useEffect(() => {
    if (!project) {
      navigate('/');
      return;
    }
    setIsLoading(false);
  }, [project, navigate]);

  if (isLoading || !project) {
    return <div>Loading...</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Global Components */}
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      {/* Main Content */}
      <main className="pt-24">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-light hover:text-foreground transition-colors font-outfit"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        </div>

        {/* Project Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-outfit font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-light font-outfit font-light max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Project Screenshots */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl bg-card border border-border">
              <img
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              
              {/* Navigation Arrows */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors rotate-180"
                  >
                    <ArrowLeft size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {project.screenshots.length > 1 && (
              <div className="flex justify-center space-x-4 mt-6">
                {project.screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-accent' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-outfit font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-light font-outfit leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-outfit font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-outfit font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-8 space-y-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors font-outfit"
                >
                  <ExternalLink size={20} />
                  <span>View Live Project</span>
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors font-outfit"
                >
                  <Github size={20} />
                  <span>View Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
