import { useEffect, useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import QuickBookingWidget from "@/components/QuickBookingWidget";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Clock,
  Shield,
  Sparkles,
  MessageCircle,
  Mail,
  Plane,
  Ticket,
  Stamp,
  FileCheck,
  Handshake,
  MapPin,
  PlaneTakeoff,
  PlaneLanding,
  Navigation,
  BadgeCheck,
  Timer,
} from "lucide-react";
import { openWhatsApp } from "@/lib/emailjs";
import { useLocation } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const services = [
    {
      icon: Ticket,
      title: "Air Ticketing",
      description: "Local and international ticketing with real-time route intelligence and fare optimization.",
      accent: "Commercial & executive routes",
    },
    {
      icon: Plane,
      title: "Private Jet & Helicopter Charter",
      description: "Access premium aircraft, vetted crews, and bespoke itineraries tailored to your timeline.",
      accent: "On-demand lift",
    },
    {
      icon: Stamp,
      title: "Immigration & Visa Services",
      description: "Expedited visa advisory, compliance support, and liaison with embassies worldwide.",
      accent: "Global mobility desk",
    },
    {
      icon: FileCheck,
      title: "Passport Processing",
      description: "Priority passport renewals and documentation management for individuals and teams.",
      accent: "Priority handling",
    },
    {
      icon: Handshake,
      title: "Airplane Sales & Deals",
      description: "Advisory on acquisitions, pre-purchase inspections, and asset disposition.",
      accent: "OEM & broker network",
    },
  ];

  const missionHighlights = [
    {
      icon: MapPin,
      title: "HQ: MM2, Ikeja Airport, Lagos 🇳🇬",
      description: "On-ground concierge and operations desk inside Murtala Muhammed Airport Terminal 2.",
    },
    {
      icon: PlaneTakeoff,
      title: "Domestic Flight Booking",
      description: "Instant seat confirmation across Nigeria’s commercial routes and executive shuttles.",
    },
    {
      icon: PlaneLanding,
      title: "International Flight Booking",
      description: "Premium cabins on global airlines with visa-ready itineraries and route intelligence.",
    },
    {
      icon: Navigation,
      title: "Helicopter & Rotorcraft Services",
      description: "VIP transfers between Lagos, Abuja, Port Harcourt, Accra, and offshore locations.",
    },
  ];

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      if (!section) return;
      const heading = section.querySelector("h2");
      if (!heading) return;

        gsap.fromTo(
        heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
    });
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSlider />

      <div className="px-4 md:px-6 lg:px-8 pb-16 md:pb-24 pt-20 sm:pt-22 md:pt-26 lg:pt-28">
        <QuickBookingWidget />

        <section ref={(el) => (sectionRefs.current[0] = el)} className="max-w-7xl mx-auto mt-20 md:mt-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 opacity-0">
            Why Fly AirCambridge
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the pinnacle of private aviation with uncompromising service and global reach
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard
              icon={Globe}
              title="Global Coverage"
              description="Access to over 5,000 destinations worldwide with seamless coordination"
            />
            <FeatureCard
              icon={Clock}
              title="24/7 Concierge"
              description="Round-the-clock support ensuring every aspect of your journey is perfect"
            />
            <FeatureCard
              icon={Shield}
              title="Safety First"
              description="Rigorous safety standards and experienced crew for peace of mind"
            />
            <FeatureCard
              icon={Sparkles}
              title="Luxury Comfort"
              description="Premium amenities and personalized service tailored to your needs"
            />
          </div>
        </section>

        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="max-w-7xl mx-auto mt-20 md:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {missionHighlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 shadow-lg hover:-translate-y-1 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-primary mb-4">
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground dark:text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="max-w-7xl mx-auto mt-20 md:mt-24 bg-foreground text-white rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1.1fr,1fr] gap-0">
            <div className="p-10 md:p-14 bg-gradient-to-br from-black to-black/90">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Integrated Services
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Our trusted partner for seamless air travel and global mobility.
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                We blend aviation expertise with concierge precision so your missions remain effortless.
                Fast service, premium experience, and trusted support — all in one place.
              </p>
              <ul className="space-y-4 text-sm md:text-base text-white/80 mb-10">
                {[
                  "White-glove support before, during, and after every trip",
                  "Dedicated operations desk spanning Africa, Europe, Middle East, and North America",
                  "Compliance-ready documentation and government liaison partners",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {["Air Ticketing", "Private Jet & Helicopter Charter", "Immigration & Visa", "Passport Processing", "Airplane Sales & Deals"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-white/20 text-sm font-semibold uppercase tracking-wider"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="p-8 md:p-10 bg-white text-foreground">
              <div className="grid sm:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="p-6 border border-black/10 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-primary mb-4">
                      <service.icon size={20} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                      {service.accent}
                    </p>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          className="max-w-7xl mx-auto mt-20 md:mt-24 grid lg:grid-cols-2 gap-10"
        >
          <div className="bg-black text-white rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-70" />
            <div className="relative">
              <p className="uppercase tracking-[0.3em] text-sm text-primary mb-4">Helicopter Ops</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Lagos & West African helicopter services
              </h2>
              <p className="text-white/80 mb-6">
                Beat road traffic and connect offshore rigs, estates, and business hubs with our vetted rotorcraft
                partners. Depart from MM2, private helipads, or request a remote landing site survey.
              </p>
              <ul className="space-y-4 text-white/80">
                {[
                  "Rapid point-to-point shuttle between Lagos Island, Abuja, PHC, and Accra",
                  "Offshore energy support with hoist-capable aircraft and safety crews",
                  "Executive sightseeing and aerial filming with dedicated flight planners",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Rotorcraft Fleet Access", description: "VIP S-76, Bell 429, and Augusta charters on standby." },
              { title: "Helipad Coordination", description: "Permits, ground handling, fueling, and security escorts." },
              { title: "Flight Following", description: "Live monitoring and ops desk updates to your concierge." },
              { title: "Multi-leg Missions", description: "Combine jet arrivals with helicopter onward travel." },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-card hover:-translate-y-1 transition-all"
              >
                <h3 className="font-semibold mb-2 text-lg">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          ref={(el) => (sectionRefs.current[4] = el)}
          className="max-w-6xl mx-auto mt-20 md:mt-24"
        >
          <div className="bg-gradient-to-r from-primary to-[#ff9c4d] text-black rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="space-y-4 flex-1">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/10 rounded-full text-xs font-semibold uppercase tracking-[0.3em]">
                  <BadgeCheck size={16} />
                  Passport Express
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">
                  Get your Nigeria international passport within 3 hours of capturing.
                </h2>
                <p className="text-base md:text-lg text-black/70">
                  We coordinate appointment scheduling, escort you to the immigration office, and handle premium
                  processing so your passport is ready the same day.
                </p>
                <ul className="text-black/70 space-y-3 text-sm">
                  <li className="flex gap-2 items-start">
                    <Timer className="mt-0.5" size={16} />
                    <span>3-hour delivery after biometrics capture at the immigration office.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <BadgeCheck className="mt-0.5" size={16} />
                    <span>Dedicated liaison officers and document review before your appointment.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Globe className="mt-0.5" size={16} />
                    <span>Visa advisory and travel readiness checklist included.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-black text-white hover:bg-black/90" onClick={() => setLocation("/passport-booking")}>
                    Request Express Passport
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-black/10"
                    onClick={() => setLocation("/contact")}
                  >
                    Talk to Concierge
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[5] = el)} className="max-w-4xl mx-auto mt-20 md:mt-24">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Ready to Book Your Flight?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us directly via WhatsApp or email for personalized service and instant booking assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={() => openWhatsApp('Hello, I would like to book a private jet flight.')}
                >
                  <MessageCircle size={20} />
                  Contact via WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => setLocation('/contact')}
                >
                  <Mail size={20} />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
