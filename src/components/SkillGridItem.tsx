import { useState } from 'react';

interface SkillInfo {
  name: string;
  logo: string;
  color: string;
  tooltip: string;
  useCases: string[];
  level: number;
  levelLabel: string;
}

interface SkillGridItemProps {
  skill: SkillInfo;
  index: number;
  isCardHovered: boolean;
}

export const SkillGridItem = ({ skill, index, isCardHovered }: SkillGridItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group/skill"
      style={{
        transitionDelay: `${index * 30}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Skill card */}
      <div
        className={`relative flex flex-col items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
          isHovered
            ? 'border-primary/50 -translate-y-2 scale-[1.02]'
            : 'border-border/30 hover:border-primary/30'
        }`}
        style={{
          background: isHovered
            ? `linear-gradient(135deg, ${skill.color}15, ${skill.color}08)`
            : 'hsl(var(--card) / 0.5)',
          boxShadow: isHovered
            ? `0 20px 40px -12px ${skill.color}40, 0 0 30px ${skill.color}20, inset 0 1px 0 ${skill.color}20`
            : '0 2px 8px -2px hsl(var(--background) / 0.5)',
        }}
      >
        {/* Shimmer effect on hover */}
        <div
          className={`absolute inset-0 transition-transform duration-700 ${
            isHovered ? 'translate-x-full' : '-translate-x-full'
          }`}
          style={{
            background: `linear-gradient(90deg, transparent, ${skill.color}15, transparent)`,
          }}
        />

        {/* Top glow accent */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] rounded-full transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
          }}
        />

        {/* Logo container */}
        <div
          className={`relative w-10 h-10 mb-3 transition-all duration-300 ${
            isHovered ? 'scale-115 -translate-y-1' : ''
          }`}
        >
          {/* Logo glow */}
          {isHovered && (
            <div
              className="absolute inset-0 blur-md opacity-60 scale-150"
              style={{
                background: `radial-gradient(circle, ${skill.color}, transparent 70%)`,
              }}
            />
          )}
          <img
            src={skill.logo}
            alt={skill.name}
            className="relative w-full h-full object-contain drop-shadow-sm"
          />
        </div>

        {/* Skill name */}
        <h4
          className={`text-sm font-medium text-center mb-2 transition-all duration-300 ${
            isHovered ? 'text-foreground' : 'text-foreground/90'
          }`}
        >
          {skill.name}
        </h4>

        {/* Level percentage */}
        <div
          className={`text-lg font-bold mb-2 transition-all duration-300`}
          style={{
            color: isHovered ? skill.color : 'hsl(var(--foreground) / 0.8)',
          }}
        >
          {skill.level}%
        </div>

        {/* Progress bar container */}
        <div className="w-full h-1.5 bg-primary/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${skill.level}%`,
              background: `linear-gradient(90deg, ${skill.color}CC, ${skill.color})`,
              boxShadow: isHovered ? `0 0 8px ${skill.color}60` : 'none',
            }}
          />
        </div>

        {/* Level label */}
        <span
          className={`mt-2 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300`}
          style={{
            color: isHovered ? skill.color : 'hsl(var(--muted-foreground))',
          }}
        >
          {skill.levelLabel}
        </span>

        {/* Bottom border glow */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
          }}
        />

        {/* Corner accents on hover */}
        {isHovered && (
          <>
            <div
              className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 rounded-tl-sm opacity-60"
              style={{ borderColor: skill.color }}
            />
            <div
              className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 rounded-tr-sm opacity-60"
              style={{ borderColor: skill.color }}
            />
            <div
              className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 rounded-bl-sm opacity-60"
              style={{ borderColor: skill.color }}
            />
            <div
              className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 rounded-br-sm opacity-60"
              style={{ borderColor: skill.color }}
            />
          </>
        )}
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-50 animate-fade-in pointer-events-none"
          style={{ animationDuration: '150ms' }}
        >
          <div
            className="relative px-3 py-2 rounded-lg backdrop-blur-xl border shadow-xl whitespace-nowrap max-w-[200px]"
            style={{
              background: `linear-gradient(135deg, ${skill.color}20, hsl(var(--card) / 0.95))`,
              borderColor: `${skill.color}40`,
            }}
          >
            <p className="text-xs text-foreground/90 text-center font-medium">{skill.tooltip}</p>
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
              style={{ borderTopColor: `${skill.color}40` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
