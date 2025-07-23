import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "Eastern Illinois University",
      location: "Charleston, IL",
      period: "2024 - 2025",
      type: "Research",
      description: "Leading AI-powered research initiatives and developing innovative solutions for academic and industry applications.",
      achievements: [
        "Developed Panther Tech Assistant AI bot reducing helpdesk response time by 50%",
        "Implemented machine learning algorithms for student success prediction",
        "Collaborated with faculty on cutting-edge AI research projects",
        "Mentored undergraduate students in software development practices"
      ],
      technologies: ["Python", "AI/ML", "React.js", "AWS", "Research"]
    },
    {
      title: "Application Developer",
      company: "IBM India",
      location: "Bangalore, India",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Developed and maintained enterprise-grade applications for global clients, focusing on scalability and performance optimization.",
      achievements: [
        "Optimized AT&T client portal reducing dashboard loading time by 25%",
        "Built microservices architecture serving 100K+ daily active users",
        "Implemented CI/CD pipelines improving deployment efficiency by 40%",
        "Led cross-functional team of 5 developers on critical client projects"
      ],
      technologies: ["Java", "Spring Boot", "React.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Developer",
      company: "V4 Infotech",
      location: "Hyderabad, India",
      period: "2019 - 2021",
      type: "Full-time",
      description: "Developed end-to-end web applications and contributed to the full software development lifecycle.",
      achievements: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Designed and implemented RESTful APIs with 99.9% uptime",
        "Collaborated with UI/UX teams to deliver pixel-perfect interfaces",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["JavaScript", "Angular", "Node.js", "MongoDB", "Express.js"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across diverse industries and technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <div className="md:ml-20">
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <Badge variant="outline" className="w-fit">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;