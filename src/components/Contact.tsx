import { useState } from "react";
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-gold rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-rose rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Mail className="w-4 h-4 text-gold" />
            <span className="text-sm text-muted-foreground">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Let's </span>
            <span className="text-gradient-gold">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your look? Book an appointment or send me a message. 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  placeholder="Tell me about your requirements..."
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4 hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-gold" />
              </div>
              <div>
                <p className="font-serif font-bold text-foreground">Location</p>
                <p className="text-muted-foreground">Your City, State, Country</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-center gap-4 hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-rose/20 flex items-center justify-center">
                <Phone className="w-7 h-7 text-rose" />
              </div>
              <div>
                <p className="font-serif font-bold text-foreground">Phone</p>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-center gap-4 hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center">
                <Mail className="w-7 h-7 text-gold" />
              </div>
              <div>
                <p className="font-serif font-bold text-foreground">Email</p>
                <p className="text-muted-foreground">hello@glamourstudio.com</p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-background"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </a>

            {/* Map Placeholder */}
            <div className="glass-card rounded-2xl overflow-hidden h-48">
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">
                    Add Google Map Embed Here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
