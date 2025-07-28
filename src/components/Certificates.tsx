import { Card } from "@/components/ui/card";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      color: "bg-portfolio-orange"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      color: "bg-portfolio-blue"
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      color: "bg-portfolio-purple"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2022",
      color: "bg-portfolio-orange"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8" id="certificates">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is key to staying current in the tech industry. Here are some of my recent certifications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="group hover:shadow-portfolio-glow transition-all duration-300 cursor-pointer border-border">
              <div className="p-6 space-y-4">
                {/* Certificate icon/badge */}
                <div className={`
                  w-16 h-16 ${cert.color} rounded-full
                  flex items-center justify-center
                  group-hover:scale-110 transition-transform duration-300
                  shadow-lg
                `}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-lg leading-tight">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-portfolio-purple font-semibold text-sm">{cert.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;