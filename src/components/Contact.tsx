import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 lg:px-8" id="contact">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Ask my bot section */}
          <Card className="mb-16 border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-portfolio-gradient-1 opacity-10"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-portfolio-gradient-2 rounded-full flex items-center justify-center shadow-portfolio-glow">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Ask my bot</h3>
                  <p className="text-muted-foreground mb-4">
                    Have a quick question? Chat with my AI assistant to learn more about my work and experience.
                  </p>
                  <Button className="bg-portfolio-purple hover:bg-portfolio-purple/80 text-white">
                    Start Conversation
                  </Button>
                </div>
                {/* Bot avatar */}
                <div className="hidden md:block">
                  <div className="w-20 h-20 bg-portfolio-gradient-3 rounded-full flex items-center justify-center relative">
                    <div className="w-2 h-2 bg-white rounded-full absolute top-6 left-6"></div>
                    <div className="w-2 h-2 bg-white rounded-full absolute top-6 right-6"></div>
                    <div className="w-6 h-2 bg-white rounded-full absolute bottom-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact CTA */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Let's start something{" "}
                <span className="bg-portfolio-gradient-1 bg-clip-text text-transparent">
                  great together
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss your project and create something amazing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-portfolio-gradient-1 hover:shadow-portfolio-glow transition-all duration-300 text-white border-0"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>

            {/* Contact info */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
                <a href="mailto:merwan@example.com" className="hover:text-portfolio-purple transition-colors">
                  merwan@example.com
                </a>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <a href="tel:+1234567890" className="hover:text-portfolio-purple transition-colors">
                  +1 (234) 567-890
                </a>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <span>Available for freelance work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;