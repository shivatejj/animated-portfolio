import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { skillsData, SkillInfo } from '@/data/skillsData';
import { SkillGridItem } from '@/components/SkillGridItem';

interface SkillDomainBlockProps {
  icon: typeof ArrowLeft;
  title: string;
  skills: SkillInfo[];
  index: number;
  isVisible: boolean;
}

const SkillDomainBlock = ({
  icon: Icon,
  title,
  skills,
  index,
  isVisible,
}: SkillDomainBlockProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconRotation, setIconRotation] = useState(0);

  const handleCardHover = (hovered: boolean) => {
    setIsHovered(hovered);
    if (hovered) {
      setIconRotation((prev) => prev + 15);
    }
  };

  return (
    <div
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${150 + index * 150}ms` }}
      onMouseEnter={() => handleCardHover(true)}
      onMouseLeave={() => handleCardHover(false)}
    >
      {/* Card glow */}
      <div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 blur-sm transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Card */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl p-6 md:p-8 transition-all duration-500 ${
          isHovered ? 'border-primary/40 -translate-y-1' : ''
        }`}
        style={{
          boxShadow: isHovered
            ? '0 25px 50px -12px hsl(var(--primary) / 0.25)'
            : '0 4px 20px -4px hsl(var(--background) / 0.5)',
        }}
      >
        {/* Subtle grid background */}
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : ''
          }`}
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.03) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Header */}
        <div className="relative flex items-center gap-4 mb-6">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 transition-all duration-500 ${
              isHovered ? 'bg-primary/20 border-primary/40' : ''
            }`}
            style={{
              transform: `rotate(${iconRotation}deg) scale(${isHovered ? 1.05 : 1})`,
              transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3
              className={`text-xl md:text-2xl font-display font-semibold text-foreground transition-all duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`}
            >
              {title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {skills.length} technologies
            </p>
          </div>
        </div>

        {/* Skills grid - 4 columns on desktop, 2 on tablet, 2 on mobile */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {skills.map((skill, skillIndex) => (
            <SkillGridItem
              key={skill.name}
              skill={skill}
              index={skillIndex}
              isCardHovered={isHovered}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBackHovered, setIsBackHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          {/* Back button */}
          <button
            onClick={handleBack}
            onMouseEnter={() => setIsBackHovered(true)}
            onMouseLeave={() => setIsBackHovered(false)}
            className={`group inline-flex items-center gap-2 mb-12 text-muted-foreground hover:text-foreground transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <ArrowLeft
              className={`w-5 h-5 transition-transform duration-300 ${
                isBackHovered ? '-translate-x-1' : ''
              }`}
            />
            <span className="font-medium">Back</span>
          </button>

          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              Skill Set
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise
            </p>
          </div>

          {/* Skills - Vertical flowing layout */}
          <div className="flex flex-col gap-8">
            {skillsData.map((domain, index) => (
              <SkillDomainBlock
                key={domain.title}
                icon={domain.icon}
                title={domain.title}
                skills={domain.skills}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
