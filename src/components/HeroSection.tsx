import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Geometric accent shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-red opacity-[0.04]" />
      <motion.div
        className="absolute top-32 right-20 w-40 h-40 border-2 border-primary/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 border border-primary/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/30"
        animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-primary/20"
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-red-soft mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-red" />
          <span className="text-primary font-body text-xs tracking-[0.2em] uppercase font-medium">Graphic Designer & Web Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-7xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.85] mb-8 tracking-tight"
        >
          <span className="block text-foreground">Saranda</span>
          <span className="block text-gradient-red italic font-medium">Tahiraj</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-16 h-[2px] bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-md mx-auto mb-12 leading-relaxed"
        >
          Krijoj dizajne unike që tregojnë histori — nga branding te social media dhe më shumë
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-red text-primary-foreground rounded-full font-body font-semibold text-sm tracking-wide shadow-red hover:shadow-red-lg transition-all duration-300 hover:-translate-y-0.5 uppercase"
          >
            Shiko Punimet
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/10 rounded-full font-body font-semibold text-sm tracking-wide hover:border-primary/30 hover:shadow-red transition-all duration-300 hover:-translate-y-0.5 uppercase"
          >
            Kontakto
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#portfolio"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
