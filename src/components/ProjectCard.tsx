import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projectsData';

// Import images
import distractorImg from '@/assets/project-distractor.jpg';
import questionImg from '@/assets/project-question.jpg';
import gamingImg from '@/assets/project-gaming.jpg';
import plantImg from '@/assets/project-plant.jpg';

const imageMap: Record<string, string> = {
  'project-distractor': distractorImg,
  'project-question': questionImg,
  'project-gaming': gamingImg,
  'project-plant': plantImg,
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

export const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`
        group relative overflow-visible cursor-pointer
        transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
        ${isHovered ? '-translate-y-2' : ''}
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
        aspectRatio: '16/10',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Animated Border Glow */}
      <div
        className={`
          absolute -inset-[2px] rounded-2xl
          transition-all duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary)/0.3), hsl(var(--primary)), hsl(var(--primary)/0.6))',
          backgroundSize: '300% 300%',
          animation: isHovered ? 'borderGlow 2s ease infinite' : 'none',
        }}
      />

      {/* Outer Glow */}
      <div
        className={`
          absolute -inset-4 rounded-3xl pointer-events-none
          transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary)/0.25) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Inner Container */}
      <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-background">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imageMap[project.image]}
            alt={project.title}
            className={`
              w-full h-full object-cover
              transition-transform duration-700 ease-out
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className={`
            absolute inset-0 transition-all duration-500
            ${isHovered 
              ? 'bg-gradient-to-t from-background via-background/90 to-background/40' 
              : 'bg-gradient-to-t from-background via-background/70 to-transparent'
            }
          `}
        />

        {/* Inner Glow Effect on Hover */}
        <div
          className={`
            absolute inset-0 pointer-events-none
            transition-opacity duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            boxShadow: 'inset 0 0 60px hsl(var(--primary)/0.15)',
          }}
        />

        {/* Corner Accents with Glow */}
        <div
          className={`
            absolute top-0 left-0 w-20 h-20 pointer-events-none
            transition-all duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div 
            className="absolute top-4 left-4 w-10 h-[2px] bg-primary"
            style={{ boxShadow: isHovered ? '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)/0.5)' : 'none' }}
          />
          <div 
            className="absolute top-4 left-4 w-[2px] h-10 bg-primary"
            style={{ boxShadow: isHovered ? '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)/0.5)' : 'none' }}
          />
        </div>
        <div
          className={`
            absolute bottom-0 right-0 w-20 h-20 pointer-events-none
            transition-all duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div 
            className="absolute bottom-4 right-4 w-10 h-[2px] bg-primary"
            style={{ boxShadow: isHovered ? '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)/0.5)' : 'none' }}
          />
          <div 
            className="absolute bottom-4 right-4 w-[2px] h-10 bg-primary"
            style={{ boxShadow: isHovered ? '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)/0.5)' : 'none' }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Title */}
          <h3
            className={`
              font-display text-xl md:text-2xl font-bold text-foreground mb-3
              transition-all duration-500
              ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'}
            `}
          >
            {project.title}
          </h3>

          {/* Description */}
          <div
            className={`
              space-y-1 mb-4 overflow-hidden
              transition-all duration-500
              ${isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            {project.description.map((line, i) => (
              <p
                key={i}
                className="text-sm text-muted-foreground"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                • {line}
              </p>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div
            className={`
              flex flex-wrap gap-2 transition-all duration-500
              ${isHovered ? 'opacity-100' : 'opacity-70'}
            `}
          >
            {project.techStack.map((tech, i) => (
              <span
                key={tech}
                className={`
                  px-3 py-1 text-xs font-medium rounded-full
                  bg-primary/10 text-primary border border-primary/20
                  transition-all duration-300
                  ${isHovered ? 'bg-primary/20 border-primary/50 shadow-[0_0_10px_hsl(var(--primary)/0.3)]' : ''}
                `}
                style={{
                  transitionDelay: isHovered ? `${i * 50}ms` : '0ms',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub Indicator */}
          {project.githubUrl && (
            <div
              className={`
                absolute top-4 right-4 p-2 rounded-full
                bg-background/80 backdrop-blur-sm border border-primary/30
                transition-all duration-300
                ${isHovered ? 'opacity-100 scale-100 shadow-[0_0_15px_hsl(var(--primary)/0.4)]' : 'opacity-0 scale-90'}
              `}
            >
              <ExternalLink className="w-4 h-4 text-primary" />
            </div>
          )}
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};
