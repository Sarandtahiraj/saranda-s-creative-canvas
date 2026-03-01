import { motion } from "framer-motion";
import { useState } from "react";

import hyper from "@/assets/portfolio/hyper.png";
import arrahoes from "@/assets/portfolio/arra-shoes.png";
import crackers from "@/assets/portfolio/crackers.png";
import fashion from "@/assets/portfolio/fashion-2025.png";
import arrarRent from "@/assets/portfolio/arra-rent.png";
import blueDiamond from "@/assets/portfolio/blue-diamond.png";
import cocktail from "@/assets/portfolio/cocktail.png";
import honeyBee from "@/assets/portfolio/honey-bee.png";
import airpods from "@/assets/portfolio/airpods.png";
import medicalWeb from "@/assets/portfolio/medical-web.png";

const projects = [
  { src: hyper, title: "Hyper Logo", category: "Branding" },
  { src: arrahoes, title: "ARRA Shoes", category: "Social Media" },
  { src: fashion, title: "Fashion 2025", category: "Social Media" },
  { src: cocktail, title: "Cocktail Promo", category: "Social Media" },
  { src: blueDiamond, title: "BlueDiamond", category: "Social Media" },
  { src: airpods, title: "AirPods Max", category: "Social Media" },
  { src: crackers, title: "Chackers Product", category: "Social Media" },
  { src: honeyBee, title: "Honey Bee Logo", category: "Branding" },
  { src: arrarRent, title: "ARRA Rent", category: "Social Media" },
  { src: medicalWeb, title: "Medical Website", category: "Web Design" },
];

const categories = ["Të gjitha", "Social Media", "Branding", "Web Design"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Të gjitha");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeCategory === "Të gjitha"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Punimet e <span className="italic text-gradient-rose">Mia</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-rose text-primary-foreground shadow-rose"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card shadow-sm hover:shadow-rose-lg transition-shadow duration-500"
              onClick={() => setSelectedImage(project.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end">
                <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary-foreground font-body text-xs tracking-widest uppercase mb-1">
                    {project.category}
                  </p>
                  <p className="text-primary-foreground font-display text-lg font-semibold">
                    {project.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Selected work"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioSection;
