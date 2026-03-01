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
import arraAcademy from "@/assets/portfolio/arra-academy.png";

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
  { src: arraAcademy, title: "ARRA Academy", category: "Web Design" },
];

const categories = ["Të gjitha", "Social Media", "Branding", "Web Design"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Të gjitha");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeCategory === "Të gjitha"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-xs tracking-[0.4em] uppercase mb-4 font-semibold">Portfolio</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Punimet e <span className="italic text-gradient-red">Mia</span>
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-14 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-body text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-red text-primary-foreground shadow-red"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative overflow-hidden cursor-pointer bg-card border border-border/50 hover:border-primary/20 transition-all duration-500"
              onClick={() => setSelectedImage(project.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-5">
                  <p className="text-primary-foreground/70 font-body text-[10px] tracking-[0.3em] uppercase mb-1">
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
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Selected work"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioSection;
