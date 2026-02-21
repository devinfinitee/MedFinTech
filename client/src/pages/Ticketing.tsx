import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket, CheckCircle, Clock, Star, Users, Award, AlertTriangle, Loader2 } from "lucide-react";
import { PalmPayService, getSuccessUrl } from '@/lib/palmpay';
import palmpayLogo from "../assets/palmpay-pay.PNG";

export default function Ticketing() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleTicketPurchase = async (ticketId: string, amount: number, ticketName: string) => {
    const name = prompt('Enter your full name:');
    const email = prompt('Enter your email address:');
    const phone = prompt('Enter your phone number:');

    if (!name || !email || !phone) {
      alert('Please provide all required information');
      return;
    }

    setIsLoading(ticketId);
    
    try {
      const paymentResponse = await PalmPayService.initializePayment({
        amount,
        email,
        phone,
        name,
        itemType: `Conference Ticket - ${ticketName}`,
        redirectUrl: getSuccessUrl('ticket', ticketId)
      });
      PalmPayService.redirectToPayment(paymentResponse.paymentUrl);
    } catch (error) {
      console.error('Ticket purchase error:', error);
      alert('Ticket purchase failed. Please try again.');
    } finally {
      setIsLoading(null);
    }
  };

  const ticketTypes = [
    {
      id: "student",
      name: "Student General Admission",
      price: "₦1,000",
      amount: 1000,
      features: [
        "Full access to all conference sessions",
        "Entry to exhibition & innovation showcase",
        "Networking opportunities with professionals",
        "Digital conference materials",
        "Official Certificate of Participation",
        "Opportunities for internships & startup exposure",
      ],
      badge: "Students Only",
      badgeVariant: "secondary" as const,
      description: "Exclusively for students. Affordable access to Africa's boldest healthcare innovation event.",
      highlight: false,
    },
    {
      id: "general",
      name: "General Admission",
      price: "₦5,000",
      amount: 5000,
      features: [
        "Full access to all keynote & panel sessions",
        "Entry to exhibition & innovation showcase",
        "Networking & collaboration sessions",
        "Digital conference materials",
        "Official Certificate of Participation",
        "Opportunities for partnerships & startup exposure",
      ],
      badge: "Most Popular",
      badgeVariant: "default" as const,
      description: "The standard conference experience. Ideal for professionals, entrepreneurs, and innovators.",
      highlight: true,
    },
    {
      id: "vip",
      name: "VIP Access",
      price: "₦15,000",
      amount: 15000,
      features: [
        "Everything in General Admission",
        "VIP Seating — front row reserved section",
        "Special Recognition During Conference",
        "Executive Photo Opportunity with Speakers",
        "Signed Appreciation Letter from the CEO",
        "Invitation to Post-Conference Private Strategy Meetup",
        "Early Access to MedxVerse Opportunities",
      ],
      badge: "VIP",
      badgeVariant: "outline" as const,
      description: "Exclusive. Recognised. For leaders who want the full premium conference experience.",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 md:pt-28">

      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 scale-in">
            <Ticket className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 scroll-animate stagger-1">Conference Tickets</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed scroll-animate stagger-2">
            Secure your seat at MEDFINTECH CONFERENCE 2026. Choose the ticket tier that fits you and be part of Africa's boldest healthcare innovation summit.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 items-start pt-6">
          {ticketTypes.map((ticket, idx) => (
            <div
              key={ticket.id}
              className={`relative rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl scroll-animate ${idx === 0 ? 'stagger-1' : idx === 1 ? 'stagger-2' : 'stagger-3'} ${
                ticket.highlight
                  ? "bg-primary text-white shadow-2xl shadow-primary/30 ring-2 ring-primary"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
            >
              {/* Badge */}
              <div className="flex justify-center pt-5 pb-1">
                <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow ${
                  ticket.highlight
                    ? "bg-white text-primary"
                    : ticket.id === "vip"
                    ? "bg-purple-600 text-white"
                    : "bg-slate-700 text-white"
                }`}>
                  {ticket.badge}
                </span>
              </div>

              <div className="px-5 pb-6 pt-2 flex flex-col flex-1">
                {/* Title & Price */}
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-4 ${ticket.highlight ? "text-white" : "text-slate-900"}`}>
                    {ticket.name}
                  </h3>
                  <div className={`text-5xl font-extrabold mb-2 ${ticket.highlight ? "text-white" : "text-primary"}`}>
                    {ticket.price}
                  </div>
                  <p className={`text-sm leading-relaxed ${ticket.highlight ? "text-white/80" : "text-slate-500"}`}>
                    {ticket.description}
                  </p>
                </div>

                {/* Divider */}
                <div className={`border-t mb-6 ${ticket.highlight ? "border-white/20" : "border-slate-100"}`} />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${ticket.highlight ? "text-white" : "text-primary"}`} />
                      <span className={`text-sm ${ticket.highlight ? "text-white/90" : "text-slate-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  size="sm"
                  className={`w-full font-semibold py-3 h-auto text-xs flex flex-wrap justify-center gap-1 ${
                    ticket.highlight
                      ? "bg-white text-primary hover:bg-slate-100"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                  onClick={() => handleTicketPurchase(ticket.id, ticket.amount, ticket.name)}
                  disabled={isLoading === ticket.id}
                >
                  {isLoading === ticket.id ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <img src={palmpayLogo} alt="PalmPay" className="w-4 h-4 rounded-sm object-contain" />
                      <span>Pay with PalmPay — {ticket.price}</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}

          {/* Volunteer Card — 4th tile */}
          <div className="relative rounded-2xl flex flex-col bg-green-50 border-2 border-green-300 shadow-sm scroll-animate stagger-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            {/* Badge */}
            <div className="flex justify-center pt-5 pb-1">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow bg-green-600 text-white">
                Volunteer
              </span>
            </div>
            <div className="px-5 pb-6 pt-2 flex flex-col flex-1">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Volunteer Pass</h3>
                <div className="text-5xl font-extrabold mb-2 text-green-600">₦7,000</div>
                <p className="text-sm leading-relaxed text-slate-500">
                  Serve, learn & grow. Includes your official Volunteer Vest + full conference entry.
                </p>
              </div>
              <div className="border-t border-green-200 mb-6" />
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  "Official MedFintech Volunteer Vest",
                  "Volunteer ID Badge",
                  "Full conference access during shift",
                  "Digital Certificate of Volunteering",
                  "Group photo recognition",
                  "Networking with speakers & professionals",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="sm"
                className="w-full font-semibold py-3 h-auto text-xs flex flex-wrap justify-center gap-1 bg-green-600 text-white hover:bg-green-700"
                onClick={() => handleTicketPurchase("volunteer", 7000, "Volunteer Pass")}
                disabled={isLoading === "volunteer"}
              >
                {isLoading === "volunteer" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" />Processing...</>
                ) : (
                  <><img src={palmpayLogo} alt="PalmPay" className="w-4 h-4 rounded-sm object-contain" /><span>Pay with PalmPay — ₦7,000</span></>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <Card className="border-0 shadow-sm bg-green-50 slide-left">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800">Volunteer Access — ₦7,000</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                Want to serve at the conference? Volunteers pay <strong className="text-green-700">₦7,000</strong> which covers their official MedFintech Volunteer Vest and grants full conference entry — no separate ticket needed.
              </p>
              <ul className="space-y-1.5 mb-4">
                {["Official Volunteer Vest & ID Badge", "Full conference access during your shift", "Digital Certificate of Volunteering", "Group photo recognition"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="border-green-400 text-green-700 hover:bg-green-100">
                Learn About Volunteering
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-amber-50 slide-right">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-800">What Your Ticket Includes</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Access to all conference sessions",
                  "Entry to exhibition and innovation showcase",
                  "Networking opportunities",
                  "Conference materials",
                  "Official Certificate of Participation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Ticket Policy */}
        <div className="max-w-4xl mx-auto mb-10">
          <Card className="border-0 shadow-sm bg-white scroll-animate">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-slate-500" />
                </div>
                <h3 className="font-semibold text-slate-800">Ticket Policy</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "All tickets are non-transferable.",
                  "Confirmation receipt must be presented at accreditation desk.",
                  "Ticket sales close once maximum venue capacity is reached.",
                  "No refunds after confirmation unless officially announced.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Banner */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-green-600 rounded-2xl p-6 md:p-8 text-white text-center scale-in">
            <Clock className="w-8 h-8 mx-auto mb-3 opacity-90" />
            <h3 className="text-xl font-bold mb-2">Limited Seats Available</h3>
            <p className="text-white/85 mb-4 max-w-lg mx-auto text-sm leading-relaxed">
              Early registration discount available until February 28th, 2026. Secure your position at the forefront of healthcare innovation.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium">
              <Star className="w-4 h-4 text-yellow-300" />
              Join 200+ healthcare professionals already registered
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}