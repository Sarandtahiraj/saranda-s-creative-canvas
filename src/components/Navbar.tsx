import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold">
          S<span className="text-gradient-rose">.</span>T
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
          <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Punimet</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Rreth Meje</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Kontakto</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/saranda-t-675983268/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Sarandtahiraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
