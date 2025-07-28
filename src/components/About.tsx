const About = () => {
  return (
    <section className="py-20 px-6 lg:px-8" id="about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Decorative pattern */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-portfolio-orange rounded-full"></div>
                  <div className="w-3 h-3 bg-portfolio-purple rounded-full"></div>
                  <div className="w-3 h-3 bg-portfolio-blue rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-muted rounded w-3/4"></div>
                  <div className="h-2 bg-muted rounded w-1/2"></div>
                  <div className="h-2 bg-portfolio-purple/30 rounded w-5/6"></div>
                  <div className="h-2 bg-muted rounded w-2/3"></div>
                </div>
                <div className="pt-4">
                  <div className="inline-block px-3 py-1 bg-portfolio-purple/20 text-portfolio-purple rounded-full text-sm">
                    Software Engineer
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a full-stack software engineer with over 3 years of experience,
                I specialize in building modern web applications that solve real-world problems.
                My expertise spans across frontend technologies like React, TypeScript, and modern CSS frameworks,
                as well as backend development with Node.js and Python.
              </p>
              <p>
                I'm passionate about creating intuitive user experiences and writing clean,
                maintainable code. When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
              <p>
                I believe in the power of technology to make a positive impact,
                and I'm always excited to take on new challenges that push the boundaries
                of what's possible on the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;