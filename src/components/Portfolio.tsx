import { useState } from "react";
import { Sparkles } from "lucide-react";
import portfolioWork1 from "@/assets/portfolio-work-1.jpg";
import portfolioWork2 from "@/assets/portfolio-work-2.jpg";
import portfolioWork3 from "@/assets/portfolio-work-3.jpg";

const categories = ["All", "Styling", "Makeup", "Bridal"];

const portfolioItems = [
  {
    id: 1,
    image: portfolioWork1,
    title: "Elegant Party Look",
    category: "Styling",
  },
  {
    id: 2,
    image: portfolioWork2,
    title: "Traditional Beauty",
    category: "Bridal",
  },
  {
    id: 3,
    image: portfolioWork3,
    title: "Glamour Styling",
    category: "Makeup",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-muted-foreground">My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Portfolio </span>
            <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through my recent work and transformations. Each look is crafted 
            with precision, creativity, and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold text-background"
                  : "bg-secondary text-muted-foreground hover:text-gold border border-border hover:border-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover-lift"
            >
              <div className="aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs text-gold mb-1">{item.category}</p>
                  <h3 className="text-lg font-serif font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
