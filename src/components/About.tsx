import { Award, Scissors, Sparkles, Star } from "lucide-react";
import aboutImage from "@/assets/about-portrait.jpg";
import certificateImage from "@/assets/certificate.jpg";

const About = () => {
  const skills = [
    "Hair Cutting & Styling",
    "Hair Chemical Treatments",
    "Bridal & Party Makeup",
    "Hair Coloring & Highlights",
    "Facial & Skincare",
    "Beauty Consultation",
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gold/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-rose/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-gold">
              <img
                src={aboutImage}
                alt="Sneha Lahoti - Professional Beautician"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 glass-card rounded-2xl p-6 glow-gold">
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-gradient-gold">5+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/20 rounded-2xl" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm text-muted-foreground">About Me</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-foreground">Hello, I'm </span>
              <span className="text-gradient-gold">Sneha Lahoti</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a Certified Professional Salon Beautician with specialized training in 
              Hair Cut and Hair Chemical treatments from Saveera's Academy, Indore. With over 5 years of experience in 
              the beauty industry, I have dedicated my career to helping clients look and 
              feel their absolute best.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              My passion lies in creating personalized beauty experiences that enhance 
              natural features and boost confidence. Whether you're preparing for a special 
              occasion or simply want a refresh, I'm here to make your vision a reality.
            </p>

            {/* Certifications */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 glass-card rounded-xl p-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Professional Salon Beautician Course</p>
                  <p className="text-sm text-muted-foreground">Saveera's Academy, Indore - Internationally Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-4 glass-card rounded-xl p-4">
                <div className="w-12 h-12 rounded-full bg-rose/20 flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-rose" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Hair Cut & Hair Chemical Course</p>
                  <p className="text-sm text-muted-foreground">Advanced Hair Specialist - MSME Certified</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground border border-border hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-sm text-muted-foreground">My Certification</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold">
              <span className="text-foreground">Professionally </span>
              <span className="text-gradient-gold">Certified</span>
            </h3>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold via-rose to-gold rounded-2xl opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img
                  src={certificateImage}
                  alt="Professional Certification - Sneha Lahoti"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
