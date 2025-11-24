import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroPortrait from "@/assets/profile-portrait.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-hero pt-16">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tl from-accent-glow/40 to-accent/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Geometric grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent animate-ping" />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-accent-glow animate-ping" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/3 left-2/3 w-1 h-1 rounded-full bg-accent animate-ping" style={{ animationDelay: "1.5s" }} />
      
      {/* Decorative shapes */}
      <div className="absolute top-40 right-32 w-32 h-32 border-2 border-accent/30 rounded-lg rotate-45 animate-spin-slow" />
      <div className="absolute bottom-40 left-32 w-24 h-24 border border-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/5 backdrop-blur-md border border-accent/40 shadow-accent">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground">Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-primary-foreground leading-[1.1]">
              Hello, I'm<br />
              <span className="text-gradient bg-gradient-to-r from-accent via-accent-glow to-accent bg-clip-text text-transparent animate-fade-in">
                Jannatul Mawa
              </span><br />
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground/80">
                Software Engineer & ML Developer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Building intelligent systems with Python, AI, and modern full-stack technologies. 
              Specializing in <span className="text-accent font-semibold">Machine Learning</span>, <span className="text-accent font-semibold">Deep Learning</span>, and scalable web applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gradient-accent shadow-accent hover:shadow-accent hover:scale-105 transition-smooth text-lg px-8 py-6 h-auto font-semibold group"
                asChild
              >
                <a href="#projects">
                  View My Projects
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground/5 backdrop-blur-md border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-smooth text-lg px-8 py-6 h-auto font-semibold group"
                asChild
              >
                <a href="/Jannatul_Mawa.pdf" download>
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Stats - Modern card design */}
            <div className="grid grid-cols-3 gap-4 mt-16">
              <div className="group relative overflow-hidden rounded-2xl bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 p-6 hover:border-accent/50 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl font-heading font-bold text-accent mb-1">6</div>
                  <div className="text-sm text-primary-foreground/70 font-medium">Months Experience</div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 p-6 hover:border-accent/50 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl font-heading font-bold text-accent mb-1">15+</div>
                  <div className="text-sm text-primary-foreground/70 font-medium">Projects Completed</div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 p-6 hover:border-accent/50 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl font-heading font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-primary-foreground/70 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              {/* Main image with enhanced effects */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-accent/40 shadow-accent w-full max-w-md mx-auto aspect-square group">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={heroPortrait} 
                  alt="Jannatul Mawa - Software Engineer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating badges - enhanced */}
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md rounded-2xl shadow-card p-5 animate-float border border-accent/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent">
                    <span className="text-xl font-bold text-accent-foreground">6</span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground text-lg">Months</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Additional floating badge */}
              <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-md rounded-2xl shadow-card p-4 animate-float border border-accent/20" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold text-card-foreground">Available</span>
                </div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full bg-gradient-to-br from-accent/20 to-primary-glow/10 blur-3xl" />
            <div className="absolute -z-10 top-1/3 left-1/3 w-32 h-32 rounded-full border-2 border-accent/30 animate-spin-slow" />
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
