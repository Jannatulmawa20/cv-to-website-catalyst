import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-hero pt-16">
      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-accent animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent-glow animate-ping" style={{ animationDelay: "0.5s" }} />
      
      {/* Decorative curves */}
      <svg className="absolute top-20 right-20 w-24 h-24 text-accent/30 animate-spin-slow" viewBox="0 0 100 100" fill="none">
        <path d="M20 50 Q 50 20, 80 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg className="absolute bottom-40 left-20 w-32 h-32 text-accent/20 animate-float" viewBox="0 0 100 100" fill="none">
        <path d="M30 70 Q 50 30, 70 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
              <span className="text-sm font-medium text-accent-foreground">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-primary-foreground leading-tight">
              Hello, I'm<br />
              <span className="text-accent">Jannatul Mawa</span><br />
              Software Engineer & ML Developer
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
              Building intelligent systems with Python, AI, and modern full-stack technologies. 
              Specializing in Machine Learning, Deep Learning, and scalable web applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gradient-accent shadow-accent hover:shadow-accent hover:scale-105 transition-smooth"
              >
                View My Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-105 transition-smooth"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Intro
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="text-primary-foreground">
                <div className="text-3xl font-heading font-bold text-accent">8+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div className="text-primary-foreground">
                <div className="text-3xl font-heading font-bold text-accent">50+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="text-primary-foreground">
                <div className="text-3xl font-heading font-bold text-accent">100%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-full border-8 border-accent/30 shadow-accent w-full max-w-md mx-auto aspect-square">
                <img 
                  src={heroPortrait} 
                  alt="Jannatul Mawa - Software Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
                    <span className="text-xl font-bold text-accent-foreground">8+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Years</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-accent/10 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Dots decoration */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-primary-foreground/50" />
        <div className="w-2 h-2 rounded-full bg-primary-foreground/50" />
        <div className="w-2 h-2 rounded-full bg-accent" />
        <div className="w-2 h-2 rounded-full bg-primary-foreground/50" />
        <div className="w-2 h-2 rounded-full bg-primary-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;
