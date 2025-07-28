import { useState } from "react";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills = [
    { name: "React", level: 95, category: "frontend", x: 20, y: 30 },
    { name: "TypeScript", level: 90, category: "language", x: 60, y: 20 },
    { name: "Node.js", level: 85, category: "backend", x: 80, y: 45 },
    { name: "Python", level: 88, category: "language", x: 15, y: 65 },
    { name: "PostgreSQL", level: 82, category: "database", x: 45, y: 70 },
    { name: "Docker", level: 78, category: "devops", x: 75, y: 75 },
    { name: "AWS", level: 80, category: "cloud", x: 25, y: 80 },
    { name: "GraphQL", level: 75, category: "api", x: 65, y: 55 }
  ];

  const connections = [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 5 },
    { from: 3, to: 4 }, { from: 4, to: 6 }, { from: 0, to: 7 },
    { from: 7, to: 2 }, { from: 5, to: 6 }
  ];

  return (
    <section className="py-20 px-6 lg:px-8" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a visual representation of my technical skills and how they connect to create powerful solutions
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 border border-portfolio-purple rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-portfolio-orange rounded-full"></div>
          </div>

          <div className="relative h-96">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {connections.map((connection, index) => {
                const fromSkill = skills[connection.from];
                const toSkill = skills[connection.to];
                return (
                  <line
                    key={index}
                    x1={`${fromSkill.x}%`}
                    y1={`${fromSkill.y}%`}
                    x2={`${toSkill.x}%`}
                    y2={`${toSkill.y}%`}
                    stroke="hsl(var(--portfolio-purple))"
                    strokeWidth="2"
                    opacity="0.3"
                    className="transition-opacity duration-300"
                  />
                );
              })}
            </svg>

            {/* Skill nodes */}
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${skill.x}%`, top: `${skill.y}%`, zIndex: 2 }}
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className={`
                  w-16 h-16 rounded-full border-4 border-portfolio-purple bg-card
                  flex items-center justify-center transition-all duration-300
                  group-hover:scale-110 group-hover:shadow-portfolio-glow
                  ${activeSkill === skill.name ? 'bg-portfolio-purple shadow-portfolio-glow' : ''}
                `}>
                  <span className={`
                    text-xs font-bold transition-colors duration-300
                    ${activeSkill === skill.name ? 'text-white' : 'text-portfolio-purple'}
                  `}>
                    {skill.name.substring(0, 2)}
                  </span>
                </div>
                
                {/* Tooltip */}
                <div className={`
                  absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2
                  bg-portfolio-darker text-white px-3 py-2 rounded-lg text-sm
                  transition-all duration-300 whitespace-nowrap
                  ${activeSkill === skill.name ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}>
                  <div className="font-semibold">{skill.name}</div>
                  <div className="text-xs text-muted-foreground">{skill.level}% proficiency</div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-portfolio-darker"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {['frontend', 'backend', 'language', 'database', 'devops', 'cloud', 'api'].map((category) => (
              <div key={category} className="flex items-center gap-2">
                <div className="w-3 h-3 bg-portfolio-purple rounded-full"></div>
                <span className="text-sm text-muted-foreground capitalize">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;