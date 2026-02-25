import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import img1 from "@/assets/img-1.jpg";
import img2 from "@/assets/img-2.jpg";
import img3 from "@/assets/img-3.jpg";
import amosImage from "@/assets/amos-franklin.jpg";
import zainabImage from "@/assets/zainab-abdulsalam.JPG";
import amooImage from "@/assets/amoo-yetunde.jpg";
import boluwatifeImage from "@/assets/boluwatife-agboola.JPG";
import ayodejiImage from "@/assets/ayodeji-adelabu.jpg";
import obaGhandiImage from "@/assets/oba-ghandi.JPG";
import adeyeyeImage from "@/assets/adeyeye-enitan.JPG";
import sundayOladapoImage from "@/assets/sunday-oladapo.JPG";
import olusholaImage from "@/assets/Olushola Adeoye.jpg";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  Stethoscope,
  Smartphone,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Heart,
  Rocket,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up, .scroll-animate, .slide-left, .slide-right, .scale-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Stethoscope,
      title: "Healthcare Innovation",
      description: "Discover the latest advances in telemedicine and digital health solutions transforming African healthcare.",
    },
    {
      icon: Smartphone,
      title: "Fintech Integration",
      description: "Explore how financial technology is making healthcare more accessible and affordable across Africa.",
    },
    {
      icon: TrendingUp,
      title: "Platform Launch",
      description: "Witness the official launch of Africa's largest telemedicine platform at this historic event.",
    },
    {
      icon: Users,
      title: "Expert Networking",
      description: "Connect with healthcare professionals, fintech innovators, and industry leaders shaping the future.",
    },
  ];

  const speakers = [
    { name: "Amos Franklin Momodu", title: "CEO, HealthTok", image: amosImage },
    { name: "Dr. Zainab Abdulsalam", title: "Medical Doctor & Digital Health Strategist", image: zainabImage },
    { name: "Boluwatife Agboola", title: "CEO, Torchlife Africa", image: boluwatifeImage },
    { name: "Amoo Yetunde Ololade", title: "Global Health Nurse", image: amooImage },
    { name: "Adelabu Ayodeji Adetunji", title: "SME Growth Lead, Flutterwave", image: ayodejiImage },
    { name: "Olushola Adeoye", title: "Founder & CEO, Callmate AI", image: olusholaImage },
  ];

  const royalFathers = [
    {
      title: "His Imperial Majesty",
      name: "Oba Adeyeye Enitan Babatunde Ogunwusi",
      regnal: "Ojaja II",
      role: "The Ooni of Ife",
      image: adeyeyeImage,
    },
    {
      title: "His Imperial Majesty",
      name: "Oba Ghandi Afolabi Oladunni Olaoye",
      regnal: "Orumogege III",
      role: "The Soun of Ogbomoso",
      image: obaGhandiImage,
    },
    {
      title: "His Royal Majesty",
      name: "Oba Sunday Oladapo Oyediran",
      regnal: "Lagbami Osekun III",
      role: "Traditional Ruler, Ogbomoso",
      image: sundayOladapoImage,
    },
  ];

  const expectations = [
    { icon: Globe, title: "Platform Launch", desc: "Official launch of Africa's largest telemedicine platform" },
    { icon: Heart, title: "HealthTech Insights", desc: "Latest trends in digital health and AI applications" },
    { icon: Zap, title: "Startup Growth", desc: "Investment strategies and scaling healthcare startups" },
    { icon: Users, title: "Networking", desc: "Connect with healthcare professionals and fintech leaders" },
    { icon: Shield, title: "Policy Insights", desc: "Healthcare policy transformation and regulatory updates" },
    { icon: Award, title: "Certificate", desc: "Certificate of participation for all registered attendees" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img src={img1} alt="MEDFINTECH Conference" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/90" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-48 md:w-64 h-48 md:h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-56 md:w-80 h-56 md:h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Live event pill */}
            <div className="fade-up flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-foreground text-xs sm:text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                Saturday, 7th March 2026 · Ogbomoso, Nigeria
              </span>
            </div>

            <h1 className="fade-up text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              MedFinTech
              <br />
              <span className="text-primary">Conference 2026</span>
            </h1>
            <p className="fade-up text-lg sm:text-xl md:text-2xl mb-3 text-slate-200 font-medium">
              Official Launch of Africa's Largest Telemedicine Platform
            </p>
            <p className="fade-up text-sm sm:text-base md:text-lg mb-8 text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Reimagining Healthcare Access Through Financial Innovation
            </p>

            {/* CTA buttons */}
            <div className="fade-up flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto" asChild>
                <Link href="/registration">
                  Register Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-sm sm:text-base px-6 sm:px-8 py-3 border-white/40 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 w-full sm:w-auto" asChild>
                <Link href="/event-details">View Schedule</Link>
              </Button>
            </div>

            {/* Event info pills */}
            <div className="fade-up flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { icon: Calendar, label: "March 7, 2026" },
                { icon: Clock,    label: "9:00 AM – 4:00 PM" },
                { icon: MapPin,   label: "The Assembly, Ogbomoso" },
                { icon: Users,    label: "500+ Attendees" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 bg-white/8 border border-white/15 rounded-full px-3 sm:px-5 py-2 text-xs sm:text-sm text-slate-200 backdrop-blur-sm hover:bg-white/12 transition-colors">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Features Section */}
      <section className="py-14 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="scroll-animate text-center mb-10 md:mb-16">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">About the Conference</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why MEDFINTECH 2026?</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A landmark gathering designed to redefine healthcare delivery through technology,
              financial inclusion, and strategic collaboration across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`scroll-animate stagger-${index + 1} bg-white rounded-2xl p-5 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 md:mb-5">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Photo Strip */}
      <div className="relative h-44 sm:h-56 md:h-72 overflow-hidden">
        <img src={img2} alt="MEDFINTECH Conference" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-slate-900/65 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold mb-2">MEDFINTECH 2026</p>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold drop-shadow-lg">Africa's Healthcare Revolution Starts Here</h3>
          </div>
        </div>
      </div>

      {/* MedxVerse App Launch Highlight */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="scale-in bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl md:rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Content */}
              <div className="p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="flex mb-6">
                  <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full">
                    <Rocket className="w-4 h-4 text-primary" />
                    HISTORIC LAUNCH EVENT
                  </span>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                    MedxVerse App
                    <br />
                    <span className="text-primary">Official Launch</span>
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Witness history as we unveil Africa's largest telemedicine platform — designed to
                    transform healthcare access across Nigeria and Africa. Connect with licensed doctors,
                    get AI-powered health guidance, and pay seamlessly with integrated fintech tools.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Smartphone, title: "24/7 Teleconsultation", desc: "Connect with licensed medical professionals anytime, anywhere" },
                    { icon: Zap,        title: "Lexi AI Assistant",     desc: "Instant symptom checking and personalised health guidance" },
                    { icon: Shield,     title: "Integrated Payments",   desc: "Seamless insurance and digital payment integration" },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3 bg-white/8 border border-white/10 rounded-xl p-3 sm:p-4 hover:bg-white/12 transition-all duration-300">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5">{title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-sm px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto" asChild>
                    <Link href="/medxverse-launch">
                      <Rocket className="w-4 h-4 mr-2" />
                      Experience the Launch
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900 text-sm px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto" asChild>
                    <Link href="/registration">Register to Attend</Link>
                  </Button>
                </div>

                <p className="text-slate-500 text-xs mt-4">
                  🎯 Live demonstration at the conference · March 7, 2026
                </p>
              </div>

              {/* Right: Conference image — desktop only */}
              <div className="relative hidden lg:block min-h-[480px]">
                <img
                  src={img3}
                  alt="Conference atmosphere"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-slate-900/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-14 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="scroll-animate text-center mb-10 md:mb-16">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">Meet the Speakers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">Featured Speakers</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Learn from leading voices in healthcare, fintech, AI, and entrepreneurship
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 mb-8 md:mb-10">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className={`scroll-animate stagger-${Math.min(index + 1, 5)} bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 text-center`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <p className="font-bold text-slate-900 text-xs sm:text-sm leading-tight mb-1">{speaker.name}</p>
                  <p className="text-primary text-[10px] sm:text-xs font-medium leading-tight">{speaker.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm" asChild>
              <Link href="/special-guests">
                View All Speakers <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="scroll-animate text-center mb-10 md:mb-16">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">Program Highlights</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">What to Expect</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              A full day of insights, networking, and game-changing announcements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {expectations.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className={`scroll-animate stagger-${Math.min(index + 1, 6)} flex gap-4 bg-slate-50 rounded-2xl p-5 md:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">{title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Fathers Section */}
      <section className="py-14 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="scroll-animate text-center mb-10 md:mb-16">
            <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">Royal Endorsement</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">Distinguished Royal Fathers</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are honored to host distinguished traditional leaders whose presence signifies
              the importance of innovation and development in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
            {royalFathers.map((royal, index) => (
              <div
                key={index}
                className={`scroll-animate stagger-${index + 1} bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={royal.image}
                    alt={royal.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <span className="inline-block bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    {royal.title}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-0.5">{royal.name}</h3>
                  <p className="text-amber-600 font-bold text-xs sm:text-sm mb-0.5">{royal.regnal}</p>
                  <p className="text-slate-500 text-[10px] sm:text-xs">{royal.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="scale-in bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-56 md:w-72 h-56 md:h-72 bg-primary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 md:w-72 h-56 md:h-72 bg-primary/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="flex justify-center mb-5">
                <CheckCircle className="w-10 h-10 md:w-14 md:h-14 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Join Us?</h2>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                Be part of this historic event and help shape the future of healthcare in Africa.
                Seats are limited — secure your spot today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-sm px-6 sm:px-8 py-3 font-semibold hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto" asChild>
                  <Link href="/registration">
                    Register Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900 text-sm px-6 sm:px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto" asChild>
                  <Link href="/ticketing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}