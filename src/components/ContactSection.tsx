import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Heart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Kontakto</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Le të punojmë <span className="italic text-gradient-rose">bashkë</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-md mx-auto">
            Ke një projekt në mendje? Do të doja ta dëgjoja. Më kontakto përmes rrjeteve sociale.
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
            className="flex items-center gap-2 px-6 py-3 bg-gradient-rose text-primary-foreground rounded-full font-body text-sm shadow-rose hover:shadow-rose-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Sarandtahiraj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-glass rounded-full font-body text-sm hover:shadow-rose transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-6xl mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground font-body text-sm">
          <p>© 2025 Saranda Tahiraj. Të gjitha të drejtat e rezervuara.</p>
          <p className="flex items-center gap-1">
            Bërë me <Heart size={14} className="text-primary fill-primary" /> nga Saranda
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
