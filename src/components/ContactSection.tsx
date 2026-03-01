import { motion } from "framer-motion";
import { Linkedin, Github, Heart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4 font-semibold">Kontakto</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Le të punojmë <span className="italic text-gradient-red">bashkë</span>
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-sm mx-auto">
            Ke një projekt në mendje? Më kontakto përmes rrjeteve sociale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/saranda-t-675983268/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 bg-gradient-red text-primary-foreground rounded-full font-body text-xs tracking-[0.1em] uppercase font-semibold shadow-red hover:shadow-red-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Sarandtahiraj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 border-2 border-foreground/10 rounded-full font-body text-xs tracking-[0.1em] uppercase font-semibold hover:border-primary/30 hover:shadow-red transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github size={14} />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-6xl mt-28 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground font-body text-xs tracking-wide">
          <p>© 2025 Saranda Tahiraj. Të gjitha të drejtat e rezervuara.</p>
          <p className="flex items-center gap-1">
            Bërë me <Heart size={12} className="text-primary fill-primary" /> nga Saranda
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
