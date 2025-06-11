import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Code, Briefcase, User, ArrowDown } from "lucide-react";
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const skills = {
    "Web Development": ["Django (MVT architecture)", "HTML", "CSS", "JavaScript"],
    "Programming Languages": ["Python", "Java"],
    "Database Management": ["MySQL"],
    "Cloud Technologies": ["Azure Storage"],
    "Other": ["Blockchain", "Location-based Services"]
  };
  const projects = [{
    title: "AgriHub - Smart Agriculture Resource Portal",
    description: "Designed and developed a decentralized platform using blockchain technology to ensure transparent and tamper-proof transactions between farmers, agri-experts, suppliers, and buyers. The system includes crop recommendations, weather insights, and peer-to-peer exchange of resources—promoting smart, secure, and sustainable farming practices.",
    technologies: ["Blockchain", "Web Development", "Smart Contracts"]
  }, {
    title: "Classroom Material Distribution Platform",
    description: "Developed a web application to facilitate buying and selling of study materials among students, streamlining academic resource sharing and promoting sustainability.",
    technologies: ["Django", "Web Development", "Database Management"]
  }, {
    title: "EV Charging Station Slot Booking Website",
    description: "Built a user-friendly website that enables EV users to book charging slots in advance, helping them avoid long queues and save time. The system enhances convenience and efficiency in EV station usage.",
    technologies: ["Web Development", "Booking System", "User Experience"]
  }, {
    title: "On-Road Assistance Platform",
    description: "Created a real-time service platform where users can request nearby assistance such as fuel delivery or mechanical support. Integrated location-based services for faster response and convenience.",
    technologies: ["Location Services", "Real-time Systems", "Mobile Development"]
  }];
  const experiences = [{
    company: "Ziuke Infotech",
    position: "Django Developer Intern",
    duration: "Jan 2025 - Feb 2025",
    location: "Thrissur",
    responsibilities: ["Developed scalable web applications using Django", "Worked with Django's Model-View-Template architecture for efficient web development"]
  }, {
    company: "Gem Advertising and Publications",
    position: "IT Support",
    duration: "Mar 2024",
    location: "Qatar",
    responsibilities: ["Provided support to the IT team, primarily in design, printing, networking, and website development", "Developed a comprehensive understanding of international markets and business practices"]
  }];
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Austin Siju
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            B.Tech Computer Science & Engineering Student | Django Developer | Blockchain Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Currently completing B.Tech at Christ College of Engineering, Kerala. I stay updated by taking certification courses, joining competitions, and working on student projects, applying what I learn to gain practical experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-6">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:austinsiju123@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/austin-siju" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate Computer Science and Engineering student with a strong foundation in web development and emerging technologies. My journey includes hands-on experience with Django development, blockchain technology, and building practical solutions that make a difference.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  From Thrissur, Kerala, I've maintained an excellent academic record with a GPA of 7.8/10 while actively engaging in real-world projects and internships. I believe in continuous learning and applying knowledge through practical implementations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">Team Player</Badge>
                  <Badge variant="secondary">Quick Learner</Badge>
                  <Badge variant="secondary">Innovation Focused</Badge>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Christ College of Engineering</h4>
                        <p className="text-sm text-muted-foreground">B.Tech, Computer Science and Engineering</p>
                        <p className="text-sm text-muted-foreground">2021 - 2025 | GPA: 7.8/10</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Christ Vidyanikethan</h4>
                        <p className="text-sm text-muted-foreground">12th ICSE Board, Computer Science</p>
                        <p className="text-sm text-muted-foreground">2020 - 2021 | GPA: 93%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => <Card key={category} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge>English (Fluent)</Badge>
                <Badge>Malayalam (Native)</Badge>
                <Badge>Hindi (Intermediate)</Badge>
                <Badge>Tamil (Intermediate)</Badge>
                <Badge>German (Basic)</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map(project => <Card key={project.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map(exp => <Card key={`${exp.company}-${exp.duration}`} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.position}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">{exp.company}</CardDescription>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <Badge variant="outline">{exp.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, index) => <li key={index} className="flex items-start">
                          <Briefcase className="mr-2 h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span>{responsibility}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in new opportunities and exciting projects. Whether you want to discuss a potential collaboration or just say hello, I'd love to hear from you!
            </p>
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:austinsiju123@gmail.com" className="text-lg hover:text-primary transition-colors">
                    austinsiju123@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <a href="https://www.linkedin.com/in/austin-siju" className="text-lg hover:text-primary transition-colors">
                    linkedin.com/in/austin-siju
                  </a>
                </div>
                <p className="text-muted-foreground">📱 7356741613</p>
                <p className="text-muted-foreground">📍 Thrissur, Kerala</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Austin Siju. Built with React and modern web technologies.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Interested in making crafts, travelling, and exploring new technologies.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;