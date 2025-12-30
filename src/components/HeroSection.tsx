import ProfileCard from "./ProfileCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Phone, Mail, MapPin } from "lucide-react";

interface HeroSectionProps {
  profileImage: string;
}

export const HeroSection = ({ profileImage }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20 lg:py-0"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            style={{ zIndex: 10 }}
          >
            {/* Overline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-400 font-body">
                Open to Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold leading-tight">
                Shiva Tejj
                <span className="block text-gradient">Cheedalla</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-body max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Full Stack Developer experienced in building scalable web
                applications using React, Node.js, MongoDB, Supabase and
                Firebase. Passionate about solving real-world problems in
                EdTech, automation and enterprise digital solutions.
              </p>
            </div>

            {/* Contact Info Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 border border-border/50 text-sm text-muted-foreground">
                <Phone className="w-3.5 h-3.5 text-primary" />
                +91 95152 42950
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 border border-border/50 text-sm text-muted-foreground">
                <Mail className="w-3.5 h-3.5 text-primary" />
                shivatejjcheedalla@gmail.com
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 border border-border/50 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Hyderabad
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="ghost-hero" size="lg" asChild>
                <a
                  href="/resume.pdf"
                  download="Shiva_Tejj_Cheedalla_Resume.pdf"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { value: "3+", label: "Months Internship" },
                { value: "5+", label: "Projects Built" },
                { value: "93.76%", label: "Accuracy Achieved" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-display font-semibold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-body mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div
            className="order-1 lg:order-2 relative flex justify-center"
            style={{ zIndex: 5 }}
          >
            <ProfileCard
              avatarUrl={profileImage}
              iconUrl="/code-pattern.svg"
              name="Shiva Tejj"
              title="Full Stack Web Developer"
              handle="shivatejj"
              status="Open to Work"
              contactText="Contact"
              showUserInfo={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(139, 92, 246, 0.6)"
              behindGlowSize="60%"
              innerGradient="linear-gradient(145deg, #1a1a2e 0%, #16213e44 100%)"
              onContactClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
