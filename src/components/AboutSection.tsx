import { motion } from "framer-motion";
import { Palette, Layout, Sparkles, PenTool } from "lucide-react";

const skills = [
  { icon: Palette, label: "Branding & Logo", desc: "Identitet vizual unik" },
  { icon: Layout, label: "Social Media", desc: "Përmbajtje kreative" },
  { icon: PenTool, label: "Web Design", desc: "UI/UX moderne" },
  { icon: Sparkles, label: "Product Design", desc: "Dizajn produktesh" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Rreth Meje</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Dizajne që <br />
              <span className="italic text-gradient-rose">frymëzojnë</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Jam Saranda Tahiraj, dizajnere grafike me pasion për krijimin e identiteteve vizuale 
              që lënë përshtypje. Specializohem në branding, social media design dhe web design.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Çdo projekt është një mundësi e re për të krijuar diçka të bukur dhe funksionale 
              që komunikon mesazhin e duhur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-card shadow-sm hover:shadow-rose transition-all duration-300"
              >
                <skill.icon className="text-primary mb-3" size={24} />
                <h3 className="font-display font-semibold text-sm mb-1">{skill.label}</h3>
                <p className="text-muted-foreground text-xs font-body">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
