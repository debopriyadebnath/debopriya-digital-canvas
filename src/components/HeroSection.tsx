import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-neon-purple rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-neon-coral rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-xl text-muted-foreground">Hi,</h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I'm <span className="gradient-text">Debopriya</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                I build meaningful digital experiences at the intersection of design, code, and creativity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-primary font-medium">
              <span>Frontend</span>
              <span>•</span>
              <span>Web3</span>
              <span>•</span>
              <span>Machine Learning</span>
              <span>•</span>
              <span>UI/UX</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="neon"
                size="lg"
                onClick={scrollToProjects}
                className="group font-semibold"
              >
                View Portfolio
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="hero"
                size="lg"
                onClick={scrollToContact}
                className="font-semibold"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-neon-purple/20 p-2 glow animate-glow-pulse">
                <img
                  src="https://i.postimg.cc/76gKxXNW/tuliiiiiii.jpg"
                  alt="Debopriya Debnath - Frontend Developer"
                  className="w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback content - hidden by default, shown if image fails to load */}
                <div className="w-full h-full rounded-full bg-muted/20 items-center justify-center hidden">
                  <p className="text-center text-muted-foreground">
                    Profile Photo<br />
                    <span className="text-sm">Loading...</span>
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-neon-cyan rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-neon-purple rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;