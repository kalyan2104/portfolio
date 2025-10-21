import { Brain, Database, Globe, Terminal, Cloud,Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Terminal,
      title: "Programming & Languages",
      skills: ["Python", "JavaScript/HTML/CSS", "Data Structures","Java"],
    },
    {
      icon: Globe,
      title: "Libraries & Frameworks",
      skills: ["Pandas","NumPy","FastAPI","Streamlit","LangGraph/LangChain", "TensorFlow","OpenCV"],
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL","Neo4j","MongoDB"],
    },
    {
      icon: Brain,
      title: "AI & LLMs",
      skills: ["LangGraph", "OpenAI(GPT)", "Claude", "Prompt Engineering"],
    },
    {
      icon: Cloud,
      title: "AWS",
      skills: ["EC2","S3","VPC","Bedrock","ELB","EFS","CloudWatch"],
    },
    {
      icon: Github,
      title: "Version Control",
      skills: ["Git","GitHub"],
    },
    
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
