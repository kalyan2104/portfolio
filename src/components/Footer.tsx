import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            <span>using React & TypeScript</span>
          </div>

          <nav className="flex gap-6">
            <a 
              href="#home" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Decorative tech element */}
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
