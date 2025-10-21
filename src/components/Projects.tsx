import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Pothole Detection using Deep Learning",
      description: "Developed an automated system for detecting potholes on roads using deep learning which contributes to improving road safety. Successfully trained and deployed a model for real-time detection.",
      tech: ["Deep Learning", "OpenCV", "PyTorch", "Roboflow", "Supervision"],
      link: "https://github.com/kalyan2104",
    },
    {
      title: "Sign Language Recognition using OpenCV",
      description: "Developed an application to detect signs and gestures of sign language used by deaf people. Trained the model using a large dataset of 3000 images and achieved over 70% accuracy.",
      tech: ["CNN", "OpenCV", "TensorFlow", "Mediapipe", "Python"],
      link: "https://github.com/kalyan2104",
    },
    {
      title: "Minion Cars - Self Drive Car Rental",
      description: "Designed and implemented a responsive self-drive car rental booking website that allows users to reserve cars. Created user-friendly dynamic responsive web pages.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "https://github.com/kalyan2104",
    },
    {
      title: "GenAI Content Generator",
      description: "Built a creative writing assistant powered by GPT-4 that generates high-quality content, blog posts, and marketing copy with brand voice customization.",
      tech: ["Python", "LangChain", "Streamlit", "OpenAI"],
      link: "https://github.com/kalyan2104",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary border border-primary/20 rounded text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
