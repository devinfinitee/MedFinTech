import { useEffect, useRef } from "react";
import { Heart, Users, Lightbulb, Trophy, Calendar, MapPin, Award, Building2, Stethoscope, Brain, TrendingUp, Handshake } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) {
      const elements = Array.from(headerRef.current.children);
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <section ref={headerRef} className="mb-20 md:mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              MEDFINTECH CONFERENCE 2026
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-8">
              Where Medicine Meets Finance & Technology
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A groundbreaking healthcare innovation summit organized by MedxVerse Telemedicine & Virtual Care Ltd. 
              Bringing together medical professionals, technology innovators, financial experts, students, entrepreneurs, 
              policymakers, and investors to explore how digital innovation and financial systems can transform 
              healthcare delivery in Nigeria and across Africa.
            </p>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[0] = el)} className="mb-20 md:mb-24">
          <div className="bg-card rounded-lg p-8 md:p-12 hover-elevate transition-all">
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary">Theme</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-semibold">
                "Revolutionizing Healthcare Through Financial Innovation and Digital Technology"
              </p>
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[1] = el)} className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Why You Should Attend</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center hover-elevate p-6 rounded-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4 transition-transform duration-300 hover:scale-110">
                <Brain className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Future Insights</h3>
              <p className="text-muted-foreground text-sm">Gain insight into the future of digital healthcare and health financing</p>
            </div>
            <div className="text-center hover-elevate p-6 rounded-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4 transition-transform duration-300 hover:scale-110">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Network</h3>
              <p className="text-muted-foreground text-sm">Network with medical leaders, fintech experts, and tech innovators</p>
            </div>
            <div className="text-center hover-elevate p-6 rounded-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4 transition-transform duration-300 hover:scale-110">
                <TrendingUp className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Opportunities</h3>
              <p className="text-muted-foreground text-sm">Discover investment and partnership opportunities in health-tech</p>
            </div>
            <div className="text-center hover-elevate p-6 rounded-lg transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground mb-4 transition-transform duration-300 hover:scale-110">
                <Award className="text-primary" size={40} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Certification</h3>
              <p className="text-muted-foreground text-sm">Receive a Certificate of Participation</p>
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[2] = el)} className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Who Should Attend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card rounded-lg p-6 hover-elevate transition-all">
              <Stethoscope className="text-primary mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-3">Healthcare Professionals</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Medical and health science students</li>
                <li>• Healthcare professionals</li>
                <li>• Hospital administrators</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 hover-elevate transition-all">
              <TrendingUp className="text-primary mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-3">Business & Finance</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Business, finance, and economics students</li>
                <li>• Startup founders and entrepreneurs</li>
                <li>• Investors and venture capitalists</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 hover-elevate transition-all">
              <Brain className="text-primary mb-4" size={32} />
              <h3 className="font-semibold text-lg mb-3">Technology</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Tech developers and software engineers</li>
                <li>• Policy makers</li>
                <li>• NGOs and development partners</li>
              </ul>
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[3] = el)} className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Key Speaker Sessions</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 hover-elevate transition-all">
              <h3 className="font-semibold text-xl mb-3 text-primary">The Future of Telemedicine in Africa</h3>
              <p className="text-muted-foreground">Exploring scalable digital consultation systems, AI triage, and virtual healthcare infrastructure.</p>
            </div>
            <div className="bg-card rounded-lg p-6 hover-elevate transition-all">
              <h3 className="font-semibold text-xl mb-3 text-primary">Financing Healthcare Innovation</h3>
              <p className="text-muted-foreground">Understanding venture capital, startup funding, grants, and sustainable health business models.</p>
            </div>
            <div className="bg-card rounded-lg p-6 hover-elevate transition-all">
              <h3 className="font-semibold text-xl mb-3 text-primary">AI and Automation in Clinical Practice</h3>
              <p className="text-muted-foreground">How artificial intelligence is improving diagnostics, patient monitoring, and healthcare data management.</p>
            </div>
            <div className="bg-card rounded-lg p-6 hover-elevate transition-all">
              <h3 className="font-semibold text-xl mb-3 text-primary">Health Insurance, Payment Systems & Financial Inclusion</h3>
              <p className="text-muted-foreground">Innovative fintech models improving access to affordable healthcare.</p>
            </div>
            <div className="bg-card rounded-lg p-6 hover-elevate transition-all">
              <h3 className="font-semibold text-xl mb-3 text-primary">Building a Health-Tech Startup from Scratch</h3>
              <p className="text-muted-foreground">Lessons, challenges, funding realities, and growth strategies.</p>
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[4] = el)} className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Conference Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center hover-elevate p-6 rounded-lg transition-all bg-card">
              <Users className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2">Panel Discussions</h3>
            </div>
            <div className="text-center hover-elevate p-6 rounded-lg transition-all bg-card">
              <Trophy className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2">Keynote Addresses</h3>
            </div>
            <div className="text-center hover-elevate p-6 rounded-lg transition-all bg-card">
              <Lightbulb className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2">Innovation Showcase</h3>
            </div>
            <div className="text-center hover-elevate p-6 rounded-lg transition-all bg-card">
              <Handshake className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-lg mb-2">Networking Sessions</h3>
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[5] = el)}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            The Bigger Vision
          </h2>
          <div className="bg-card rounded-lg p-8 md:p-12 hover-elevate transition-all">
            <div className="text-center">
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                MedFintech is more than a conference. It is a platform for collaboration. It is a catalyst for innovation. 
                It is a movement toward a smarter, financially inclusive healthcare system.
              </p>
              <p className="text-lg md:text-xl font-semibold text-primary mb-8">
                Join us as we redefine the intersection of medicine, finance, and technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <MapPin className="text-primary mx-auto mb-4" size={48} />
                  <h4 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">Ogbomoso</h4>
                  <p className="text-muted-foreground">Oyo State, Nigeria</p>
                </div>
                <div>
                  <Calendar className="text-primary mx-auto mb-4" size={48} />
                  <h4 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">March 7</h4>
                  <p className="text-muted-foreground">2026</p>
                </div>
                <div>
                  <Building2 className="text-primary mx-auto mb-4" size={48} />
                  <h4 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">MedxVerse</h4>
                  <p className="text-muted-foreground">Telemedicine & Virtual Care</p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground italic">
                  The future of healthcare is digital.<br />
                  The future of healthcare is sustainable.<br />
                  The future begins at MedFintech 2026.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
