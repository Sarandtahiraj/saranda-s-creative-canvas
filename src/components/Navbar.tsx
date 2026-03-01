import { motion } from "framer-motion";
import { Linkedin, Github, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold tracking-tight">
          S<span className="text-gradient-red">.</span>T
        </a>

        <div className="hidden md:flex items-center gap-10 font-body text-[13px] tracking-[0.15em] uppercase">
          <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors duration-300">Punimet</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">Rreth Meje</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Kontakto</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/saranda-t-675983268/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/Sarandtahiraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github size={16} />
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-t border-border/50 px-6 py-4 flex flex-col gap-4 font-body text-sm tracking-[0.15em] uppercase"
        >
          <a href="#portfolio" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">Punimet</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">Rreth Meje</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">Kontakto</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
