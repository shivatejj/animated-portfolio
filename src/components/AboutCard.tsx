import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const AboutCard = ({ icon, title, description, index }: AboutCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-2xl p-6 md:p-8 transition-all duration-500 ease-out cursor-default overflow-hidden",
        "bg-card/40 backdrop-blur-md border border-border/40",
        "hover:bg-card/60 hover:border-primary/40",
        "opacity-0 translate-y-3",
        isVisible && "opacity-100 translate-y-0",
        isHovered && "shadow-card-hover -translate-y-2 scale-[1.02]"
      )}
      style={{
        transitionDelay: isVisible ? '0ms' : `${index * 150}ms`,
      }}
    >
      {/* Spotlight effect following cursor */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none",
          isHovered && "opacity-100"
        )}
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15), transparent 50%)`,
        }}
      />

      {/* Animated border gradient */}
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100"
        )}
        style={{
          background: `linear-gradient(135deg, hsl(var(--primary) / 0.3) 0%, transparent 50%, hsl(var(--accent) / 0.3) 100%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Glow effect */}
      <div 
        className={cn(
          "absolute -inset-2 rounded-3xl opacity-0 transition-all duration-500 -z-10 blur-2xl",
          "bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30",
          isHovered && "opacity-70"
        )}
      />

      {/* Shimmer line effect */}
      <div 
        className={cn(
          "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent",
          "translate-x-[-100%] transition-transform duration-700",
          isHovered && "translate-x-[100%]"
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div 
          className={cn(
            "w-12 h-12 mb-5 flex items-center justify-center rounded-xl",
            "bg-secondary/60 text-primary transition-all duration-500",
            "shadow-inner",
            isHovered && "scale-110 bg-primary/20 shadow-glow-sm"
          )}
        >
          <div className={cn(
            "transition-all duration-500",
            isHovered && "rotate-12 scale-110"
          )}>
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 
          className={cn(
            "font-display text-xl md:text-2xl font-semibold text-foreground mb-3",
            "transition-all duration-500",
            isHovered && "translate-x-1 text-primary"
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p className={cn(
          "font-body text-muted-foreground text-sm md:text-base leading-relaxed transition-colors duration-500",
          isHovered && "text-foreground/80"
        )}>
          {description}
        </p>

        {/* Bottom accent line */}
        <div 
          className={cn(
            "absolute bottom-0 left-6 right-6 h-0.5 rounded-full",
            "bg-gradient-to-r from-primary/0 via-primary/50 to-accent/0",
            "scale-x-0 transition-transform duration-500 origin-left",
            isHovered && "scale-x-100"
          )}
        />
      </div>
    </div>
  );
};
