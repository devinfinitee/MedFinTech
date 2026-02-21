import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Plane, Ticket, Stamp, FileCheck, Handshake, Navigation, Globe, BadgeCheck } from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const coreServices = [
    {
      icon: Ticket,
      title: "Air Ticketing",
      accent: "Commercial & executive routes",
      description:
        "Local and international ticketing with real-time route intelligence and fare optimization.",
    },
    {
      icon: Plane,
      title: "Private Jet & Helicopter Charter",
      accent: "On-demand lift",
      description:
        "Access premium aircraft, vetted crews, and bespoke itineraries tailored to your timeline.",
    },
    {
      icon: Stamp,
      title: "Immigration & Visa Services",
      accent: "Global mobility desk",
      description:
        "Expedited visa advisory, compliance support, and liaison with embassies worldwide.",
    },
    {
      icon: FileCheck,
      title: "Passport Express (3hrs)",
      accent: "Nigeria International Passport",
      description:
        "Priority passport renewals and new applications with 3-hour delivery after capturing.",
    },
    {
      icon: Handshake,
      title: "Airplane Sales & Deals",
      accent: "OEM & broker network",
      description:
        "Advisory on acquisitions, pre-purchase inspections, and aircraft asset disposition.",
    },
    {
      icon: Navigation,
      title: "Helicopter & Rotorcraft Ops",
      accent: "West Africa coverage",
      description:
        "VIP transfers between Lagos, Abuja, Port Harcourt, Accra, offshore rigs, and estates.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 space-y-20">
        <section className="scroll-animate">
          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-primary mb-3">
              Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Integrated air travel & mobility services.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              From private jets and helicopter shuttles to visa support and Passport Express, AirCambridge runs
              your entire journey from MM2, Ikeja Airport Lagos.
            </p>
          </div>
        </section>

        <section className="space-y-8 scroll-animate">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreServices.map((service) => (
              <Card key={service.title} className="hover:-translate-y-1 transition-transform duration-200">
                <CardContent className="p-6 space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-primary mb-2">
                    <service.icon size={22} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{service.accent}</p>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-10 items-stretch scroll-animate">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                <BadgeCheck size={16} />
                Passport Express
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Nigeria international passport within 3 hours of capturing.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We coordinate appointment scheduling, escort you to the immigration office, and handle premium
                processing so your passport is ready the same day.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>3-hour delivery after biometrics capture at the immigration office.</li>
                <li>Dedicated liaison officers and document review before your appointment.</li>
                <li>Visa advisory and travel readiness checklist included.</li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-black/90"
                  onClick={() => setLocation("/passport-booking")}
                >
                  Order Passport Express
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => setLocation("/contact")}
                >
                  <MessageCircle size={18} />
                  Talk to Concierge
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 md:p-10 space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold flex items-center gap-2">
                <Globe size={24} />
                Global mobility desk.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our immigration and visa team supports business, tourism, medical, and study trips with compliant
                documentation and embassy liaison.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Visa advisory for UK, USA, Schengen, Middle East, and more.</li>
                <li>Document pre-vetting before embassy appointments.</li>
                <li>Route planning, ticketing, and hotel coordination in one request.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="scroll-animate">
          <Card className="bg-gradient-to-br from-black via-black to-[#111] text-white border-primary/30">
            <CardContent className="p-8 md:p-10 lg:p-12 grid lg:grid-cols-[1.1fr,1fr] gap-8 items-center">
              <div className="space-y-4">
                <p className="uppercase tracking-[0.3em] text-xs text-primary mb-2">Next step</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                  Ready to engage AirCambridge for your next mission?
                </h2>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  Share your route, dates, or passport needs and our operations desk will respond instantly via
                  WhatsApp or email with a clear action plan.
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full md:w-auto gap-2"
                  onClick={() => setLocation("/booking")}
                >
                  Book Jet / Passport Express
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full md:w-auto gap-2 border-white/40 text-white hover:bg-white/10"
                  onClick={() => setLocation("/contact")}
                >
                  <MessageCircle size={18} />
                  Contact Operations Desk
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
