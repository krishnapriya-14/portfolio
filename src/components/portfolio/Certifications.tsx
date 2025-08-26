import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { 
      title: "AWS GENAI",
      issuer:"AWS Educate",
      year: "2025",
      description: "F"
      
    }
    {
      title: "Full Stack Developement",
      issuer: "IBM",
      year: "2023",
      description: "Comprehensive certification covering full-stack development with modern technologies",
      skills: ["React.js", "Node.js", "Cloud Development", "DevOps"],
      credentialId: "IBM-FSD-2023",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      year: "2023",
      description: "Foundational knowledge of cloud services and Azure platform capabilities",
      skills: ["Azure Services", "Cloud Computing", "Virtual Machines", "Storage"],
      credentialId: "AZ-900",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "Amazon Web Services",
      year: "2022",
      description: "Core AWS services, security, and cloud architecture principles",
      skills: ["EC2", "S3", "RDS", "IAM", "CloudFormation"],
      credentialId: "AWS-CF-2022",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Front-End Web Development",
      issuer: "IBM",
      year: "2022",
      description: "Advanced front-end development techniques and best practices",
      skills: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
      credentialId: "IBM-FE-2022",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Java Advanced",
      issuer: "Coursera",
      year: "2021",
      description: "Advanced Java programming concepts and enterprise development",
      skills: ["Spring Framework", "Microservices", "JVM", "Concurrency"],
      credentialId: "JAVA-ADV-2021",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certifications & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-lg text-white`}>
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Skills Covered</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>ID: {cert.credentialId}</span>
                    <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Philosophy */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="text-center py-12">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I believe in staying current with emerging technologies and industry best practices. 
                My certification journey reflects a commitment to excellence and continuous improvement 
                in software development and cloud technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground">Cloud Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Skills Validated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">2023</div>
                <div className="text-sm text-muted-foreground">Latest Cert</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;