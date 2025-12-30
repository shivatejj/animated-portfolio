import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Plasma } from '@/components/Plasma';
import profileImage from '@/assets/profile-photo.jpeg';

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Plasma Background */}
      <Plasma 
        color="#8b5cf6" 
        speed={0.3} 
        scale={1.2} 
        opacity={0.4} 
        mouseInteractive={true}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection profileImage={profileImage} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
