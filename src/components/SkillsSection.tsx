import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Firebase", "MongoDB", "Express.js", "REST APIs"]
    },
    {
      title: "Design",
      icon: "🎭",
      skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: ["Docker", "MLFlow", "Git", "GitHub", "Vercel", "Netlify"]
    },
    {
      title: "AI/ML & Data",
      icon: "🤖",
      skills: ["Python", "scikit-learn", "OpenAI APIs", "NLP", "Data Analysis"]
    },
    {
      title: "Other Technologies",
      icon: "💡",
      skills: ["Web3", "Blockchain", "PWA", "Responsive Design", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass rounded-xl p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;