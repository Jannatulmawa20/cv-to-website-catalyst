import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  const highlights = [
    "8+ Complete Projects",
    "8+ Years of Experience",
    "Expert in ML & AI"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border-4 border-accent/30 shadow-card">
                <img 
                  src={aboutPortrait} 
                  alt="About Jannatul Mawa" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -top-6 -right-6 w-24 h-24">
              <svg viewBox="0 0 100 100" className="text-accent/30">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-accent rounded-full blur-xl opacity-50" />
          </div>

          {/* Content Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Designing Solutions,<br />
              Not Just Visuals
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              I am a passionate Software Engineer with a strong focus on backend development, 
              artificial intelligence, and data-driven applications. My experience includes building 
              production-ready ML models, developing full-stack applications using Python frameworks, 
              and creating interactive dashboards through Streamlit.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              I've worked as a Support Class Instructor, Annotator, and Research Assistant, where I 
              gained experience in data analysis, automation workflows, research implementation, and 
              mentoring students. My goal is to leverage modern engineering practices to create scalable, 
              intelligent systems that help businesses improve efficiency, accuracy, and user experience.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full gradient-accent flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="gradient-accent shadow-accent hover:shadow-accent hover:scale-105 transition-smooth"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
