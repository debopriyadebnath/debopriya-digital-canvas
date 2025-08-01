import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ecoLocalImage from '@/assets/ecolocal-project.jpg';
import airbnbImage from '@/assets/airbnb-project.jpg';
import zentryImage from '@/assets/zentry-project.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "EcoLocal – Web3-Powered FinTech E-commerce",
      description: "A decentralized shopping platform connecting users with local vendors using blockchain technology and Firebase for seamless transactions.",
      image: ecoLocalImage,
      technologies: ["React", "Web3", "Firebase", "Blockchain", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Airbnb Clone Project",
      description: "A comprehensive full-stack replica featuring booking systems, property listings, and user authentication built with modern technologies.",
      image: airbnbImage,
      technologies: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Zentry – AI-Driven Smart Expense Tracker",
      description: "A futuristic mobile application for expense management with AI budget advisor, blockchain transparency, and collaborative group tracking capabilities.",
      image: zentryImage,
      technologies: ["React Native", "Expo", "Node.js", "AI/Gemini API", "Blockchain", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/debonir-projects/Zentry",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, machine learning, and innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass hover-lift group overflow-hidden animate-scale-in ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-neon-coral text-white">Featured</Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4 pt-2">
                  <Button variant="outline" size="sm" className="group/btn">
                    <ExternalLink size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="group/btn">
                    <Github size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;