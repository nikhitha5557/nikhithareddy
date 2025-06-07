
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Online Drivers Hiring App",
      description: "A comprehensive web application for connecting drivers with hiring companies. Features include user authentication, profile management, job listings, and real-time communication.",
      technologies: ["React.js", "JavaScript", "MongoDB", "HTML", "CSS", "Supabase"],
      features: [
        "User Authentication & Authorization",
        "Driver Profile Management",
        "Real-time Job Listings",
        "Application Tracking System",
        "Responsive Design",
        "Database Integration"
      ],
      status: "Completed",
      category: "Full-Stack Development",
      image: "🚗",
      liveDemo: "#",
      github: "https://github.com/nikhitha5557"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent dashboard that leverages machine learning algorithms to provide predictive analytics and data insights for business decision-making.",
      technologies: ["Python", "React.js", "TensorFlow", "MongoDB", "Express.js"],
      features: [
        "Machine Learning Models",
        "Data Visualization",
        "Predictive Analytics",
        "Real-time Data Processing",
        "Interactive Charts",
        "Export Functionality"
      ],
      status: "In Development",
      category: "AI/ML Project",
      image: "📊",
      liveDemo: "#",
      github: "https://github.com/nikhitha5557"
    },
    {
      title: "IoT Device Management System",
      description: "A comprehensive system for managing IoT devices with real-time monitoring, data collection, and device control capabilities. Part of IEEE chairperson project.",
      technologies: ["JavaScript", "Node.js", "MongoDB", "React.js", "MQTT"],
      features: [
        "Device Registration & Management",
        "Real-time Monitoring",
        "Data Collection & Storage",
        "Remote Device Control",
        "Alert System",
        "Dashboard Analytics"
      ],
      status: "Ongoing",
      category: "IoT Development",
      image: "🌐",
      liveDemo: "#",
      github: "https://github.com/nikhitha5557"
    },
    {
      title: "E-Learning Platform",
      description: "A modern e-learning platform with course management, video streaming, progress tracking, and interactive quizzes for enhanced learning experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "CSS"],
      features: [
        "Course Management",
        "Video Streaming",
        "Progress Tracking",
        "Interactive Quizzes",
        "User Profiles",
        "Certificate Generation"
      ],
      status: "Completed",
      category: "Web Development",
      image: "📚",
      liveDemo: "#",
      github: "https://github.com/nikhitha5557"
    },
    {
      title: "Design Engineering Portfolio",
      description: "A showcase of design engineering projects from my internship at Sagar Asia Pvt Ltd, featuring CAD designs, prototypes, and engineering solutions.",
      technologies: ["HTML", "CSS", "JavaScript", "Photoshop", "Canva"],
      features: [
        "3D Model Showcase",
        "Interactive Gallery",
        "Project Documentation",
        "Technical Specifications",
        "Process Visualization",
        "Client Testimonials"
      ],
      status: "Completed",
      category: "Design Engineering",
      image: "⚙️",
      liveDemo: "#",
      github: "https://github.com/nikhitha5557"
    },
    {
      title: "DevOps Automation Scripts",
      description: "A collection of automation scripts and tools developed during my DevOps internship at Commons Collective for streamlined deployment and monitoring.",
      technologies: ["Python", "Shell Scripts", "Docker", "Git", "Linux"],
      features: [
        "CI/CD Pipeline Scripts",
        "Automated Testing",
        "Deployment Automation",
        "Monitoring Tools",
        "Log Management",
        "Performance Optimization"
      ],
      status: "Completed",
      category: "DevOps",
      image: "🔧",
      liveDemo: "#",
      github: "https://github.com/nikhitha5557"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700 border-green-200";
      case "In Development": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Ongoing": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack Development": return "bg-purple-100 text-purple-700";
      case "AI/ML Project": return "bg-indigo-100 text-indigo-700";
      case "IoT Development": return "bg-cyan-100 text-cyan-700";
      case "Web Development": return "bg-blue-100 text-blue-700";
      case "Design Engineering": return "bg-pink-100 text-pink-700";
      case "DevOps": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects spanning web development, AI/ML, IoT, and design engineering. 
            Each project demonstrates practical application of modern technologies and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-muted-foreground">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 text-xs"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Profile Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Explore More Projects
              </h3>
              <p className="text-muted-foreground mb-6">
                Visit my GitHub profile to see more projects, contributions, and open-source work.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://github.com/nikhitha5557', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
