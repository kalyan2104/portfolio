import { Code2, Sparkles, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="space-y-8 animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate software engineer specializing in AI and Python development, with a mission to build 
              innovative solutions that bridge the gap between cutting-edge technology and real-world problems. 
              With expertise in machine learning, generative AI, and full-stack development, I transform complex 
              challenges into elegant, scalable applications.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <Code2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-muted-foreground">
                  Writing maintainable, efficient code that scales with best practices and modern design patterns.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
                <p className="text-muted-foreground">
                  Leveraging GenAI and machine learning to create intelligent, adaptive solutions for tomorrow.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Rapid prototyping to production-ready systems, turning ideas into reality with agility.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-4">Tech Stack & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {["Python", "Generative AI", "AWS","FastAPI", "LLM Integration","JavaScript", "React", "Node.js", "MySql",  "MongoDB","Cloud", "Git","Github"].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-secondary border border-primary/30 rounded-lg text-sm font-mono hover:bg-primary/10 hover:border-primary transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
