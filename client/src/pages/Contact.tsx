import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, MessageCircle, Clock, Globe, Flag, BadgeCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { openWhatsApp, whatsappConfig, emailJsConfig, defaultContactEmail } from "@/lib/emailjs";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const elements = Array.from(contentRef.current.children);
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'MEDFINTECH Conference Team',
          to_email: defaultContactEmail,
        },
        emailJsConfig.publicKey
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 md:pt-28 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div ref={contentRef}>
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Our dedicated team is here to help you 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            <div className="lg:col-span-3">
              <Card className="hover-elevate transition-all border-2">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Send className="text-primary" size={24} />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold">Send us a message</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium mb-2 block">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 text-base"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium mb-2 block">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 text-base"
                        data-testid="input-contact-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-base font-medium mb-2 block">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="text-base resize-none"
                        data-testid="textarea-contact-message"
                      />
                    </div>
                    <div className="space-y-3">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-12 text-base font-semibold" 
                        data-testid="button-send-message"
                        disabled={isSubmitting}
                      >
                        <Send className="mr-2" size={18} />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <Button 
                        type="button" 
                        size="lg" 
                        variant="outline"
                        className="w-full h-12 text-base font-semibold" 
                        onClick={() => openWhatsApp(`Hello, I'm ${formData.name}. ${formData.message}`)}
                      >
                        <MessageCircle className="mr-2" size={18} />
                        Contact via WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="hover-elevate transition-all border-2 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Phone className="text-primary" size={24} />
                    <h3 className="font-serif text-xl font-bold">Contact Information</h3>
                  </div>
                  <div className="space-y-5">
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="text-green-600" size={22} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">WhatsApp</p>
                        <button 
                          onClick={() => openWhatsApp('Hello, I would like to inquire about your services.')}
                          className="font-semibold text-base hover:text-primary transition-colors text-left block"
                        >
                          {whatsappConfig.phoneNumber}
                        </button>
                        <p className="text-xs text-muted-foreground mt-1">Click to chat • Available 24/7</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-blue-600" size={22} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">Email</p>
                        <a 
                          href={`mailto:${defaultContactEmail}`}
                          className="font-semibold text-base hover:text-primary transition-colors block"
                        >
                          {defaultContactEmail}
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">General Inquiries</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="text-purple-600" size={22} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">Availability</p>
                        <p className="font-semibold text-base">24/7 Support</p>
                        <p className="text-xs text-muted-foreground mt-1">Always here to help</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all border-2">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-6">Available Locations</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-semibold text-sm">MM2, Ikeja Airport, Lagos State, Nigeria 🇳🇬 (HQ)</p>
                        <p className="text-xs text-muted-foreground">Inside Murtala Muhammed Airport Terminal 2</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-semibold text-sm">Abuja & Port Harcourt Satellite Teams</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-semibold text-sm">London, UK</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-semibold text-sm">USA</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-semibold text-sm">Accra, Ghana</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-semibold text-sm">Kenya</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all border-2 border-primary/30 bg-gradient-to-r from-black via-black to-[#111] text-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="text-primary" size={22} />
                    <div>
                      <h3 className="font-serif text-xl font-bold">Passport Express Desk</h3>
                      <p className="text-xs text-white/70 uppercase tracking-[0.3em]">3-hour delivery</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80">
                    Get your Nigeria international passport within 3 hours after capturing at the immigration office.
                    We pre-vet documents, schedule priority sessions, and escort you door-to-door.
                  </p>
                  <div className="flex flex-col gap-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <Flag size={16} />
                      <span>Dedicated liaison officers in Lagos & Abuja immigration offices.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>Same-day processing with personalized updates.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
