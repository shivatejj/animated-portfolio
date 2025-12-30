import { useState, useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import robotImage from "@/assets/robot-male.png";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "shivatejjcheedalla@gmail.com",
    href: "mailto:shivatejjcheedalla@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shivatejj",
    href: "https://github.com/shivatejj",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Shiva Tejj Cheedalla",
    href: "https://www.linkedin.com/in/shiva-tejj-cheedalla-096915258/",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [robotHovered, setRobotHovered] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto"></p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content + Form */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-card/40 border border-border/50 shadow-2xl"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 opacity-50 blur-sm -z-10" />

              <div className="relative space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={cn(
                        "peer w-full px-4 py-3 pt-6 bg-background/60 border rounded-xl text-foreground placeholder-transparent transition-all duration-300",
                        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                        errors.name
                          ? "border-destructive/50"
                          : "border-border/50",
                        focusedField === "name" &&
                          "shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                      )}
                      placeholder="Full Name"
                    />
                    <label
                      htmlFor="name"
                      className={cn(
                        "absolute left-4 transition-all duration-300 pointer-events-none",
                        "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base",
                        "peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary",
                        formData.name
                          ? "top-2 text-xs text-primary"
                          : "top-1/2 -translate-y-1/2 text-base",
                        "text-muted-foreground"
                      )}
                    >
                      Full Name
                    </label>
                  </div>
                  {errors.name && (
                    <p className="text-sm text-destructive/80 flex items-center gap-1 animate-fade-in">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={cn(
                        "peer w-full px-4 py-3 pt-6 bg-background/60 border rounded-xl text-foreground placeholder-transparent transition-all duration-300",
                        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                        errors.email
                          ? "border-destructive/50"
                          : "border-border/50",
                        focusedField === "email" &&
                          "shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                      )}
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className={cn(
                        "absolute left-4 transition-all duration-300 pointer-events-none",
                        "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base",
                        "peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary",
                        formData.email
                          ? "top-2 text-xs text-primary"
                          : "top-1/2 -translate-y-1/2 text-base",
                        "text-muted-foreground"
                      )}
                    >
                      Email Address
                    </label>
                  </div>
                  {errors.email && (
                    <p className="text-sm text-destructive/80 flex items-center gap-1 animate-fade-in">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={cn(
                        "peer w-full px-4 py-3 pt-6 bg-background/60 border rounded-xl text-foreground placeholder-transparent transition-all duration-300 resize-none",
                        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                        errors.message
                          ? "border-destructive/50"
                          : "border-border/50",
                        focusedField === "message" &&
                          "shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                      )}
                      placeholder="Your Message"
                    />
                    <label
                      htmlFor="message"
                      className={cn(
                        "absolute left-4 transition-all duration-300 pointer-events-none",
                        "peer-placeholder-shown:top-6 peer-placeholder-shown:text-base",
                        "peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary",
                        formData.message
                          ? "top-2 text-xs text-primary"
                          : "top-6 text-base",
                        "text-muted-foreground"
                      )}
                    >
                      Your Message
                    </label>
                  </div>
                  {errors.message && (
                    <p className="text-sm text-destructive/80 flex items-center gap-1 animate-fade-in">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className={cn(
                    "w-full py-4 px-6 rounded-xl font-semibold text-primary-foreground transition-all duration-300",
                    "bg-gradient-to-r from-primary via-primary/90 to-accent/80",
                    "hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                    "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-emerald-400 animate-fade-in">
                    <CheckCircle className="w-5 h-5" />
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-destructive animate-fade-in">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </div>
            </form>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-3">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-card/40 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:bg-card/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    <link.icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Robot Image */}
          <div
            className="relative h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in flex items-center justify-center"
            style={{ animationDelay: "200ms" }}
            onMouseEnter={() => setRobotHovered(true)}
            onMouseLeave={() => setRobotHovered(false)}
          >
            {/* Glow effects behind robot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className={cn(
                  "w-80 h-80 rounded-full bg-primary/20 blur-3xl transition-all duration-700",
                  robotHovered && "bg-primary/30 scale-110"
                )}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className={cn(
                  "w-60 h-60 rounded-full bg-accent/20 blur-2xl transition-all duration-700 delay-100",
                  robotHovered && "bg-accent/30 scale-125"
                )}
              />
            </div>

            {/* Robot Image */}
            <div
              className={cn(
                "relative z-10 transition-all duration-500",
                robotHovered && "scale-105"
              )}
            >
              <img
                src={robotImage}
                alt="AI Robot Assistant"
                className={cn(
                  "w-full max-w-md h-auto object-contain drop-shadow-2xl transition-all duration-500 -scale-x-100",
                  robotHovered &&
                    "drop-shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
                )}
              />

              {/* Floating particles around robot */}
              <div
                className={cn(
                  "absolute top-10 right-10 w-3 h-3 rounded-full bg-primary/80 animate-pulse transition-opacity duration-300",
                  robotHovered ? "opacity-100" : "opacity-0"
                )}
              />
              <div
                className={cn(
                  "absolute bottom-20 left-5 w-2 h-2 rounded-full bg-accent/80 animate-pulse transition-opacity duration-500 delay-200",
                  robotHovered ? "opacity-100" : "opacity-0"
                )}
              />
              <div
                className={cn(
                  "absolute top-1/3 left-0 w-2 h-2 rounded-full bg-primary/60 animate-pulse transition-opacity duration-500 delay-300",
                  robotHovered ? "opacity-100" : "opacity-0"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
