import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import { useState, useEffect } from "react";

const Hero = () => {
  const titles = ["Software Engineer", "AI & Python Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        // Typing
        setDisplayedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTitleIndex]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Kalyan-Ram-Resume.pdf';
    link.download = 'Kalyan-Ram-Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-70" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-2xl md:text-3xl font-mono text-primary mb-2 block">Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-gradient">Kalyan Ram</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem]">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Crafting intelligent solutions at the intersection of code and creativity. 
              Passionate about building scalable applications and exploring the frontiers of AI.
            </p>
            <div className="pt-4">
              <Button 
                onClick={handleDownloadResume}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-[var(--glow-primary)] transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile photo with concentric wave shapes */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer wave - lightest shade */}
              <div className="absolute inset-0 rounded-full bg-primary/10 scale-110 animate-fade-in" style={{ animationDelay: "0.2s" }}></div>
              
              {/* Middle wave - medium shade */}
              <div className="absolute inset-0 rounded-full bg-primary/20 scale-105 animate-fade-in" style={{ animationDelay: "0.4s" }}></div>
              
              {/* Inner wave - darkest shade */}
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-fade-in" style={{ animationDelay: "0.6s" }}></div>
              
              {/* Profile photo */}
              <img 
                src={profilePhoto} 
                alt="Kalyan Ram - Professional profile" 
                className="relative w-full h-full object-cover object-center rounded-full hover:scale-105 transition-transform duration-500 animate-fade-in z-10"
                style={{ animationDelay: "0.8s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
