import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Layers, Cloud, Brain, ArrowRight } from 'lucide-react';
import { SkillDomainCard } from './SkillDomainCard';

const skillDomains = [
  {
    icon: Code2,
    title: 'Languages',
    description: 'Core programming languages for building robust applications and systems.',
  },
  {
    icon: Layers,
    title: 'Frameworks',
    description: 'Modern frameworks for scalable frontend and backend development.',
  },
  {
    icon: Cloud,
    title: 'Deployment',
    description: 'Cloud platforms and tools for reliable application deployment.',
  },
  {
    icon: Brain,
    title: 'AI / ML',
    description: 'Machine learning and NLP technologies for intelligent solutions.',
  },
];

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleViewSkills = () => {
    navigate('/skills');
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />
      
      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise across the full development spectrum
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillDomains.map((domain, index) => (
            <div
              key={domain.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${150 + index * 100}ms`,
              }}
            >
              <SkillDomainCard
                icon={domain.icon}
                title={domain.title}
                description={domain.description}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`flex justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '550ms' }}
        >
          <button
            onClick={handleViewSkills}
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
            className="group relative overflow-hidden"
          >
            {/* Button glow */}
            <div
              className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 blur-lg transition-all duration-500 ${
                isCtaHovered ? 'opacity-100' : 'opacity-50'
              }`}
            />
            
            {/* Button content */}
            <div
              className={`relative flex items-center gap-3 px-8 py-4 rounded-xl border border-primary/30 bg-card/60 backdrop-blur-xl transition-all duration-500 ${
                isCtaHovered ? 'border-primary/60 bg-card/80' : ''
              }`}
              style={{
                boxShadow: isCtaHovered
                  ? '0 20px 40px -12px hsl(var(--primary) / 0.3)'
                  : '0 4px 20px -4px hsl(var(--primary) / 0.2)',
              }}
            >
              <span className="text-lg font-medium text-foreground">
                Click to view skills
              </span>
              <ArrowRight
                className={`w-5 h-5 text-primary transition-all duration-300 ${
                  isCtaHovered ? 'translate-x-1' : ''
                }`}
              />
              
              {/* Shimmer effect */}
              <div
                className={`absolute inset-0 -translate-x-full transition-transform duration-700 ${
                  isCtaHovered ? 'translate-x-full' : ''
                }`}
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.1), transparent)',
                }}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
