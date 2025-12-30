import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillDomainCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const SkillDomainCard = ({ icon: Icon, title, description, index }: SkillDomainCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Animated border gradient */}
      <div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 opacity-0 blur-sm transition-all duration-500 ${
          isHovered ? 'opacity-100' : ''
        }`}
        style={{
          background: isHovered
            ? `linear-gradient(135deg, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.8), hsl(var(--primary) / 0.4))`
            : undefined,
        }}
      />

      {/* Main card */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl p-8 transition-all duration-500 ease-out ${
          isHovered ? 'transform -translate-y-2 border-primary/50' : ''
        }`}
        style={{
          boxShadow: isHovered
            ? '0 25px 50px -12px hsl(var(--primary) / 0.25), 0 0 40px hsl(var(--primary) / 0.15)'
            : '0 4px 20px -4px hsl(var(--background) / 0.5)',
        }}
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent 40%)`,
          }}
        />

        {/* Background gradient shift */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : ''
          }`}
        />

        {/* Icon container */}
        <div
          className={`relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 transition-all duration-500 ${
            isHovered ? 'scale-110 bg-primary/20 border-primary/40' : ''
          }`}
        >
          <Icon
            className={`w-7 h-7 text-primary transition-all duration-500 ${
              isHovered ? 'scale-110' : ''
            }`}
          />
        </div>

        {/* Title with slide animation */}
        <h3
          className={`relative text-xl font-display font-semibold text-foreground mb-3 transition-all duration-500 ${
            isHovered ? 'translate-x-1' : ''
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="relative text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Shimmer effect */}
        <div
          className={`absolute inset-0 -translate-x-full transition-transform duration-1000 ${
            isHovered ? 'translate-x-full' : ''
          }`}
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.1), transparent)',
          }}
        />
      </div>
    </div>
  );
};
