import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Hotel, MapPin, Star, Loader2, Phone, Mail, CheckCircle } from "lucide-react";
import { PalmPayService, getSuccessUrl } from '@/lib/palmpay';
import palmpayLogo from "../assets/palmpay-pay.PNG";

export default function Accommodation() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-animate, .fade-up, .slide-left, .slide-right, .scale-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const handleHotelBooking = async (hotelId: string, amount: number, hotelName: string) => {
    const name = prompt('Enter your full name:');
    const email = prompt('Enter your email address:');
    const phone = prompt('Enter your phone number:');
    const checkIn = prompt('Check-in date (YYYY-MM-DD):');
    const checkOut = prompt('Check-out date (YYYY-MM-DD):');

    if (!name || !email || !phone || !checkIn || !checkOut) {
      alert('Please provide all required information');
      return;
    }

    setIsLoading(hotelId);
    try {
      const paymentResponse = await PalmPayService.initializePayment({
        amount,
        email,
        phone,
        name,
        itemType: `Hotel Accommodation - ${hotelName} (${checkIn} to ${checkOut})`,
        redirectUrl: getSuccessUrl('accommodation', hotelId)
      });
      PalmPayService.redirectToPayment(paymentResponse.paymentUrl);
    } catch (error) {
      console.error('Booking error:', error);
      alert('Hotel booking failed. Please try again.');
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16 md:pt-20">

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
                <Button
                  className="w-full font-semibold"
                  size="lg"
                  onClick={() => handleHotelBooking(hotel.id, hotel.amount, hotel.name)}
                  disabled={isLoading === hotel.id}
                >
                  {isLoading === hotel.id ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <img src={palmpayLogo} alt="PalmPay" className="w-5 h-5 mr-2 rounded-sm object-contain" />
                      Pay with PalmPay — {hotel.price}/night
                    </>
                  )}
                </Button>
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
