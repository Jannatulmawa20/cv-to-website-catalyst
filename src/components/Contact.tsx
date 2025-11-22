import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mawamukta1234@gmail.com",
      href: "mailto:mawamukta1234@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01826-708635",
      href: "tel:01826708635"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mohakhali, TB Gate, Dhaka"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Jannatulmawa20"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover-lift bg-card border-border shadow-card group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shadow-accent group-hover:scale-110 transition-smooth">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium text-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 hover:gradient-primary flex items-center justify-center group transition-smooth hover:scale-110 shadow-card"
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border shadow-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input 
                  id="name"
                  placeholder="Your name"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full gradient-accent shadow-accent hover:shadow-accent hover:scale-105 transition-smooth"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
