import { ExternalLink } from 'lucide-react';
import { ExperienceProject } from '@/data/experienceData';

// Import images
import attendanceImg from '@/assets/experience-attendance.jpg';
import pdfplayImg from '@/assets/experience-pdfplay.jpg';
import payslipImg from '@/assets/experience-payslip.jpg';
import supabaseImg from '@/assets/experience-supabase.jpg';
import n8nImg from '@/assets/experience-n8n.jpg';

const imageMap: Record<string, string> = {
  'experience-attendance': attendanceImg,
  'experience-pdfplay': pdfplayImg,
  'experience-payslip': payslipImg,
  'experience-supabase': supabaseImg,
  'experience-n8n': n8nImg,
};

interface ExperienceCardProps {
  project: ExperienceProject;
  index: number;
}

const ExperienceCard = ({ project, index }: ExperienceCardProps) => {
  const handleClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const imageSrc = imageMap[project.image];

  return (
    <div
      onClick={handleClick}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
        project.liveUrl ? 'hover:scale-[1.02]' : 'cursor-default'
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Fire glow effect on hover */}
      <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0"
        style={{
          background: 'linear-gradient(45deg, #ff4500, #ff6b35, #ffa500, #ff4500)',
          backgroundSize: '400% 400%',
          animation: 'fireGlow 2s ease infinite',
        }}
      />
      
      {/* Animated fire border */}
      <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: 'linear-gradient(90deg, #ff4500, #ff6b35, #ffa500, #ffcc00, #ff6b35, #ff4500)',
          backgroundSize: '300% 100%',
          animation: 'fireBorder 1.5s linear infinite',
        }}
      />

      {/* Main card content */}
      <div className="relative bg-background rounded-2xl overflow-hidden z-20 h-full">
        {/* Image container */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Inner fire glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(ellipse at bottom, rgba(255, 69, 0, 0.4), transparent 70%)',
            }}
          />

          {/* Live badge */}
          {project.liveUrl && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full text-primary-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live
              <ExternalLink className="w-3 h-3" />
            </div>
          )}

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-foreground mb-1 transform transition-transform duration-300 group-hover:translate-x-1">
              {project.title}
            </h3>
            <p className="text-sm text-primary font-medium opacity-90">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Content area */}
        <div className="p-6 pt-4 space-y-4">
          {/* Ownership badge */}
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-xs text-primary font-medium">{project.ownership}</span>
          </div>

          {/* Content bullets */}
          <ul className="space-y-2">
            {project.content.slice(0, 3).map((item, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.slice(0, 6).map((tech, idx) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/50 text-secondary-foreground/80 border border-border/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary/90"
                style={{ transitionDelay: `${(idx + 3) * 80}ms` }}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/30 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ transitionDelay: '600ms' }}
              >
                +{project.techStack.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Bottom fire accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(90deg, transparent, #ff4500, #ffa500, #ff4500, transparent)',
          }}
        />
      </div>

      {/* Corner fire sparks */}
      <div className="absolute -bottom-2 -left-2 w-8 h-8 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-30"
        style={{
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.8), transparent 70%)',
          filter: 'blur(4px)',
        }}
      />
      <div className="absolute -bottom-2 -right-2 w-8 h-8 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-30"
        style={{
          background: 'radial-gradient(circle, rgba(255, 69, 0, 0.8), transparent 70%)',
          filter: 'blur(4px)',
        }}
      />

      {/* CSS for fire animations */}
      <style>{`
        @keyframes fireGlow {
          0%, 100% { 
            background-position: 0% 50%;
            opacity: 0.6;
          }
          50% { 
            background-position: 100% 50%;
            opacity: 0.9;
          }
        }
        @keyframes fireBorder {
          0% { background-position: 0% 0%; }
          100% { background-position: 300% 0%; }
        }
      `}</style>
    </div>
  );
};

export default ExperienceCard;
