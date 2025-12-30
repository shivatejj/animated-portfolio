import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Orbit {
  radiusX: number;
  radiusY: number;
  color: { r: number; g: number; b: number };
  tilt: number;
  speed: number;
  direction: number;
  highlightAngle: number;
}

interface OrbitCanvasProps {
  isHovered: boolean;
  wrapperSize: { width: number; height: number };
  imageRadius: number;
}

// Vibrant colors
const ORBIT_COLORS = [
  { r: 236, g: 72, b: 153 },   // Pink (inner)
  { r: 168, g: 85, b: 247 },   // Purple (middle)
  { r: 34, g: 211, b: 238 },   // Cyan (outer)
];

export const OrbitCanvas = ({ isHovered, wrapperSize, imageRadius }: OrbitCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbitsRef = useRef<Orbit[]>([]);
  const animationRef = useRef<number>(0);
  const alphaRef = useRef<{ value: number }>({ value: 0 });
  const isActiveRef = useRef<boolean>(true);

  // Initialize orbits
  useEffect(() => {
    if (wrapperSize.width === 0 || wrapperSize.height === 0) return;

    const baseRadius = imageRadius * 1.4;

    orbitsRef.current = ORBIT_COLORS.map((color, index) => ({
      radiusX: baseRadius,
      radiusY: baseRadius * 0.35,
      color,
      tilt: (index * Math.PI) / 3,
      speed: 0.02 + index * 0.008,
      direction: index % 2 === 0 ? 1 : -1,
      highlightAngle: (index * Math.PI * 2) / 3,
    }));
  }, [wrapperSize, imageRadius]);

  // Handle hover state with GSAP
  useEffect(() => {
    if (isHovered) {
      gsap.to(alphaRef.current, {
        value: 1,
        duration: 0.6,
        ease: 'power2.out',
      });
    } else {
      gsap.to(alphaRef.current, {
        value: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [isHovered]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || wrapperSize.width === 0 || wrapperSize.height === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = wrapperSize.width;
    canvas.height = wrapperSize.height;

    const centerX = wrapperSize.width / 2;
    const centerY = wrapperSize.height / 2;

    const animate = () => {
      if (!isActiveRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const globalAlpha = alphaRef.current.value;

      if (globalAlpha > 0.01) {
        orbitsRef.current.forEach((orbit) => {
          orbit.highlightAngle += orbit.speed * orbit.direction;

          const { r, g, b } = orbit.color;
          const alpha = globalAlpha;

          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate(orbit.tilt);

          // Moving highlight trail - outer glow (thinner)
          const trailLength = 1.5;
          ctx.beginPath();
          ctx.ellipse(0, 0, orbit.radiusX, orbit.radiusY, 0, orbit.highlightAngle - trailLength, orbit.highlightAngle);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`;
          ctx.lineWidth = 6;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Moving highlight trail - bright core (thinner but bright)
          ctx.beginPath();
          ctx.ellipse(0, 0, orbit.radiusX, orbit.radiusY, 0, orbit.highlightAngle - trailLength, orbit.highlightAngle);
          ctx.strokeStyle = `rgba(${Math.min(r + 80, 255)}, ${Math.min(g + 80, 255)}, ${Math.min(b + 80, 255)}, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.shadowBlur = 12;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Leading bright dot
          const dotX = Math.cos(orbit.highlightAngle) * orbit.radiusX;
          const dotY = Math.sin(orbit.highlightAngle) * orbit.radiusY;
          
          // Dot glow
          const dotGradient = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 10);
          dotGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          dotGradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${alpha * 0.9})`);
          dotGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.beginPath();
          ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
          ctx.fillStyle = dotGradient;
          ctx.fill();

          // Dot core
          ctx.beginPath();
          ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.shadowBlur = 15;
          ctx.fill();

          ctx.restore();
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleVisibilityChange = () => {
      isActiveRef.current = !document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [wrapperSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
