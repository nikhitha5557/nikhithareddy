
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      institution: "SRIT",
      period: "2023-2026",
      grade: "Current GPA: 7.87",
      status: "Ongoing"
    },
    {
      degree: "Diploma",
      institution: "CIPET",
      period: "2020-2023",
      grade: "94.5%",
      status: "Completed"
    },
    {
      degree: "Secondary Education",
      institution: "SPR School",
      period: "2020",
      grade: "9.8 CGPA",
      status: "Completed"
    }
  ];

  const experience = [
    {
      role: "AI Intern",
      company: "Microsoft Edunet",
      period: "April - May 2025",
      type: "Upcoming"
    },
    {
      role: "MERN Stack Development",
      company: "Ignite Internships",
      period: "March - June 2025",
      type: "Course Completion"
    },
    {
      role: "DevOps Intern",
      company: "Commons Collective",
      period: "May - June 2024",
      type: "Completed"
    },
    {
      role: "Design Engineer Intern",
      company: "Sagar Asia Pvt Ltd",
      period: "January - July 2023",
      type: "Completed"
    },
    {
      role: "IEEE Chairperson",
      company: "IoT Projects",
      period: "Current",
      type: "Leadership"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate and dedicated student with a strong foundation in AI/ML and web development, 
            driven by curiosity and a commitment to excellence in technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        edu.status === 'Ongoing' ? 'bg-primary/10 text-primary' : 'bg-green-100 text-green-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <span className="font-medium text-primary">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{exp.role}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        exp.type === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                        exp.type === 'Leadership' ? 'bg-purple-100 text-purple-700' :
                        exp.type === 'Course Completion' ? 'bg-orange-100 text-orange-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-1">{exp.company}</p>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                With a strong academic foundation and diverse internship experiences, I've developed 
                a unique perspective on technology and its applications. My journey from achieving 
                94.5% in my diploma to pursuing B.Tech in AI/ML reflects my commitment to continuous 
                learning. Through roles ranging from design engineering to DevOps, and upcoming 
                opportunities in AI with Microsoft Edunet, I'm building a comprehensive skill set 
                that bridges theoretical knowledge with practical application.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
