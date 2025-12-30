import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/shivatejj",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/shiva-tejj-cheedalla-096915258/",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:shivatejjcheedalla@gmail.com",
  },
];

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-secondary/30 border-t border-border/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold text-gradient">
              Shiva Tejj
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about building scalable web
              applications and solving real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground">
              shivatejjcheedalla@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Shiva Tejj Cheedalla. Built with
            Confidence
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Back to top
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/50 border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};
