
import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Calendar, Award } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4 pt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for Opportunities
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Nikhitha
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                AI/ML Engineer & Full-Stack Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A passionate B.Tech student specializing in Artificial Intelligence and Machine Learning 
              with expertise in full-stack web development. Building innovative solutions at the 
              intersection of AI and modern web technologies.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-sm">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Location</div>
                  <div className="text-xs text-muted-foreground">Hyderabad, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-sm">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Experience</div>
                  <div className="text-xs text-muted-foreground">3+ Internships</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-sm">
                <Award className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">CGPA</div>
                  <div className="text-xs text-muted-foreground">7.87/10</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("portfolio")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 text-lg transition-all duration-300 hover:scale-105 border-2"
            >
              Let's Connect
            </Button>
          </div>

          <div className="flex gap-8 justify-center lg:justify-start text-center">
            <div>
              <div className="font-bold text-3xl text-foreground">7.87</div>
              <div className="text-sm text-muted-foreground">Current GPA</div>
            </div>
            <div>
              <div className="font-bold text-3xl text-foreground">3+</div>
              <div className="text-sm text-muted-foreground">Internships</div>
            </div>
            <div>
              <div className="font-bold text-3xl text-foreground">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>

        {/* Enhanced Profile Section with Square Mask */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main profile container with glassmorphism effect */}
            <div className="relative w-96 h-96 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden">
              {/* Profile image with square mask */}
              <div className="absolute inset-4 rounded-xl overflow-hidden">
                <img
                  src="https://i.postimg.cc/yd5dHXh0/Whats-App-Image-2025-06-07-at-15-57-08-2216a66a.jpg"
                  alt="Nikhitha Reddy Gottimukkula"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                AI/ML
              </div>
              <div className="absolute -bottom-3 -left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                Full-Stack
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-blue-600/30 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-purple-600/20 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <button 
            onClick={() => scrollToSection("about")}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
