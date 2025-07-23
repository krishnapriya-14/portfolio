import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating technology that makes a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Full Stack Developer with over 4 years of experience building scalable, 
              secure, and responsive web applications. My journey in technology has taken me 
              from developing enterprise solutions at <span className="text-primary font-semibold">IBM</span> to 
              pioneering AI-powered tools as a Graduate Research Assistant at 
              <span className="text-accent font-semibold"> Eastern Illinois University</span>.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in bridging backend systems with intuitive user interfaces, 
              leveraging modern technologies like React, Spring Boot, and AWS to create 
              solutions that not only work flawlessly but also provide exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                FinTech Expert
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Cloud Native
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                AI Enthusiast
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                UI/UX Focused
              </span>
            </div>
          </div>

          {/* Education & Fun Facts */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Education</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div>
                        <p className="font-medium">M.S. Computer Science</p>
                        <p className="text-sm">Eastern Illinois University • 2025 • 4.0 GPA</p>
                      </div>
                      <div>
                        <p className="font-medium">B.Tech Computer Science</p>
                        <p className="text-sm">Acharya Nagarjuna University • 8.98/10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Achievements</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Reduced helpdesk response time by 50% with AI bot</li>
                      <li>• Optimized AT&T dashboard loading by 25%</li>
                      <li>• IBM Full Stack Developer Certified</li>
                      <li>• Microsoft Azure Fundamentals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Beyond Code</h3>
                    <p className="text-sm text-muted-foreground">
                      When I'm not coding, you'll find me exploring robotics projects, 
                      contributing to open-source AI tools, or experimenting with 
                      the latest in UI/UX design trends.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;