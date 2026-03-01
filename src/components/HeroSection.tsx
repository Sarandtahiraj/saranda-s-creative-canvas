import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/30 blur-3xl"
        animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose-glow/5 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Graphic Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] mb-8"
        >
          <span className="block">Saranda</span>
          <span className="block text-gradient-rose italic font-medium">Tahiraj</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Krijoj dizajne unike që tregojnë histori — nga branding te social media dhe më shumë ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-rose text-primary-foreground rounded-full font-body font-medium shadow-rose hover:shadow-rose-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Shiko Punimet
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-glass rounded-full font-body font-medium hover:shadow-rose transition-all duration-300 hover:-translate-y-0.5"
          >
            Kontakto
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#portfolio"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
