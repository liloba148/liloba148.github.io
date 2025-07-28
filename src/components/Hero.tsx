import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                Hi, I am{" "}
                <span className="bg-portfolio-gradient-1 bg-clip-text text-transparent">
                  Merwan bekkar
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                I'm a software engineer specializing in building SaaS web
                applications with React and Django/Express. I love creating
                digital experiences that make a difference.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-portfolio-gradient-1 hover:shadow-portfolio-glow transition-all duration-300 text-white border-0"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4" />
                Start Project
              </Button>
            </div>
          </div>
          
          {/* Right content - Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-portfolio-gradient-2 rounded-full blur-2xl opacity-30 scale-110"></div>
              <img
                src={profilePhoto}
                alt="Merwan bekkar"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-portfolio-purple shadow-portfolio-glow"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-portfolio-orange rounded-full shadow-portfolio-glow-orange"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-portfolio-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;