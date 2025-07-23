import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Monitor, 
  Server, 
  Cloud, 
  Database, 
  TestTube, 
  Wrench, 
  Shield,
  GitBranch,
  Smartphone
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "Python", "C", "JavaScript", "TypeScript"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Frontend",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["React.js", "Angular", "HTML5", "CSS3", "Bootstrap", "Node.js"],
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Spring Boot", "J2EE", "Express.js", "Hibernate"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS", "Azure"],
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Testing",
      icon: <TestTube className="h-6 w-6" />,
      skills: ["JUnit", "Mockito", "Jest", "Jasmine", "Selenium", "Postman"],
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Bitbucket", "Jira", "Prometheus", "Grafana"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Security",
      icon: <Shield className="h-6 w-6" />,
      skills: ["OAuth2", "JWT", "SSL"],
      color: "bg-accent/10 text-accent"
    },
    {
      title: "CI/CD",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["GitHub Actions", "Terraform", "Shell Scripting", "CodeQL"],
      color: "bg-primary/10 text-primary"
    }
  ];

  const awsServices = [
    "EC2", "S3", "RDS", "Lambda", "IAM", "CloudFormation", "CloudWatch"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AWS Services Highlight */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-center justify-center">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Cloud className="h-6 w-6" />
              </div>
              <span className="text-2xl">AWS Cloud Services</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {awsServices.map((service) => (
                <Badge 
                  key={service} 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 text-sm py-1 px-3"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;