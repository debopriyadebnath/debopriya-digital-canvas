import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="section border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© 2025 Debopriya Debnath. Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Right side - Social links */}
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              onClick={() => window.open('mailto:debopriyadebnath121@gmail.com')}
            >
              <Mail size={18} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              onClick={() => window.open('https://github.com/debopriyadebnath', '_blank')}
            >
              <Github size={18} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              onClick={() => window.open('https://linkedin.com/in/debopriya-debnath-159184330', '_blank')}
            >
              <Linkedin size={18} />
            </Button>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;