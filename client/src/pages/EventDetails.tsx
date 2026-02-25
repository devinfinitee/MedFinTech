import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Mic, Coffee, Award, BookOpen } from "lucide-react";
import { Link } from "wouter";
import img2 from "@/assets/img-2.jpg";

export default function EventDetails() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const scheduleDay1 = [
    { time: "8:00 AM", title: "Arrival & Registration", type: "networking", speaker: "Badge collection, media engagement, and networking. Exhibition booths open." },
    { time: "9:00 AM", title: "Opening Session", type: "keynote", speaker: "Opening Prayer/Reflection, Welcome Address, Introduction of Dignitaries" },
    { time: "9:15 AM", title: "Executive Welcome", type: "keynote", speaker: "CEO's Address: Conference Vision, Objectives, and Expected Outcomes" },
    { time: "9:30 AM", title: "Royal Address I", type: "keynote", speaker: "The Role of Innovation in Community Development" },
    { time: "9:45 AM", title: "Royal Address II", type: "keynote", speaker: "Traditional Institutions & Modern Technology" },
    { time: "10:00 AM", title: "Keynote I: AI, Data, and Trust", type: "keynote", speaker: "Amos Franklin Momodu (CEO, HealthTok)" },
    { time: "10:45 AM", title: "Tea & Networking Break", type: "break", speaker: "" },
    { time: "11:00 AM", title: "Keynote II: The Digital Wallet for Health", type: "keynote", speaker: "Boluwatife Agboola (CEO, Torchlife Africa)" },
    { time: "11:35 AM", title: "Keynote III: AI-Driven Customer Experience", type: "keynote", speaker: "Olushola Adeoye (CEO, CallMate AI)" },
    { time: "12:10 PM", title: "Keynote IV: Telemedicine Platforms in Africa", type: "keynote", speaker: "Dr. Zainab Abdulsalam (Digital Health Strategist)" },
    { time: "12:45 PM", title: "Lunch Break & Exhibition Tour", type: "networking", speaker: "Visit innovation hubs and partner showcases" },
    { time: "1:30 PM", title: "Leadership in Healthcare", type: "keynote", speaker: "Amoo Yetunde (Global Health Nurse)" },
    { time: "2:00 PM", title: "Fintech: Driving Financial Inclusion", type: "keynote", speaker: "Adelabu Ayodeji Adetunji (Growth Lead, Flutterwave)" },
    { time: "2:30 PM", title: "Grand Panel: The Future of Emerging Markets", type: "panel", speaker: "Panel Discussion & Interactive Q&A" },
    { time: "3:00 PM", title: "Special Recognition & Partner Acknowledgements", type: "networking", speaker: "" },
    { time: "3:15 PM", title: "Closing Keynote", type: "keynote", speaker: "Conference Resolutions and Industry Collaboration Roadmap" },
    { time: "3:45 PM", title: "Closing Remarks", type: "networking", speaker: "Media Interviews and Group Photography" },
  ];

  type ScheduleType = "keynote" | "panel" | "workshop" | "networking" | "break";

  const typeConfig: Record<ScheduleType, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
    keynote:    { label: "Keynote",    color: "text-primary",    bg: "bg-primary/10",  icon: <Mic       className="w-3.5 h-3.5" /> },
    panel:      { label: "Panel",      color: "text-blue-600",   bg: "bg-blue-50",     icon: <Users     className="w-3.5 h-3.5" /> },
    workshop:   { label: "Workshop",   color: "text-purple-600", bg: "bg-purple-50",   icon: <BookOpen  className="w-3.5 h-3.5" /> },
    networking: { label: "Networking", color: "text-orange-600", bg: "bg-orange-50",   icon: <Coffee    className="w-3.5 h-3.5" /> },
    break:      { label: "Break",      color: "text-slate-500",  bg: "bg-slate-100",   icon: <Clock     className="w-3.5 h-3.5" /> },
  };

  const included = [
    "All keynote and panel sessions",
    "Welcome and closing receptions",
    "Networking lunches and coffee breaks",
    "Conference materials and swag bag",
    "Digital access to presentation slides",
    "Official Certificate of Participation",
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-28">

      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 md:py-20 relative overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img src={img2} alt="Conference" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/70 to-slate-900/85" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 scale-in">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 scroll-animate stagger-1">Event Details</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6 scroll-animate stagger-2">
            Everything you need to know about MEDFINTECH CONFERENCE 2026 — the official launch of Africa's largest telemedicine platform.
          </p>
          <div className="flex flex-wrap justify-center gap-3 scroll-animate stagger-3">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
              <Calendar className="w-4 h-4 text-primary" /> Saturday, 7th March 2026
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
              <Clock className="w-4 h-4 text-primary" /> 9:00 AM – 4:00 PM
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
              <MapPin className="w-4 h-4 text-primary" /> The Assembly, Ogbomoso, Oyo State
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-8">
            {(Object.entries(typeConfig) as [ScheduleType, typeof typeConfig[ScheduleType]][]).map(([key, cfg]) => (
              <span key={key} className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${cfg.bg} ${cfg.color}`}>
                {cfg.icon} {cfg.label}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Schedule */}
            <div className="lg:col-span-2 space-y-3 slide-left">
              <h2 className="text-xl font-bold text-slate-900 mb-5">Conference Schedule — Saturday, 7th March 2026</h2>
              {scheduleDay1.map((item, index) => {
                const cfg = typeConfig[item.type as ScheduleType] || typeConfig.networking;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-primary font-mono font-bold text-sm w-20 flex-shrink-0 pt-0.5">
                        {item.time}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color} flex-shrink-0`}>
                            {cfg.icon} {cfg.label}
                          </span>
                        </div>
                        {item.speaker && (
                          <p className="text-sm text-slate-500 leading-relaxed">{item.speaker}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="space-y-6 slide-right">

              {/* Venue */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-slate-900">Venue</h3>
                </div>
                <div className="space-y-1 text-sm text-slate-600">
                  <p className="font-medium text-slate-800">The Assembly</p>
                  <p>Beside BON Hotel, Ogbomoso, Oyo State</p>
                  <p className="text-xs text-slate-400 mt-1">~30 min from Ilorin Airport</p>
                </div>
              </div>

              {/* What's included */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-slate-900">What's Included</h3>
                </div>
                <ul className="space-y-2.5">
                  {included.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Ready to Join?</h3>
                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                  Secure your seat before venue capacity is reached. Register and pay online in minutes.
                </p>
                <Link href="/registration">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    Register Now
                  </Button>
                </Link>
                <Link href="/ticketing">
                  <Button variant="outline" className="w-full mt-3 border-white/20 text-white hover:bg-white/10 bg-transparent">
                    View Ticket Prices
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
