import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Ticket, CheckCircle, Clock, Star, Users, Award, AlertTriangle, Loader2, User, Mail, Phone, ShieldCheck } from "lucide-react";
import { PaystackService, getSuccessUrl } from '@/lib/paystack';
import paystackLogo from "../assets/paystack.PNG";

interface SelectedTicket {
  id: string;
  name: string;
  amount: number;
  price: string;
}

export default function Ticketing() {
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<SelectedTicket | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openPaymentModal = (ticket: SelectedTicket) => {
    setSelectedTicket(ticket);
    setForm({ name: '', email: '', phone: '' });
    setErrors({});
    setModalOpen(true);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 3)
      newErrors.name = 'Please enter your full name (at least 3 characters).';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address.';
    if (!form.phone.trim() || !/^[0-9+\-\s()]{7,15}$/.test(form.phone))
      newErrors.phone = 'Please enter a valid phone number.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicket || !validate()) return;

    setIsLoading(true);
    try {
      const paymentResponse = await PaystackService.initializePayment({
        amount: selectedTicket.amount,
        email: form.email.trim(),
        phone: form.phone.trim(),
        name: form.name.trim(),
        itemType: `Conference Ticket - ${selectedTicket.name}`,
        redirectUrl: getSuccessUrl('ticket', selectedTicket.id),
      });
      PaystackService.redirectToPayment(paymentResponse.paymentUrl);
    } catch {
      setErrors({ submit: 'Payment initialisation failed. Please check your connection and try again.' });
      setIsLoading(false);
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
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-24">

      {/* ── Payment Details Modal ─────────────────────────────────────── */}
      <Dialog open={modalOpen} onOpenChange={(open) => { if (!isLoading) setModalOpen(open); }}>
        <DialogContent className="sm:max-w-[440px] w-[calc(100%-2rem)] p-0 overflow-hidden rounded-2xl max-h-[90vh] overflow-y-auto gap-0 [&>button]:text-white [&>button]:top-4 [&>button]:right-4 [&>button:hover]:bg-white/10">
          {/* Header */}
          <div className="bg-slate-900 px-6 pt-5 pb-5">
            <DialogTitle className="text-white font-bold text-lg leading-tight pr-6">Complete Your Order</DialogTitle>
            <DialogDescription className="text-slate-400 text-sm mt-1">
              Enter your details to proceed securely with Paystack
            </DialogDescription>

            {/* Selected ticket pill */}
            {selectedTicket && (
              <div className="mt-4 bg-white/10 rounded-xl px-4 py-3 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-tight truncate">{selectedTicket.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">MEDFINTECH CONFERENCE 2026</p>
                </div>
                <span className="text-green-400 font-extrabold text-lg whitespace-nowrap flex-shrink-0">{selectedTicket.price}</span>
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handlePayment} noValidate className="px-6 py-5 space-y-4 bg-white">
            {/* Full Name */}
            <div className="space-y-1.5">
              <Label htmlFor="pay-name" className="text-sm font-medium text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <Input
                  id="pay-name"
                  type="text"
                  placeholder="e.g. Adewale Okonkwo"
                  value={form.name}
                  onChange={(e) => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })); }}
                  className={`pl-9 h-11 ${errors.name ? 'border-red-400 focus-visible:ring-red-300' : 'border-slate-200'}`}
                  disabled={isLoading}
                  autoComplete="name"
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="pay-email" className="text-sm font-medium text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <Input
                  id="pay-email"
                  type="email"
                  placeholder="e.g. you@email.com"
                  value={form.email}
                  onChange={(e) => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })); }}
                  className={`pl-9 h-11 ${errors.email ? 'border-red-400 focus-visible:ring-red-300' : 'border-slate-200'}`}
                  disabled={isLoading}
                  autoComplete="email"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <Label htmlFor="pay-phone" className="text-sm font-medium text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <Input
                  id="pay-phone"
                  type="tel"
                  placeholder="e.g. 08012345678"
                  value={form.phone}
                  onChange={(e) => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: '' })); }}
                  className={`pl-9 h-11 ${errors.phone ? 'border-red-400 focus-visible:ring-red-300' : 'border-slate-200'}`}
                  disabled={isLoading}
                  autoComplete="tel"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>

            {/* Submit error */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">
                {errors.submit}
              </div>
            )}

            {/* Security note */}
            <div className="flex items-start gap-2.5 bg-green-50 border border-green-100 rounded-xl px-3.5 py-3">
              <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-green-700 leading-relaxed">Your payment is processed securely by Paystack. We never store your card details.</p>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100" />

            {/* Actions */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                disabled={isLoading}
                className="flex-1 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-green-500 to-primary bg-[length:200%_100%] py-3 text-white font-bold text-sm shadow-md hover:shadow-primary/40 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Redirecting to Paystack…
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <img src={paystackLogo} alt="" className="w-4 h-4 object-contain brightness-0 invert" />
                    Pay {selectedTicket?.price}
                  </span>
                )}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

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
                <button
                  onClick={() => openPaymentModal({ id: ticket.id, name: ticket.name, amount: ticket.amount, price: ticket.price })}
                  disabled={isLoading}
                  className={`w-full group relative overflow-hidden rounded-xl transition-all duration-500 shadow-md hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed ${
                    ticket.highlight
                      ? "bg-gradient-to-r from-white via-slate-100 to-white hover:shadow-white/30"
                      : "bg-gradient-to-r from-primary via-green-500 to-primary bg-[length:200%_100%] hover:shadow-primary/40"
                  }`}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-between px-4 py-3">
                    {isLoading ? (
                      <div className={`flex items-center gap-2 mx-auto font-semibold text-xs ${ticket.highlight ? "text-primary" : "text-white"}`}>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Processing...
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <div className={`rounded-md p-1 ${ticket.highlight ? "bg-primary/15" : "bg-white/20"}`}>
                            <img src={paystackLogo} alt="Paystack" className="w-4 h-4 object-contain" />
                          </div>
                          <span className={`font-bold text-xs ${ticket.highlight ? "text-primary" : "text-white"}`}>Pay via Paystack</span>
                        </div>
                        <span className={`font-extrabold text-xs px-2.5 py-1 rounded-lg ${ticket.highlight ? "bg-primary/15 text-primary" : "bg-white/20 text-white"}`}>{ticket.price}</span>
                      </>
                    )}
                  </div>
                </button>
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
              <button
                onClick={() => openPaymentModal({ id: 'volunteer', name: 'Volunteer Pass', amount: 7000, price: '₦7,000' })}
                disabled={isLoading}
                className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-[length:200%_100%] hover:bg-right-center transition-all duration-500 shadow-md hover:shadow-green-500/40 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-between px-4 py-3">
                  {isLoading ? (
                    <div className="flex items-center gap-2 mx-auto text-white font-semibold text-xs">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="bg-white/20 rounded-md p-1">
                          <img src={paystackLogo} alt="Paystack" className="w-4 h-4 object-contain" />
                        </div>
                        <span className="text-white font-bold text-xs">Pay via Paystack</span>
                      </div>
                      <span className="bg-white/20 text-white font-extrabold text-xs px-2.5 py-1 rounded-lg">₦7,000</span>
                    </>
                  )}
                </div>
              </button>
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