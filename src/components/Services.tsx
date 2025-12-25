import { Scissors, Palette, Sparkles, Crown, Wand2, Droplets } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Cutting",
    description: "Precision cuts tailored to your face shape and personal style. From classic bobs to trendy layered looks.",
    color: "gold",
  },
  {
    icon: Wand2,
    title: "Hair Styling",
    description: "Transform your look with professional styling for any occasion. Updos, curls, sleek styles, and more.",
    color: "rose",
  },
  {
    icon: Droplets,
    title: "Hair Chemical Treatments",
    description: "Expert coloring, highlights, keratin treatments, and perms using premium, hair-safe products.",
    color: "gold",
  },
  {
    icon: Palette,
    title: "Makeup Services",
    description: "Flawless makeup artistry for everyday glam to special occasions. Enhance your natural beauty.",
    color: "rose",
  },
  {
    icon: Crown,
    title: "Bridal & Party Looks",
    description: "Complete bridal packages including trials, hair, and makeup. Look stunning on your special day.",
    color: "gold",
  },
  {
    icon: Sparkles,
    title: "Beauty Consultation",
    description: "Personalized beauty advice and skin analysis. Discover the perfect routine for your unique needs.",
    color: "rose",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-rose rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-gold/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm text-muted-foreground">What I Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">My </span>
            <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover a range of professional beauty services designed to enhance your 
            natural beauty and boost your confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    service.color === "gold"
                      ? "bg-gold/20 group-hover:bg-gold/30"
                      : "bg-rose/20 group-hover:bg-rose/30"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      service.color === "gold" ? "text-gold" : "text-rose"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
