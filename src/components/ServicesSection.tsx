import { Globe, Palette, Bot, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, scalable full-stack websites built with modern technologies like React, Next.js, and Node.js.",
      features: ["Custom Web Applications", "E-commerce Solutions", "Performance Optimization", "SEO-Friendly Development"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces through wireframing and prototyping with Figma.",
      features: ["User Interface Design", "Wireframing & Prototyping", "Design Systems", "User Experience Research"]
    },
    {
      icon: Bot,
      title: "ML App Integration",
      description: "Integrating AI-powered features including chatbots and NLP tools to enhance user experiences.",
      features: ["Chatbot Development", "NLP Solutions", "API Integration", "Data Analysis Tools"]
    },
    {
      icon: Users,
      title: "Collaborative Projects",
      description: "Open to internship opportunities and freelance work. Let's build something amazing together.",
      features: ["Remote Collaboration", "Agile Development", "Team Projects", "Mentorship Programs"]
    }
  ];

  return (
    <section id="services" className="section">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences through code, design, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="glass hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;