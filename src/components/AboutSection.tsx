import { User, Code2, Lightbulb, Target, GraduationCap, Briefcase } from 'lucide-react';
import { AboutCard } from './AboutCard';

const aboutCards = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Who I Am",
    description: "A Full Stack Developer with expertise in React, Node.js, MongoDB, Supabase and Firebase. Engineering graduate from MVSR Engineering College (2021–2025), passionate about building scalable web applications."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Technical Expertise",
    description: "Frontend: ReactJS, HTML, CSS. Backend: NodeJS. Databases: MongoDB, Supabase, Firebase. Deployment: VPS Hostinger. Tools: Git, GitHub. Adept at REST APIs and secure authentication."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Professional Experience",
    description: "Full Stack Developer Intern at YOI Media LLP. Developed modules using React and NodeJS, integrated role-based authentication, improved API response speed, and assisted with production deployments on VPS."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Certifications",
    description: "AICTE – AWS Data Analytics • AWS – Google AI/ML • Responsive Web Design – FreeCodeCamp • Python for Everybody – Coursera. Continuously learning and expanding technical knowledge."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Problem Solving",
    description: "Built a distractor generation engine with 90% accuracy on 500+ MCQs. Created text-to-question pipelines using transformer models. Developed CNN classifiers achieving 92% accuracy on 5,000+ images."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "What I Aim For",
    description: "Products that matter. Contributing to teams building real-world impact in EdTech, automation and enterprise solutions — not just features, but solutions that scale and make a difference."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background consistency with Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Beyond the <span className="text-gradient">Code</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Full Stack Developer with a passion for EdTech, automation, and enterprise digital solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {aboutCards.map((card, index) => (
            <AboutCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
