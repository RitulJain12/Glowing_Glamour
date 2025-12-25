import { Instagram, Facebook, Youtube, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@glamourstudio",
    followers: "10K+",
    color: "from-pink-500 to-purple-500",
    url: "#",
  },
  {
    name: "Facebook",
    icon: Facebook,
    handle: "Glamour Studio",
    followers: "5K+",
    color: "from-blue-600 to-blue-400",
    url: "#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    handle: "Glamour Beauty Tips",
    followers: "2K+",
    color: "from-red-600 to-red-400",
    url: "#",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    handle: "Quick Connect",
    followers: "24/7",
    color: "from-green-500 to-green-400",
    url: "#",
  },
];

const SocialMedia = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-gold/10">
        <Heart className="w-24 h-24" />
      </div>
      <div className="absolute bottom-20 right-10 text-rose/10">
        <Heart className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Heart className="w-4 h-4 text-rose" />
            <span className="text-sm text-muted-foreground">Stay Connected</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Follow Me on </span>
            <span className="text-gradient-rose">Social Media</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with my latest work, beauty tips, and behind-the-scenes content. 
            Let's connect and grow together!
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 text-center hover-lift group"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-1">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{social.handle}</p>
                <p className="text-gold font-semibold">{social.followers} Followers</p>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join our beauty community and get exclusive tips & offers!
          </p>
          <Button variant="rose" size="lg">
            <Heart className="w-5 h-5" />
            Follow Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
