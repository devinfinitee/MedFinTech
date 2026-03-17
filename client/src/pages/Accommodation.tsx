import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Hotel, MapPin, Star, Loader2, Phone, Mail, CheckCircle, User, ShieldCheck, CalendarDays } from "lucide-react";
import { PaystackService, getSuccessUrl } from '@/lib/paystack';
import paystackLogo from "../assets/paystack.PNG";

interface SelectedHotel {
  id: string;
  name: string;
  amount: number;
  price: string;
}

export default function Accommodation() {
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<SelectedHotel | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', checkIn: '', checkOut: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openBookingModal = (hotel: SelectedHotel) => {
    setSelectedHotel(hotel);
    setForm({ name: '', email: '', phone: '', checkIn: '', checkOut: '' });
    setErrors({});
    setModalOpen(true);
  };

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 3)
      newErrors.name = 'Please enter your full name (at least 3 characters).';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address.';
    if (!form.phone.trim() || !/^[0-9+\-\s()]{7,15}$/.test(form.phone))
      newErrors.phone = 'Please enter a valid phone number.';
    if (!form.checkIn)
      newErrors.checkIn = 'Please select a check-in date.';
    if (!form.checkOut)
      newErrors.checkOut = 'Please select a check-out date.';
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn)
      newErrors.checkOut = 'Check-out must be after check-in.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedHotel || !validate()) return;

    setIsLoading(true);
    try {
      const paymentResponse = await PaystackService.initializePayment({
        amount: selectedHotel.amount,
        email: form.email.trim(),
        phone: form.phone.trim(),
        name: form.name.trim(),
        itemType: `Hotel Accommodation - ${selectedHotel.name} (${form.checkIn} to ${form.checkOut})`,
        redirectUrl: getSuccessUrl('accommodation', selectedHotel.id),
      });
      PaystackService.redirectToPayment(paymentResponse.paymentUrl);
    } catch {
      setErrors({ submit: 'Booking initialisation failed. Please check your connection and try again.' });
      setIsLoading(false);
    }
  };

  const hotels = [
    {
      id: "classic-room",
      name: "Classic Room",
      price: "₦25,000",
      amount: 25000,
      features: ["Complimentary Breakfast", "LED TV with Satellite", "Air Conditioning", "USB Charging Ports", "Tea/Coffee", "Work Desk"],
      description: "The Willows Nest Hotel shares a direct wall boundary with the conference venue. Walk from your room to sessions in minutes.",
      badge: "Official Partner",
      badgeColor: "bg-primary",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    },
    {
      id: "imperial-room",
      name: "Imperial Room",
      price: "₦28,000",
      amount: 28000,
      features: ["Complimentary Breakfast", "Smart TV", "Air Conditioning", "Swimming Pool Access", "Gym Access", "Work Desk"],
      description: "Enhanced comfort with premium amenities. Maximum security in a controlled, secure perimeter for VIPs and international guests.",
      badge: "Premium",
      badgeColor: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
    },
    {
      id: "luxury-room",
      name: "Luxury Room",
      price: "₦30,000",
      amount: 30000,
      features: ["Complimentary Breakfast", "Smart Technology", "Full Pool & Gym Access", "Club Lounge", "Premium Bedding", "Mini Bar"],
      description: "Luxury accommodation where speakers and industry leaders stay. Perfect networking hub.",
      badge: "Luxury",
      badgeColor: "bg-purple-600",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
    },
    {
      id: "junior-suite",
      name: "Junior Suite",
      price: "₦35,000",
      amount: 35000,
      features: ["Complimentary Breakfast", "Separate Living Area", "Full Amenities Access", "Executive Services", "Premium Entertainment", "Work Desk"],
      description: "Spacious suite with separate living area. Ideal for executives and VIP delegates.",
      badge: "Executive",
      badgeColor: "bg-amber-600",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
    },
    {
      id: "ambassadorial-suite",
      name: "Ambassadorial Suite",
      price: "₦40,000",
      amount: 40000,
      features: ["Complimentary Breakfast", "VIP Services", "Full Hotel Access", "Concierge", "Premium Location", "Executive Lounge"],
      description: "Ambassadorial-level accommodation with VIP treatment throughout your stay.",
      badge: "VIP",
      badgeColor: "bg-rose-600",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
    },
    {
      id: "presidential-suite",
      name: "Presidential Suite",
      price: "₦60,000",
      amount: 60000,
      features: ["Complimentary Breakfast", "Presidential Services", "Private Entertainment", "Butler Service", "All Amenities", "Best Views"],
      description: "The pinnacle of luxury. Presidential suite with exclusive services and unmatched comfort.",
      badge: "Presidential",
      badgeColor: "bg-slate-800",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-24">

      {/* ── Booking Modal ──────────────────────────────────────────────── */}
      <Dialog open={modalOpen} onOpenChange={(open) => { if (!isLoading) setModalOpen(open); }}>
        <DialogContent className="sm:max-w-[480px] w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] p-0 overflow-hidden rounded-2xl max-h-[92dvh] overflow-y-auto gap-0 [&>button]:text-white [&>button]:top-3 [&>button]:right-3 sm:[&>button]:top-4 sm:[&>button]:right-4 [&>button:hover]:bg-white/10">

          {/* Dark header */}
          <div className="bg-slate-900 px-4 sm:px-6 pt-5 pb-5">
            <DialogTitle className="text-white font-bold text-lg leading-tight pr-6">Book Your Room</DialogTitle>
            <DialogDescription className="text-slate-400 text-sm mt-1">
              Enter your details to proceed securely with Paystack
            </DialogDescription>

            {/* Selected room pill */}
            {selectedHotel && (
              <div className="mt-4 bg-white/10 rounded-xl px-3 sm:px-4 py-3 flex items-center justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-tight truncate">{selectedHotel.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">The Willows Nest Hotel · MEDFINTECH 2026</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-green-400 font-extrabold text-lg">{selectedHotel.price}</span>
                  <p className="text-slate-400 text-xs">per night</p>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handlePayment} noValidate className="px-4 sm:px-6 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] space-y-4 bg-white">

            {/* Full Name */}
            <div className="space-y-1.5">
              <Label htmlFor="bk-name" className="text-sm font-medium text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <Input
                  id="bk-name" type="text" placeholder="e.g. Adewale Okonkwo"
                  value={form.name}
                  onChange={(e) => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })); }}
                  className={`pl-9 h-11 ${errors.name ? 'border-red-400 focus-visible:ring-red-300' : 'border-slate-200'}`}
                  disabled={isLoading} autoComplete="name"
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="bk-email" className="text-sm font-medium text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <Input
                  id="bk-email" type="email" placeholder="e.g. you@email.com"
                  value={form.email}
                  onChange={(e) => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })); }}
                  className={`pl-9 h-11 ${errors.email ? 'border-red-400 focus-visible:ring-red-300' : 'border-slate-200'}`}
                  disabled={isLoading} autoComplete="email"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <Label htmlFor="bk-phone" className="text-sm font-medium text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <Input
                  id="bk-phone" type="tel" placeholder="e.g. 08012345678"
                  value={form.phone}
                  onChange={(e) => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: '' })); }}
                  className={`pl-9 h-11 ${errors.phone ? 'border-red-400 focus-visible:ring-red-300' : 'border-slate-200'}`}
                  disabled={isLoading} autoComplete="tel"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>

            {/* Check-in / Check-out */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="bk-checkin" className="text-sm font-medium text-slate-700">
                  Check-in <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <Input
                    id="bk-checkin" type="date" min={today}
                    value={form.checkIn}
                    onChange={(e) => { setForm(f => ({ ...f, checkIn: e.target.value })); setErrors(er => ({ ...er, checkIn: '' })); }}
                    className={`pl-9 h-11 ${errors.checkIn ? 'border-red-400 focus-visible:ring-red-300' : 'border-slate-200'}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.checkIn && <p className="text-red-500 text-xs">{errors.checkIn}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bk-checkout" className="text-sm font-medium text-slate-700">
                  Check-out <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <Input
                    id="bk-checkout" type="date" min={form.checkIn || today}
                    value={form.checkOut}
                    onChange={(e) => { setForm(f => ({ ...f, checkOut: e.target.value })); setErrors(er => ({ ...er, checkOut: '' })); }}
                    className={`pl-9 h-11 ${errors.checkOut ? 'border-red-400 focus-visible:ring-red-300' : 'border-slate-200'}`}
                    disabled={isLoading}
                  />
                </div>
                {errors.checkOut && <p className="text-red-500 text-xs">{errors.checkOut}</p>}
              </div>
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
              <p className="text-xs text-green-700 leading-relaxed">Your booking is processed securely by Paystack. We never store your card details.</p>
            </div>

            <div className="border-t border-slate-100" />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                disabled={isLoading}
                className="w-full sm:flex-1 rounded-xl border border-slate-200 py-3.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:flex-1 group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-green-500 to-primary bg-[length:200%_100%] py-3.5 text-white font-bold text-sm shadow-md hover:shadow-primary/40 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Redirecting to Paystack…
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <img src={paystackLogo} alt="" className="w-4 h-4 object-contain brightness-0 invert" />
                    Pay {selectedHotel?.price}
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
            <Hotel className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 scroll-animate stagger-1">Official Delegate Accommodation</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 scroll-animate stagger-2">
            The Willows Nest Hotel — Official Partner. Premium comfort with zero commute. Stay where the speakers and industry leaders are staying.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-slate-400 scroll-animate stagger-3">
            <span><strong className="text-slate-200">Location:</strong> 1 LAUTECH Road, Ogbomoso</span>
            <span><strong className="text-slate-200">Capacity:</strong> 34 Executive Rooms</span>
            <span><strong className="text-slate-200">Airport:</strong> ~30 min to Ilorin Airport</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        {/* Hotel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {hotels.map((hotel, idx) => (
            <div
              key={hotel.id}
              className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden scroll-animate stagger-${Math.min(idx + 1, 6)}`}
            >
              {/* Room Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow ${hotel.badgeColor}`}>
                  {hotel.badge}
                </span>
                <div className="absolute bottom-3 right-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400 drop-shadow" />
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{hotel.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-slate-400 ml-1">5/5</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-extrabold text-primary leading-none">{hotel.price}</div>
                    <div className="text-xs text-slate-400 mt-0.5">per night</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {hotel.description.split('.')[0]}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{hotel.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6 flex-1">
                  {hotel.features.map((feature, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => openBookingModal({ id: hotel.id, name: hotel.name, amount: hotel.amount, price: hotel.price })}
                  disabled={isLoading}
                  className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-green-500 to-primary bg-[length:200%_100%] hover:bg-right-center transition-all duration-500 shadow-lg hover:shadow-primary/40 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-between px-5 py-4">
                    {isLoading ? (
                      <div className="flex items-center gap-2 mx-auto text-white font-semibold text-sm">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing…
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          <div className="bg-white/20 rounded-lg p-1.5">
                            <img src={paystackLogo} alt="Paystack" className="w-5 h-5 object-contain" />
                          </div>
                          <span className="text-white font-bold text-sm">Pay with Paystack</span>
                        </div>
                        <span className="bg-white/20 text-white font-extrabold text-sm px-3 py-1 rounded-lg">{hotel.price}<span className="font-normal text-white/80 text-xs ml-1">/night</span></span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Contact Banner */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-white scale-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Direct Hotel Reservations</h3>
              <p className="text-slate-300 text-sm max-w-lg mx-auto">
                Contact The Willows Nest Hotel directly for special requests, group bookings, or inquiries. Mention <strong className="text-white">"MEDFINTECH Conference 2026"</strong> for priority service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">Phone</span>
                </div>
                <p className="text-slate-300 text-sm">09066100303</p>
                <p className="text-slate-300 text-sm">07047363373</p>
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-sm">Email</span>
                </div>
                <p className="text-slate-300 text-sm break-all">reservations.ogb@thewillowshotels.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
