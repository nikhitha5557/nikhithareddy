
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Complete web application development using the MERN stack (MongoDB, Express.js, React, Node.js) with modern best practices and responsive design.",
      features: [
        "React.js Frontend Development",
        "Node.js Backend Development",
        "MongoDB Database Design",
        "RESTful API Development",
        "Responsive UI/UX Design"
      ],
      icon: "🌐",
      color: "border-blue-500"
    },
    {
      title: "AI/ML Solutions",
      description: "Leverage artificial intelligence and machine learning to create intelligent applications and data-driven solutions for modern business challenges.",
      features: [
        "Machine Learning Model Development",
        "Data Analysis & Visualization",
        "AI Integration in Web Apps",
        "Predictive Analytics",
        "Natural Language Processing"
      ],
      icon: "🤖",
      color: "border-purple-500"
    },
    {
      title: "Frontend Development",
      description: "Create stunning, interactive user interfaces with modern JavaScript frameworks and cutting-edge design principles.",
      features: [
        "React.js Applications",
        "Responsive Web Design",
        "Modern CSS & Animations",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      icon: "💻",
      color: "border-green-500"
    },
    {
      title: "DevOps & Deployment",
      description: "Streamline development workflows and ensure reliable deployment with modern DevOps practices and cloud technologies.",
      features: [
        "CI/CD Pipeline Setup",
        "Cloud Deployment",
        "Database Management",
        "Performance Monitoring",
        "Version Control (Git)"
      ],
      icon: "⚙️",
      color: "border-orange-500"
    },
    {
      title: "Design Engineering",
      description: "Bridge the gap between design and development with technical design solutions and creative problem-solving approaches.",
      features: [
        "UI/UX Design",
        "Prototyping & Wireframing",
        "Design System Development",
        "User Experience Optimization",
        "Visual Design & Branding"
      ],
      icon: "🎨",
      color: "border-pink-500"
    },
    {
      title: "Technical Consulting",
      description: "Provide expert guidance on technology stack selection, architecture decisions, and project planning for optimal results.",
      features: [
        "Technology Stack Consultation",
        "Project Architecture Planning",
        "Code Review & Optimization",
        "Performance Analysis",
        "Best Practices Implementation"
      ],
      icon: "💡",
      color: "border-cyan-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development and AI/ML solutions tailored to meet your business needs. 
            From concept to deployment, I deliver high-quality, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 ${service.color} group`}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your ideas to life with modern web technologies 
                and innovative AI/ML solutions. I'm committed to delivering excellence in every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="px-8 py-3 transition-all duration-300 hover:scale-105"
                >
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
