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
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              onClick={() => window.open('https://leetcode.com/u/DebopriyaaaDebnath/', '_blank')}
            >
              {/* Simple LeetCode SVG icon */}
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12zm-1-17v6h6v2h-8V9h2zm7.707 7.707l-2.414 2.414A1 1 0 0120 19h-8v-2h7.586l2.707-2.707a1 1 0 011.414 1.414z" fill="currentColor"/>
              </svg>
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