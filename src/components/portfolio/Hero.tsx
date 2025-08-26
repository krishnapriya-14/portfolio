import { Button } from "@/components/ui/button";
import { ChevronDown, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-primary">
              KP
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Krishna Priya Kommineni
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Crafting Scalable Systems & Intuitive UIs
            </p>
            <div className="text-lg text-muted-foreground">
              Full Stack Developer • 4+ Years Experience • AI Enthusiast
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/krishnapriyakom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:Krishna141100@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="h-8 w-8 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;