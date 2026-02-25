import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, Crown, Mic, Users, Calendar, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import amosImage from "../assets/amos-franklin.jpg";
import zainabImage from "../assets/zainab-abdulsalam.JPG";
import amooImage from "../assets/amoo-yetunde.jpg";
import boluwatifeImage from "../assets/boluwatife-agboola.JPG";
import ayodejiImage from "../assets/ayodeji-adelabu.jpg";
import adeyeyeImage from "../assets/adeyeye-enitan.JPG";
import obaGhandiImage from "../assets/oba-ghandi.JPG";
import sundayOladapoImage from "../assets/sunday-oladapo.JPG";
import ogunkolaImage from "../assets/ogunkola-ifeoluwa.jpg";
import olusholaImage from "../assets/Olushola Adeoye.jpg";

export default function SpecialGuests() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const royalFathers = [
    {
      name: "His Imperial Majesty, Oba Adeyeye Enitan Babatunde Ogunwusi",
      regnal: "Ojaja II",
      title: "The Ooni of Ife",
      session: "Traditional Institutions as Catalysts for Digital Health and Economic Transformation",
      time: "9:30 AM",
      image: adeyeyeImage,
      type: "Royal Address",
    },
    {
      name: "His Imperial Majesty, Oba Ghandi Afolabi Oladunni Olaoye",
      regnal: "Orumogege III",
      title: "The Soun of Ogbomoso",
      session: "Empowering the Next Generation: Youth, Innovation, and the Future of Africa's Digital Economy",
      time: "9:45 AM",
      image: obaGhandiImage,
      type: "Royal Address",
    },
    {
      name: "His Royal Majesty, Oba Sunday Oladapo Oyediran",
      regnal: "Lagbami Osekun III",
      title: "Traditional Ruler, Ogbomoso",
      session: "Community Health, Financial Inclusion, and the Role of Leadership in Sustainable Development",
      time: "Royal Address",
      image: sundayOladapoImage,
      type: "Royal Address",
    },
  ];

  const keynoteSpeakers = [
    {
      name: "Amos Franklin Momodu",
      title: "Chief Executive Officer",
      company: "HealthTok",
      bio: "Passionate about leveraging technology and AI to develop innovative solutions that address real-world challenges and drive meaningful social impact.",
      session: "AI, Data, and Trust: Building Secure Digital Health Systems in Africa",
      time: "10:00 AM",
      image: amosImage,
    },
    {
      name: "Dr. Zainab Abdulsalam",
      title: "Medical Doctor & Digital Health Strategist",
      company: "Women's Health Advocate",
      bio: "Medical doctor, women's health advocate, and health content strategist. Trained 50+ health writers and building a movement to elevate health content standards across Africa.",
      session: "Telemedicine Platforms in Africa: From Concept to Community Impact",
      time: "12:10 PM",
      image: zainabImage,
    },
    {
      name: "Archbishop Gbenga Ayansola (JP)",
      title: "Special Guest Speaker",
      company: "Community Leader",
      bio: "Distinguished religious leader and justice of peace, bringing moral and ethical perspectives to healthcare innovation and community development.",
      session: "Special Guest Address",
      time: "3:00 PM",
      image: "GA",
    },
  ];

  const industryLeaders = [
    {
      name: "Boluwatife Agboola",
      title: "CEO",
      company: "Torchlife Africa",
      expertise: "The 'Digital Wallet' for Health: Making Care Affordable in Nigeria",
      bio: "Software engineer and impact-driven technologist focused on building scalable digital solutions for critical medical needs.",
      image: boluwatifeImage,
    },
    {
      name: "Olushola Adeoye",
      title: "Founder & CEO",
      company: "Callmate AI",
      expertise: "AI-Driven Business Systems: Turning AI into Revenue-Generating Products",
      bio: "Software engineer & ML expert. Built one of Nigeria's first cyber-link e-commerce bots; contributed to AI systems that earned Twitter ex-CEO grants. GEF 2024 winner. Exited a travel-tech AI startup in Dubai. Now building Callmate AI — an AI-powered business command centre for SMEs. Discipline: SaaS, ML & AI.",
      image: olusholaImage,
    },
    {
      name: "Adelabu Ayodeji Adetunji",
      title: "SME & Startup Growth Lead",
      company: "Flutterwave",
      expertise: "Driving Financial Inclusion and Seamless Payment Solutions in Healthcare",
      bio: "Growth lead at Flutterwave driving inclusive financial access across emerging markets.",
      image: ayodejiImage,
    },
    {
      name: "Amoo Yetunde Ololade",
      title: "Global Health Nurse",
      company: "Nursing (Global Health)",
      expertise: "Leadership, Innovation, and Entrepreneurship in Healthcare",
      bio: "Dedicated global health professional championing leadership and entrepreneurship in the nursing profession.",
      image: amooImage,
    },
    {
      name: "Ogunkola Ifeoluwa Esther",
      title: "Professional Event Compere & Media Consultant",
      company: "Hadassah — The Compere Without Comparison",
      expertise: "Strategic Communications & Event Hosting",
      bio: "Strategic communications expert and media consultant who transforms ordinary events into extraordinary experiences. Known for her commanding stage presence and articulate delivery, she has hosted for the UN Population Fund, Cybersafe Foundation, LinkedIn Local Nigeria, Ikoyi Club 1938, Tech Revolution Africa, and many top-tier organisations — bringing confidence, class, and precision to every platform.",
      image: ogunkolaImage,
    },
  ];

  const networkingHighlights = [
    { icon: Users,    label: "VIP Reception",      desc: "Exclusive access for premium ticket holders" },
    { icon: Mic,      label: "Q&A Sessions",       desc: "Interactive discussions after each keynote" },
    { icon: Calendar, label: "One-on-One Meetings", desc: "Private meetings available for VIP attendees" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-24">

      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 scale-in">
            <Star className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 scroll-animate stagger-1">Featured Speakers</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed scroll-animate stagger-2">
            Meet our exceptional lineup of healthcare professionals, fintech innovators, and industry leaders driving the future of telemedicine in Africa.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        {/* Fathers of the Day */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-3 justify-center mb-10">
            <Crown className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-800">Fathers of the Day</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {royalFathers.map((royal, idx) => (
              <div
                key={royal.name}
                className={`bg-white rounded-2xl border-2 border-amber-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden scroll-animate stagger-${idx + 1}`}
              >
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-amber-300 shadow-md mb-4 flex-shrink-0">
                    <img src={royal.image} alt={royal.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{royal.type}</span>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug mb-0.5">{royal.name}</h3>
                  <p className="text-amber-600 font-bold text-sm mb-0.5">{royal.regnal}</p>
                  <p className="text-amber-700 font-semibold text-xs">{royal.title}</p>
                </div>
                <div className="p-5">
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-1">
                      <Crown className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs font-semibold text-amber-800 leading-snug">{royal.session}</p>
                    </div>
                    <p className="text-xs text-slate-400 ml-5">{royal.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keynote Speakers */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-3 justify-center mb-10">
            <Mic className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-slate-900">Keynote Speakers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keynoteSpeakers.map((speaker, idx) => (
              <div
                key={speaker.name}
                className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden scroll-animate stagger-${idx + 1}`}
              >
                {/* Photo */}
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 flex flex-col items-center text-center flex-shrink-0">
                  {typeof speaker.image === "string" && speaker.image.length === 2 ? (
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-3">
                      {speaker.image}
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-white shadow-md">
                      <img src={speaker.image as string} alt={speaker.name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <h3 className="font-bold text-slate-900">{speaker.name}</h3>
                  <p className="text-primary text-sm font-semibold">{speaker.title}</p>
                  <p className="text-slate-500 text-xs">{speaker.company}</p>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{speaker.bio}</p>
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-3">
                    <div className="flex items-start gap-2 mb-1">
                      <Mic className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs font-semibold text-primary leading-snug">{speaker.session}</p>
                    </div>
                    <p className="text-xs text-slate-400 ml-5">{speaker.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Leaders */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-3">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Panellists & Experts</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Industry Leaders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industryLeaders.map((leader, idx) => (
              <div
                key={leader.name}
                className={`group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex scroll-animate stagger-${Math.min(idx + 1, 6)}`}
              >
                {/* Photo strip */}
                <div className="w-28 sm:w-36 flex-shrink-0 bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {typeof leader.image === "string" && leader.image.length === 2 ? (
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold ring-2 ring-primary/40">
                      {leader.image}
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-primary/50 transition-all duration-300">
                      <img src={leader.image as string} alt={leader.name} className="w-full h-full object-cover object-top" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">{leader.name}</h3>
                    <p className="text-primary text-xs sm:text-sm font-semibold">{leader.title}</p>
                    <p className="text-slate-400 text-xs mb-2">{leader.company}</p>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{leader.bio}</p>
                  </div>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 bg-primary/8 border border-primary/15 text-primary text-[10px] sm:text-xs font-semibold px-2.5 py-1.5 rounded-lg">
                      <Mic className="w-3 h-3 flex-shrink-0" />
                      <span className="line-clamp-1">{leader.expertise}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Networking Highlights + CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-white scale-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Meet the Speakers</h2>
              <p className="text-slate-300 text-sm max-w-lg mx-auto">
                Don't miss exclusive opportunities to connect with speakers during dedicated networking sessions, Q&A segments, and the VIP reception.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {networkingHighlights.map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/registration">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold w-full sm:w-auto">
                  Register Now
                </Button>
              </Link>
              <Link href="/ticketing">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto">
                  View Ticket Options
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
