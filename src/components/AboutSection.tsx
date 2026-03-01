import { motion } from "framer-motion";
import { Palette, Layout, Sparkles, PenTool } from "lucide-react";

const skills = [
  { icon: Palette, label: "Branding & Logo", desc: "Identitet vizual unik" },
  { icon: Layout, label: "Social Media", desc: "Përmbajtje kreative" },
  { icon: PenTool, label: "Web Design", desc: "UI/UX moderne" },
  { icon: Sparkles, label: "Web Development", desc: "Frontend & Backend" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4 font-semibold">Rreth Meje</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 leading-tight tracking-tight">
              Dizajne që <br />
              <span className="italic text-gradient-red">frymëzojnë</span>
            </h2>
            <div className="w-12 h-[2px] bg-primary mb-8" />
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Jam Saranda Tahiraj, dizajnere grafike dhe web developer me pasion për krijimin e 
              identiteteve vizuale që lënë përshtypje. Kam përfunduar Shkenca Kompjuterike në UMIB 
              dhe specializohem në branding, social media design, web design dhe web development.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Çdo projekt është një mundësi e re për të krijuar diçka të bukur dhe funksionale 
              që komunikon mesazhin e duhur — qoftë dizajn grafik apo zhvillim web.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-background border border-border/50 hover:border-primary/20 hover:shadow-red transition-all duration-300"
              >
                <skill.icon className="text-primary mb-4" size={22} strokeWidth={1.5} />
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
