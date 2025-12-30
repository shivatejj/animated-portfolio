import { useEffect, useRef } from "react";
import { Briefcase, Server, Shield, Rocket } from "lucide-react";
import { experienceData } from "@/data/experienceData";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = cardsRef.current?.querySelectorAll(".experience-card");
    cards?.forEach((card) => observer.observe(card));

    const introBlock = sectionRef.current?.querySelector(".intro-block");
    if (introBlock) observer.observe(introBlock);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Server, text: "Production VPS Deployment" },
    { icon: Shield, text: "Secure Authentication" },
    { icon: Rocket, text: "Scalable Architecture" },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Professional Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building production-grade systems with real users and live
            deployments
          </p>
        </div>

        {/* Experience Intro Block */}
        <div className="intro-block opacity-0 translate-y-4 transition-all duration-700 ease-out mb-16">
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-secondary/50 via-background to-secondary/30 border border-border/50 overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative">
              {/* Title */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Full Stack Web Developer Intern
                </h3>
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                  YOI Media LLP
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Built and deployed multiple production-grade internal
                  platforms independently. Owned full lifecycle:{" "}
                  <span className="text-foreground font-medium">
                    UI → Backend → Authentication → Deployment
                  </span>
                  . Focused on scalability, security, and performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Deployed applications on{" "}
                  <span className="text-foreground font-medium">
                    Hostinger VPS (KVM2)
                  </span>{" "}
                  using Ubuntu, Nginx, PM2, and Gunicorn. Experience with real
                  users, real data, and live systems.
                </p>
              </div>

              {/* Individual ownership callout */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-8">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-primary">
                  All projects were developed and deployed individually.
                </span>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border/50"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {experienceData.map((project, index) => (
            <div
              key={project.id}
              className="experience-card opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ExperienceCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for scroll animations */}
      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
