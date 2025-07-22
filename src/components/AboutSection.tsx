import { GraduationCap, Code, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Debopriya Debnath</span>, a tech enthusiast and budding developer passionate about blending design with functionality. With a background in Electronics and Computer Science, I enjoy building impactful digital experiences, especially in the areas of web development, machine learning, and sustainable tech.
              </p>
              <br />
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive in creative, collaborative environments and am always exploring ways to bring ideas to life through elegant code and intuitive design.
              </p>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Education Card */}
            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>
                    <p className="text-primary font-medium">B.Tech in Electronics and Computer Science</p>
                    <p className="text-muted-foreground">Techno Main Salt Lake (2024–2028)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Highlights Card */}
            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-purple/10 rounded-lg">
                    <Trophy size={24} className="text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Work Highlights</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Participated in Hack for Bengal 2025</li>
                      <li>• Participated in Diversion 2025</li>
                      <li>• Full-stack development contributor</li>
                      <li>• Active in open-source projects</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Focus Card */}
            <Card className="glass hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-neon-cyan/10 rounded-lg">
                    <Code size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Current Focus</h3>
                    <p className="text-muted-foreground">
                      Building innovative web applications with modern technologies and exploring the intersection of AI and web development.
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

export default AboutSection;