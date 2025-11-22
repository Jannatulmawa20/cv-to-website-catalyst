import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RAG-based Company Policy Chatbot",
      description: "A chatbot capable of answering company policy questions using document retrieval and LLM-based generation with citation-based output.",
      tags: ["Python", "Streamlit", "Embeddings", "Vector DB"],
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "Brain Tumor Segmentation",
      description: "Deep learning models for tumor segmentation using MRI datasets with U-Net architecture and comprehensive preprocessing.",
      tags: ["PyTorch", "TensorFlow", "U-Net", "OpenCV"],
      gradient: "from-accent/20 to-primary/20"
    },
    {
      title: "Ride Sharing Price Prediction",
      description: "ML models including Linear Regression, Decision Tree, and Random Forest to predict ride prices using 100k+ data points.",
      tags: ["Python", "scikit-learn", "Streamlit"],
      gradient: "from-primary/20 to-primary-glow/20"
    },
    {
      title: "Research Automation Tools",
      description: "Advanced data analysis and model exploration tools for academic research with comprehensive statistical analysis.",
      tags: ["Python", "Statistics", "Data Analytics"],
      gradient: "from-accent/20 to-accent-glow/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Digital Product Showcases
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects in machine learning, deep learning, and data-driven applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`p-6 hover-lift bg-gradient-to-br ${project.gradient} backdrop-blur-sm border-border shadow-card group animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-heading font-bold text-card-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-smooth">
                    <Github className="w-4 h-4 text-primary" />
                  </button>
                  <button className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-smooth">
                    <ExternalLink className="w-4 h-4 text-accent" />
                  </button>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex}
                    variant="secondary"
                    className="bg-card/80 hover:bg-card transition-smooth"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
