import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "bg-portfolio-gradient-1",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.",
      tech: ["TypeScript", "Express", "MongoDB", "Socket.io"],
      gradient: "bg-portfolio-gradient-2",
      featured: false
    },
    {
      title: "AI Chat Bot",
      description: "An intelligent chatbot with natural language processing capabilities, integrated with OpenAI API for smart conversations.",
      tech: ["Python", "FastAPI", "OpenAI", "React"],
      gradient: "bg-portfolio-gradient-3",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with interactive charts, location-based forecasts, and real-time weather data visualization.",
      tech: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
      gradient: "bg-portfolio-gradient-1",
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`
              relative overflow-hidden border-border group
              ${project.featured ? 'md:col-span-2' : ''}
              hover:shadow-portfolio-glow transition-all duration-300
            `}>
              {/* Gradient background */}
              <div className={`
                absolute inset-0 ${project.gradient} opacity-10
                group-hover:opacity-20 transition-opacity duration-300
              `}></div>
              
              <div className="relative p-8">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-portfolio-orange text-portfolio-orange hover:bg-portfolio-orange hover:text-white">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;