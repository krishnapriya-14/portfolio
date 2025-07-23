import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, CreditCard, ShoppingCart, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Panther Tech Assistant",
      description: "AI-powered chatbot that revolutionized helpdesk operations by providing instant, accurate responses to student and faculty queries.",
      icon: <Bot className="h-8 w-8" />,
      impact: "50% reduction in helpdesk response time",
      technologies: ["Python", "AI/ML", "Natural Language Processing", "React.js", "AWS Lambda"],
      type: "AI/Automation",
      status: "Production",
      highlights: [
        "Integrated with university systems for real-time data access",
        "Supports multiple languages for international students",
        "24/7 availability with 95% accuracy rate"
      ]
    },
    {
      title: "AT&T Client Portal Optimization",
      description: "Complete overhaul of AT&T's client dashboard focusing on performance optimization and user experience enhancement.",
      icon: <Zap className="h-8 w-8" />,
      impact: "25% faster dashboard loading",
      technologies: ["React.js", "Node.js", "Redis", "AWS CloudFront", "Performance Optimization"],
      type: "Enterprise",
      status: "Production",
      highlights: [
        "Implemented lazy loading and code splitting",
        "Optimized API calls with intelligent caching",
        "Enhanced mobile responsiveness"
      ]
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning system for real-time fraud detection using advanced algorithms and pattern recognition.",
      icon: <CreditCard className="h-8 w-8" />,
      impact: "95% fraud detection accuracy",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "PostgreSQL"],
      type: "FinTech",
      status: "Complete",
      highlights: [
        "Real-time transaction analysis",
        "Adaptive learning algorithms",
        "Integration with payment gateways"
      ],
      github: "https://github.com/krishnapriya/fraud-detection"
    },
    {
      title: "Sacs and Packs E-commerce",
      description: "Full-stack e-commerce platform for grocery shopping with modern UI and robust backend architecture.",
      icon: <ShoppingCart className="h-8 w-8" />,
      impact: "Complete shopping solution",
      technologies: ["C", "SQL", "HTML/CSS", "JavaScript", "Database Design"],
      type: "E-commerce",
      status: "Complete",
      highlights: [
        "Secure payment processing",
        "Inventory management system",
        "User authentication and profiles"
      ],
      github: "https://github.com/krishnapriya/sacs-and-packs"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "AI/Automation": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Enterprise": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "FinTech": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "E-commerce": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Complete": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that deliver real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getTypeColor(project.type)}>
                          {project.type}
                        </Badge>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm font-medium text-primary mb-1">Impact</p>
                  <p className="text-lg font-semibold">{project.impact}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.status === "Production" && (
                    <Button size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <Card className="bg-gradient-to-r from-muted/50 to-muted/30 border-dashed border-2">
          <CardContent className="text-center py-12">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Exciting new projects in robotics, advanced ML algorithms, and innovative UI/UX experiments
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Robotics</Badge>
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">Deep Learning</Badge>
                <Badge variant="outline">IoT</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;