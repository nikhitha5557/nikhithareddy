
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Hi, I'm{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Nikhitha Reddy
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI/ML Enthusiast & Web Developer
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A driven B.Tech student specializing in Artificial Intelligence and Machine Learning 
            with a strong academic background and hands-on experience in web development. 
            Passionate about creating innovative solutions through technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("portfolio")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="text-center">
              <div className="font-bold text-2xl text-foreground">7.87</div>
              <div>Current GPA</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-foreground">3+</div>
              <div>Internships</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-foreground">10+</div>
              <div>Technologies</div>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-blue-600/10 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                  NR
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-600 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
