import { Brain, Code, Database, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Predictive modeling, image classification, segmentation, data preprocessing & visualization",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Backend development (Django/Python), Streamlit dashboards, API integration, automation tools",
      color: "from-accent to-accent-glow"
    },
    {
      icon: Database,
      title: "AI & RAG Chatbot Development",
      description: "Document search systems, custom LLM-powered chatbots, retrieval pipelines",
      color: "from-primary to-accent"
    },
    {
      icon: LineChart,
      title: "Data & Research Support",
      description: "Data cleaning, exploratory analysis, model evaluation, research documentation",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Expertise Service!<br />Let's check it out
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive solutions in machine learning, web development, and intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover-lift bg-card border-border shadow-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-4 shadow-primary group-hover:scale-110 transition-smooth`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
