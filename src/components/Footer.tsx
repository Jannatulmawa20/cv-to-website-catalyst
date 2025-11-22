const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2025 Jannatul Mawa. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Services
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
