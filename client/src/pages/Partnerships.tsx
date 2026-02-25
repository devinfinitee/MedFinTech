import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Handshake, Users, Target, Building, CheckCircle, Mail, Phone } from "lucide-react";
import accessLogo from "../assets/access.PNG";
import ubaLogo from "../assets/uba.PNG";
import polarisLogo from "../assets/polaris.PNG";
import assemblyLogo from "../assets/the  assembloy.PNG";
import fcmbLogo from "../assets/fcmb.PNG";
import firstbankLogo from "../assets/firstbank.PNG";
import zenithLogo from "../assets/zenith.PNG";
import lumineventLogo from "../assets/luminevent.PNG";
import tixafricaLogo from "../assets/tixafrica.PNG";
import tajahqLogo from "../assets/tajahq.PNG";
import heirsLogo from "../assets/heirs insurance.PNG";
import palmpayLogo from "../assets/palmpay.PNG";

export default function Partnerships() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: "Access Bank",      tier: "Platinum", logo: accessLogo,    description: "Leading financial institution supporting healthcare innovation" },
    { name: "UBA",              tier: "Platinum", logo: ubaLogo,        description: "United Bank for Africa — Pan-African financial services" },
    { name: "First Bank",       tier: "Platinum", logo: firstbankLogo,  description: "Nigeria's premier banking institution" },
    { name: "Zenith Bank",      tier: "Platinum", logo: zenithLogo,     description: "Leading financial services provider in Nigeria" },
    { name: "PalmPay",          tier: "Platinum", logo: palmpayLogo,    description: "Official payment partner — digital payment solutions" },
    { name: "The Assembly",     tier: "Platinum", logo: assemblyLogo,   description: "Official conference venue and event management partner" },
    { name: "Polaris Bank",     tier: "Gold",     logo: polarisLogo,    description: "Digital banking solutions for healthcare providers" },
    { name: "FCMB",             tier: "Gold",     logo: fcmbLogo,       description: "First City Monument Bank — banking excellence" },
    { name: "Heirs Insurance",  tier: "Gold",     logo: heirsLogo,      description: "Comprehensive insurance solutions for healthcare" },
    { name: "MedxLearn",        tier: "Gold",     logo: "M",            description: "Healthcare education and training platform" },
    { name: "Luminevent",       tier: "Silver",   logo: lumineventLogo, description: "Professional event management and production" },
    { name: "Tix Africa",       tier: "Silver",   logo: tixafricaLogo,  description: "Ticketing solutions for events across Africa" },
    { name: "TajaHq",           tier: "Silver",   logo: tajahqLogo,     description: "Digital marketing and brand management" },
    { name: "Kinora",           tier: "Silver",   logo: "K",            description: "Technology and innovation partner" },
    { name: "Wawewo",           tier: "Silver",   logo: "W",            description: "Digital solutions and creative services" },
  ];

  const tierBadge: Record<string, string> = {
    Platinum: "bg-purple-600",
    Gold:     "bg-yellow-500",
    Silver:   "bg-slate-400",
  };

  const whyPartner = [
    { icon: Users,    title: "500+ Healthcare Professionals",  desc: "Connect with medical practitioners, fintech experts, and healthcare innovators from across Africa." },
    { icon: Target,   title: "Healthcare Innovation Focus",    desc: "Position your brand at the forefront of Africa's telemedicine revolution." },
    { icon: Building, title: "Multi-Channel Brand Exposure",   desc: "Logo placement, social media, digital materials, and live conference presence." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-28">

      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 scale-in">
            <Handshake className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 scroll-animate stagger-1">Partnerships</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed scroll-animate stagger-2">
            Meet the institutions and innovators who have partnered with MEDFINTECH CONFERENCE 2026 to drive Africa's healthcare transformation forward.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        {/* Why Partner */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyPartner.map((item, i) => (
              <div key={i} className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 scroll-animate stagger-${i + 1}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Our Valued Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {partners.map((partner, idx) => (
              <div
                key={partner.name}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col items-center text-center scroll-animate stagger-${Math.min((idx % 5) + 1, 6)}`}
              >
                {/* Logo */}
                <div className="w-16 h-16 flex items-center justify-center mb-3 flex-shrink-0">
                  {typeof partner.logo === "string" && partner.logo.length === 1 ? (
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                      {partner.logo}
                    </div>
                  ) : (
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                  )}
                </div>
                <p className="font-semibold text-slate-900 text-sm mb-1">{partner.name}</p>
                <span className={`text-white text-xs font-bold px-2 py-0.5 rounded-full ${tierBadge[partner.tier]} mb-2`}>
                  {partner.tier}
                </span>
                <p className="text-xs text-slate-500 leading-snug">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center scale-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Become a Partner</h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Interested in partnering with us? Reach out to discuss a customised package that aligns with your brand goals and conference objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:partnerships@medfintech2026.com">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold w-full sm:w-auto">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </a>
              <a href="tel:+2349066100303">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
