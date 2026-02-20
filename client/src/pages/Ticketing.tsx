import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket, CheckCircle, Clock, Star, Users, Award, AlertTriangle, CreditCard, Loader2 } from "lucide-react";
import { PalmPayService, getSuccessUrl } from '@/lib/palmpay';

export default function Ticketing() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleTicketPurchase = async (ticketId: string, amount: number, ticketName: string) => {
    // For this demo, we'll collect user data with prompts - in a real app, this would come from a form
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
        amount: amount,
        email: email,
        phone: phone,
        name: name,
        itemType: `Conference Ticket - ${ticketName}`,
        redirectUrl: getSuccessUrl('ticket', ticketId)
      });

      // Redirect to PalmPay payment page
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
      id: "regular",
      name: "Regular Package",
      price: "₦1,000",
      originalPrice: null,
      features: [
        "Official Volunteer ID Badge",
        "Digital Certificate of Volunteering",
        "Access to Volunteer Orientation",
        "Access to Exhibition Area",
        "Light Refreshment During Assigned Shift",
        "Group Photo Recognition",
      ],
      badge: "Smart & Simple",
      badgeColor: "bg-blue-500",
      description: "Perfect for students and first-time volunteers. Smart. Simple. Impactful.",
    },
    {
      id: "premium",
      name: "Premium Package",
      price: "₦5,000",
      originalPrice: null,
      features: [
        "Everything in Regular",
        "Official MedFintech Branded T-Shirt",
        "Hard Copy Certificate (Signed)",
        "Access to Selected Main Sessions",
        "Access to Networking Break",
        "Professional Photo (1 branded backdrop photo)",
        "Priority Consideration for Future Events",
      ],
      badge: "Most Popular",
      badgeColor: "bg-primary",
      description: "Professional. Visible. Elevated. For volunteers who want better access and networking.",
    },
    {
      id: "vip",
      name: "VIP Package",
      price: "₦15,000",
      originalPrice: null,
      features: [
        "Everything in Premium",
        "VIP Seating Access",
        "Special Recognition During Conference",
        "Executive Photo Opportunity with Speakers",
        "Signed Appreciation Letter from the CEO",
        "Invitation to Post-Conference Private Strategy Meetup",
        "Early Access to MedxVerse Opportunities",
      ],
      badge: "Leadership Level",
      badgeColor: "bg-purple-500",
      description: "Exclusive. Recognized. Leadership Level. For serious volunteers and emerging leaders.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 md:pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Ticket className="w-10 h-10 md:w-12 md:h-12 text-primary mr-3 md:mr-4" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Volunteer Packages</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Join the MEDFINTECH CONFERENCE 2026 team. Choose the volunteer package that fits your level of engagement and unlock exclusive benefits while making a meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {ticketTypes.map((ticket) => (
            <Card key={ticket.id} className="relative hover:shadow-lg transition-shadow">
              {ticket.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={`${ticket.badgeColor} text-white px-3 py-1`}>
                    {ticket.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold">{ticket.name}</CardTitle>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  {ticket.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {ticket.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-primary">{ticket.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{ticket.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={() => handleTicketPurchase(ticket.id, parseInt(ticket.price.replace('₦', '').replace(',', '')), ticket.name)}
                  disabled={isLoading === ticket.id}
                >
                  {isLoading === ticket.id ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay with PalmPay - {ticket.price}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold">Volunteer Access</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Volunteers who have purchased the official MedFintech Volunteer Vest automatically receive free conference entry and do not need to purchase a separate ticket.
                </p>
                <Button variant="outline" className="w-full border-green-500 text-green-700 hover:bg-green-50">
                  Learn About Volunteering
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-lg font-semibold">What Your Ticket Includes</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    Access to all conference sessions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    Entry to exhibition and innovation showcase
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    Networking opportunities
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    Conference materials
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                    Official Certificate of Participation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-slate-50 border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Ticket Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  All tickets are non-transferable.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Confirmation receipt (digital or printed) must be presented at the accreditation desk.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Ticket sales close once maximum venue capacity is reached.
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  No refunds after confirmation unless officially announced by the organizing committee.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold">Limited Seats Available</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Early registration discount available until February 28th, 2026. Secure your position at the forefront of healthcare innovation, financial inclusion, and digital transformation.
              </p>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm">Join 200+ healthcare professionals already registered</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}