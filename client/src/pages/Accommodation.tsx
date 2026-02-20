import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hotel, MapPin, Star, Wifi, Car, Coffee, Dumbbell, Users, CreditCard, Loader2, Phone, Mail } from "lucide-react";
import { PalmPayService, getSuccessUrl } from '@/lib/palmpay';

export default function Accommodation() {
  const hotels = [
    {
      id: "classic-room",
      name: "Classic Room",
      rating: 5,
      distance: "Official Conference Hotel - Zero Commute",
      price: "₦25,000",
      originalPrice: null,
      deposit: "₦35,000",
      image: "/api/placeholder/400/250",
      features: ["Complimentary Breakfast", "LED TV with Satellite", "Air Conditioning", "USB Charging Ports", "Tea/Coffee", "Work Desk"],
      amenities: [Wifi, Car, Coffee, Users, Dumbbell],
      description: "The Willows Nest Hotel shares a direct wall boundary with the conference venue. Walk from your room to sessions in minutes.",
      badge: "Official Partner",
      hotel: "The Willows Nest Hotel",
    },
    {
      id: "imperial-room",
      name: "Imperial Room",
      rating: 5,
      distance: "Official Conference Hotel - Zero Commute",
      price: "₦28,000",
      originalPrice: null,
      deposit: "₦38,000",
      image: "/api/placeholder/400/250",
      features: ["Complimentary Breakfast", "Smart TV", "Air Conditioning", "Swimming Pool Access", "Gym Access", "Work Desk"],
      amenities: [Wifi, Car, Coffee, Users, Dumbbell],
      description: "Enhanced comfort with premium amenities. Maximum security in a controlled, secure perimeter for VIPs and international guests.",
      badge: "Premium",
      hotel: "The Willows Nest Hotel",
    },
    {
      id: "luxury-room",
      name: "Luxury Room",
      rating: 5,
      distance: "Official Conference Hotel - Zero Commute",
      price: "₦30,000",
      originalPrice: null,
      deposit: "₦40,000",
      image: "/api/placeholder/400/250",
      features: ["Complimentary Breakfast", "Smart Technology", "Full Pool & Gym Access", "Club Lounge", "Premium Bedding", "Mini Bar"],
      amenities: [Wifi, Car, Coffee, Users, Dumbbell],
      description: "Luxury accommodation where speakers and industry leaders stay. Perfect networking hub.",
      badge: "Luxury",
      hotel: "The Willows Nest Hotel",
    },
    {
      id: "junior-suite",
      name: "Junior Suite",
      rating: 5,
      distance: "Official Conference Hotel - Zero Commute",
      price: "₦35,000",
      originalPrice: null,
      deposit: "₦50,000",
      image: "/api/placeholder/400/250",
      features: ["Complimentary Breakfast", "Separate Living Area", "Full Amenities Access", "Executive Services", "Premium Entertainment"],
      amenities: [Wifi, Car, Coffee, Users, Dumbbell],
      description: "Spacious suite with separate living area. Ideal for executives and VIP delegates.",
      badge: "Executive",
      hotel: "The Willows Nest Hotel",
    },
    {
      id: "ambassadorial-suite",
      name: "Ambassadorial Suite",
      rating: 5,
      distance: "Official Conference Hotel - Zero Commute",
      price: "₦40,000",
      originalPrice: null,
      deposit: "₦60,000",
      image: "/api/placeholder/400/250",
      features: ["Complimentary Breakfast", "VIP Services", "Full Hotel Access", "Concierge", "Premium Location", "Executive Lounge"],
      amenities: [Wifi, Car, Coffee, Users, Dumbbell],
      description: "Ambassadorial-level accommodation with VIP treatment throughout your stay.",
      badge: "VIP",
      hotel: "The Willows Nest Hotel",
    },
    {
      id: "presidential-suite",
      name: "Presidential Suite",
      rating: 5,
      distance: "Official Conference Hotel - Zero Commute",
      price: "₦60,000",
      originalPrice: null,
      deposit: "₦90,000",
      image: "/api/placeholder/400/250",
      features: ["Complimentary Breakfast", "Presidential Services", "Private Entertainment", "Butler Service", "All Amenities", "Best Views"],
      amenities: [Wifi, Car, Coffee, Users, Dumbbell],
      description: "The pinnacle of luxury. Presidential suite with exclusive services and unmatched comfort.",
      badge: "Presidential",
      hotel: "The Willows Nest Hotel",
    },
  ];

  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleHotelBooking = async (hotelId: string, amount: number, hotelName: string) => {
    // For this demo, we'll collect user data with prompts - in a real app, this would come from a form
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
        amount: amount,
        email: email,
        phone: phone,
        name: name,
        itemType: `Hotel Accommodation - ${hotelName} (${checkIn} to ${checkOut})`,
        redirectUrl: getSuccessUrl('accommodation', hotelId)
      });

      // Redirect to PalmPay payment page
      PalmPayService.redirectToPayment(paymentResponse.paymentUrl);
    } catch (error) {
      console.error('Booking error:', error);
      alert('Hotel booking failed. Please try again.');
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 md:pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Hotel className="w-10 h-10 md:w-12 md:h-12 text-primary mr-3 md:mr-4" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Official Delegate Accommodation</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            The Willows Nest Hotel - Official Partner. Premium comfort with zero commute. The hotel shares a direct wall boundary with the conference venue. Stay where the speakers and industry leaders are staying.
          </p>
          <div className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground space-y-1">
            <p><strong>Location:</strong> 1 LAUTECH Road, Ogbomoso</p>
            <p><strong>Capacity:</strong> 34 Executive Rooms | <strong>Transport:</strong> ~30 min to Ilorin Airport, 5 min to LAUTECH Teaching Hospital</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <Hotel className="w-16 h-16 text-slate-400" />
                </div>
                {hotel.badge && (
                  <Badge className="absolute top-3 right-3 bg-primary text-white">
                    {hotel.badge}
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">{hotel.name}</CardTitle>
                    <div className="flex items-center mt-1">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({hotel.rating}/5)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    {hotel.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {hotel.originalPrice}
                      </div>
                    )}
                    <div className="text-2xl font-bold text-primary">{hotel.price}</div>
                    <div className="text-xs text-muted-foreground">per night</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hotel.distance}
                </div>
                
                <p className="text-sm text-muted-foreground">{hotel.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((Icon, index) => (
                    <div key={index} className="flex items-center bg-slate-100 rounded-full px-3 py-1">
                      <Icon className="w-4 h-4 text-primary mr-1" />
                      <span className="text-xs">{hotel.features[index]}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handleHotelBooking(hotel.id, parseInt(hotel.price.replace('₦', '').replace(',', '')), hotel.name)}
                  disabled={isLoading === hotel.id}
                >
                  {isLoading === hotel.id ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay with PalmPay - {hotel.price}/night
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Direct Hotel Reservations</h3>
                <p className="text-muted-foreground mb-6">
                  Contact The Willows Nest Hotel directly for special requests, group bookings, or inquiries about your reservation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
                  <div className="text-left bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      Phone
                    </h4>
                    <p className="text-sm text-muted-foreground">09066100303</p>
                    <p className="text-sm text-muted-foreground">07047363373</p>
                  </div>
                  <div className="text-left bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      Email
                    </h4>
                    <p className="text-sm text-muted-foreground break-all">reservations.ogb@thewillowshotels.com</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Mention "MEDFINTECH Conference 2026" when booking for priority service
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}