import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Rocket, Smartphone, Heart, Brain, Calendar, Pill,
  TestTube, CreditCard, Shield, BookOpen, Users,
  Stethoscope, Building2, TrendingUp, Globe, CheckCircle,
  Play, Download, Star, Zap
} from "lucide-react";
import lexiLogo from "@/assets/Lexi Ai No bg.png";
import lexiConvo1 from "@/assets/lexi-ai-convo 1.PNG";
import lexiConvo2 from "@/assets/lexi-ai-convo 2.PNG";
import lexiConvo3 from "@/assets/lexi-ai-convo 3.PNG";
import lexiConvo4 from "@/assets/lexi-ai-convo 4.PNG";
import lexiConvo5 from "@/assets/lexi-ai-convo 5.PNG";
import lexiConvo6 from "@/assets/lexi-ai-convo 6.PNG";
import lexiConvo7 from "@/assets/lexi-ai-convo 7.PNG";
import lexiConvo8 from "@/assets/lexi-ai-convo 8.png";

export default function MedxVerseAppLaunch() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Stethoscope, title: "24/7 Teleconsultation",         description: "Connect with licensed medical professionals anytime" },
    { icon: Brain,       title: "AI-Powered Symptom Checker",    description: "Lexi Health Assistant for intelligent health guidance" },
    { icon: Calendar,    title: "Appointment Booking",           description: "Seamless scheduling and management system" },
    { icon: Pill,        title: "Digital Prescriptions",         description: "Electronic prescriptions and refill requests" },
    { icon: TestTube,    title: "Laboratory Test Booking",       description: "Easy lab test scheduling and result management" },
    { icon: CreditCard,  title: "Payment Integration",           description: "Insurance and digital payment solutions" },
    { icon: Shield,      title: "Secure Profile Management",     description: "Protected patient data and privacy" },
    { icon: BookOpen,    title: "Health Education",              description: "Preventive care resources and health literacy" },
  ];

  const targetAudience = [
    { icon: Stethoscope, title: "Healthcare Professionals",  desc: "Seeking digital expansion and telemedicine integration" },
    { icon: Building2,   title: "Hospitals & Clinics",       desc: "Interested in modern telemedicine integration systems" },
    { icon: TrendingUp,  title: "Investors",                 desc: "Exploring health-tech opportunities and partnerships" },
    { icon: CreditCard,  title: "Fintech Institutions",      desc: "Interested in health payment systems integration" },
    { icon: Users,       title: "Students & Innovators",     desc: "Passionate about digital healthcare transformation" },
    { icon: Globe,       title: "Policy Stakeholders",       desc: "Interested in scalable healthcare access solutions" },
  ];

  const launchExperiences = [
    "Witness a live demonstration of the MedxVerse platform",
    "Experience the AI chatbot (Lexi) in action",
    "Understand the backend integration system",
    "Learn about partnership and institutional onboarding opportunities",
    "Explore investor collaboration and growth strategies",
  ];

  const pillars = [
    { icon: Heart,      color: "bg-red-500/20",   iconColor: "text-red-400",   label: "Medicine",   title: "Medicine",    desc: "Delivering professional healthcare services with clinical excellence" },
    { icon: CreditCard, color: "bg-green-500/20", iconColor: "text-green-400", label: "Finance",    title: "Finance",     desc: "Ensuring sustainable and inclusive healthcare payment systems" },
    { icon: Smartphone, color: "bg-blue-500/20",  iconColor: "text-blue-400",  label: "Technology", title: "Technology",  desc: "Leveraging AI, automation, and digital infrastructure for efficiency" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-28">

      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Lexi AI brand logo */}
          <div className="flex justify-center mb-6 scale-in">
            <img
              src={lexiLogo}
              alt="Lexi AI"
              className="h-20 md:h-28 w-auto object-contain drop-shadow-[0_0_24px_rgba(56,180,73,0.5)]"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-white text-sm font-bold px-5 py-2 rounded-full mb-5 scale-in">
            <Rocket className="w-4 h-4 text-primary" />
            <span>🚀 LIVE LAUNCH — March 7, 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-green-400 to-primary bg-clip-text text-transparent scroll-animate stagger-1">
            MedxVerse App Launch
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 scroll-animate stagger-2">
            At MedFintech Conference 2026, we are proud to unveil Africa's largest telemedicine platform — the MedxVerse App — designed to transform healthcare access across Nigeria and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate stagger-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold px-8">
              <Play className="w-5 h-5 mr-2" />
              Watch Live Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent px-8">
              <Download className="w-5 h-5 mr-2" />
              Get Early Access
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 space-y-20">

        {/* Mission */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 scroll-animate">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">Why MedxVerse Was Created</h2>
            <p className="text-slate-500 text-center leading-relaxed mb-6">
              Across Africa, millions of people face barriers to healthcare access — long queues, geographical distance, financial limitations, and delayed consultations. For many families, accessing timely medical care remains a challenge.
            </p>
            <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                To remove the barriers between patients and quality healthcare through digital innovation and financial integration.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">What MedxVerse Offers</h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-10">
            An integrated telemedicine ecosystem connecting patients, doctors, laboratories, pharmacies, and financial systems within one secure digital platform.
          </p>

          {/* Lexi AI highlight card — full width above grid */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 mb-6 flex flex-col md:flex-row items-center gap-8 scroll-animate border border-primary/20">
            <div className="flex-shrink-0 flex justify-center">
              <img src={lexiLogo} alt="Lexi AI" className="h-28 md:h-36 w-auto object-contain drop-shadow-[0_0_20px_rgba(56,180,73,0.4)]" />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">AI-Powered Assistant</span>
              <h3 className="text-2xl font-extrabold text-white mb-3">Meet Lexi — Your AI Health Companion</h3>
              <p className="text-slate-300 leading-relaxed mb-5">
                Lexi is MedxVerse's built-in AI health assistant. She listens, understands, and responds to your health concerns in natural language — providing instant symptom checks, treatment guidance, appointment suggestions, and medication reminders 24/7.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {["Symptom Checker", "Drug Info", "Appointment Booking", "Health Tips", "Emergency Alerts"].map((tag) => (
                  <span key={tag} className="bg-primary/15 border border-primary/30 text-primary text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 text-center scroll-animate stagger-${Math.min((i % 4) + 1, 6)}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lexi AI Conversation Screenshots */}
        <div className="max-w-6xl mx-auto scroll-animate">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <img src={lexiLogo} alt="Lexi AI" className="h-14 w-auto object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Lexi in Action</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Real conversations with Lexi — see how she helps patients navigate their healthcare journey with intelligence and empathy.
            </p>
          </div>

          {/* Screenshot grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[lexiConvo1, lexiConvo2, lexiConvo3, lexiConvo4, lexiConvo5, lexiConvo6, lexiConvo7, lexiConvo8].map((src, i) => (
              <div
                key={i}
                className={`scroll-animate stagger-${Math.min(i + 1, 6)} bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
              >
                <div className="bg-slate-100 px-3 py-2 flex items-center gap-2 border-b border-slate-200">
                  <img src={lexiLogo} alt="Lexi" className="h-5 w-auto object-contain" />
                  <span className="text-xs font-semibold text-slate-600">Lexi AI · Chat {i + 1}</span>
                </div>
                <img
                  src={src}
                  alt={`Lexi AI conversation ${i + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-primary/5 border border-primary/20 rounded-2xl px-8 py-4">
              <p className="text-slate-600 text-sm font-medium">
                💬 These are real Lexi conversations — experience her live at the conference on <span className="text-primary font-bold">March 7, 2026</span>
              </p>
            </div>
          </div>
        </div>

        {/* The Three Pillars */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl font-bold text-center mb-3">The Significance of This Launch</h2>
            <p className="text-slate-300 text-center max-w-2xl mx-auto mb-10">
              Launching MedxVerse at MedFintech Conference 2026 symbolises the convergence of three critical pillars:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <div key={i} className="text-center">
                  <div className={`w-16 h-16 ${p.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <p.icon className={`w-8 h-8 ${p.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${p.iconColor}`}>{p.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Launch Experience */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">What Attendees Will Experience</h2>
          <p className="text-slate-500 text-center mb-10">During the official launch session, you'll witness the future of African healthcare unfold.</p>
          <div className="space-y-4">
            {launchExperiences.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
            <Zap className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h3 className="font-bold text-amber-800 mb-2">The Journey Behind MedxVerse</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              The launch presentation will highlight the challenges, the resilience, and the vision driving the platform forward.
            </p>
          </div>
        </div>

        {/* Target Audience */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Who Should Pay Attention</h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-10">
            MedxVerse is designed not only for individuals but for institutions and systems ready to modernise healthcare delivery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {targetAudience.map((audience, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-green-600 mb-4">
                  <audience.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{audience.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Movement CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">A Movement, Not Just a Product</h2>
            <div className="space-y-2 text-lg md:text-xl font-medium mb-10 leading-relaxed">
              <p>This is more than software.</p>
              <p className="text-green-100">It is infrastructure.</p>
              <p className="text-blue-100">It is opportunity.</p>
              <p className="text-yellow-100">It is inclusion.</p>
              <p className="text-pink-100">It is the future of healthcare delivery in Africa.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-3">Be Part of the Launch</h3>
              <p className="text-white/80 mb-4">Join us at MedFintech Conference 2026 as we officially unveil MedxVerse to the world.</p>
              <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
                {["Download", "Partner", "Invest", "Collaborate", "Share"].map((tag) => (
                  <span key={tag} className="bg-white/20 px-4 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <p className="text-xl md:text-2xl font-bold">The future of telemedicine begins here. 🚀</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Experience the Future?</h3>
            <p className="text-slate-500 text-sm mb-6">Register for MedFintech Conference 2026 and witness the official MedxVerse App Launch.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/registration">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold w-full sm:w-auto">
                  Reserve Your Seat
                </Button>
              </Link>
              <Link href="/partnerships">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Partnership Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
