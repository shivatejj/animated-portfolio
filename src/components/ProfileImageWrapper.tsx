import { useState, useRef, useEffect } from 'react';
import { OrbitCanvas } from './OrbitCanvas';

interface ProfileImageWrapperProps {
  imageSrc: string;
  alt: string;
}

export const ProfileImageWrapper = ({ imageSrc, alt }: ProfileImageWrapperProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        setWrapperSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Calculate image size (65% of wrapper for circular frame)
  const imageSize = Math.min(wrapperSize.width, wrapperSize.height) * 0.65;

  return (
    <div
      ref={wrapperRef}
      className="relative w-full aspect-square max-w-md mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Orbit Canvas - only visible on hover */}
      <OrbitCanvas 
        isHovered={isHovered} 
        wrapperSize={wrapperSize} 
        imageRadius={imageSize / 2} 
      />
      
      {/* Profile Image - Circular */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
        <div 
          className="relative rounded-full overflow-hidden"
          style={{ width: imageSize, height: imageSize }}
        >
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          {/* Subtle border glow on hover only */}
          <div 
            className="absolute inset-0 rounded-full transition-all duration-500 pointer-events-none"
            style={{
              boxShadow: isHovered 
                ? '0 0 50px hsl(var(--primary) / 0.4), inset 0 0 30px hsl(var(--primary) / 0.1)'
                : 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};
