import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Accenture",
      role: "Packaged App Development Associate",
      duration: "September 2024 – July 2025",
      location: "Bengaluru",
      responsibilities: [
        "Designed and implemented Agentic AI pipelines using LangGraph to build scalable node-based workflows, successfully processing legacy code files and streamlining analysis time by 40%.",
        "Interfaced with LLMs (Claude/OpenAI) via Bedrock APIs, achieving 95%+ output accuracy in structured prompt-response exchanges and improving consistency across multi-stage GenAI workflows.",
        "Calibrated a GenAI tool to interpret a legacy mainframe programming language, fine-tuning prompt strategies that led to a 30% reduction in manual post-processing efforts."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0 animate-fade-in group"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Content card */}
              <div className="bg-card border border-border rounded-xl p-6 ml-4 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
