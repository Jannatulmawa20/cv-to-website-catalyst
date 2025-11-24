import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["HTML", "CSS", "Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Backend & Web",
      skills: ["Django", "Streamlit", "API Integration", "RAG Pipelines"]
    },
    {
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Hugging Face"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Vector Databases"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "JIRA", "AWS", "NumPy & Pandas"]
    },
    {
      title: "Other Skills",
      skills: ["Data Structures", "Model Evaluation", "Documentation", "Research"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            My Technical Arsenal
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift bg-card border-border shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-heading font-bold mb-4 text-gradient-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
