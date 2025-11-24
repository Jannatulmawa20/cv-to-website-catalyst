import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [
    "15+ Complete Projects",
    "6 Months of Experience",
    "Expert in Full-Stack & AI"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content Section */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Designing Solutions,<br />
              Not Just Visuals
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              I specialize in full-stack web development (HTML, CSS, JavaScript, MERN stack) and have 
              a solid foundation in Python for AI/ML development. I'm skilled in building applications 
              that combine web development with machine learning models for dynamic, data-driven solutions.
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
              asChild
            >
              <a href="/Jannatul_Mawa.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
