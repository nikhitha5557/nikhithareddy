
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, color: "bg-blue-600" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "Java", level: 80, color: "bg-red-600" },
        { name: "C", level: 75, color: "bg-gray-600" },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React JS", level: 88, color: "bg-blue-500" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
        { name: "MongoDB", level: 82, color: "bg-green-600" },
        { name: "MERN Stack", level: 85, color: "bg-purple-600" },
      ]
    },
    {
      title: "AI/ML & Tools",
      skills: [
        { name: "Machine Learning", level: 80, color: "bg-indigo-600" },
        { name: "DevOps", level: 75, color: "bg-teal-600" },
        { name: "Supabase", level: 78, color: "bg-green-500" },
        { name: "Git/GitHub", level: 85, color: "bg-gray-700" },
      ]
    },
    {
      title: "Design & Creative",
      skills: [
        { name: "Canva", level: 88, color: "bg-pink-500" },
        { name: "Photoshop", level: 82, color: "bg-blue-700" },
        { name: "UI/UX Design", level: 80, color: "bg-purple-500" },
        { name: "Design Engineering", level: 85, color: "bg-cyan-600" },
      ]
    }
  ];

  const certifications = [
    "AI Fundamentals - Microsoft Edunet",
    "MERN Stack Development - Ignite Internships",
    "DevOps Essentials - Commons Collective",
    "IEEE IoT Project Leadership"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set developed through academic pursuits, internships, 
            and hands-on project experience in AI/ML and web development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div className="p-6 bg-primary/5 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Internships</div>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
