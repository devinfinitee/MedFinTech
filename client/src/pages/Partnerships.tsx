import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Star, Building, Award, Users, Target } from "lucide-react";
import accessLogo from "../assets/access.PNG";
import ubaLogo from "../assets/uba.PNG";
import polarisLogo from "../assets/polaris.PNG";
import assemblyLogo from "../assets/the  assembloy.PNG";
import fcmbLogo from "../assets/fcmb.PNG";
import firstbankLogo from "../assets/firstbank.PNG";
import zenithLogo from "../assets/zenith.PNG";
import lumineventLogo from "../assets/luminevent.PNG";
import tixafricaLogo from "../assets/tixafrica.PNG";
import tajahqLogo from "../assets/tajahq.PNG";
import heirsLogo from "../assets/heirs insurance.PNG";
import palmpayLogo from "../assets/palmpay.PNG";

export default function Partnerships() {
  const sponsorshipTiers = [
    {
      tier: "Platinum",
      price: "₦2,000,000",
      color: "bg-purple-500",
      features: [
        "Premium booth location",
        "5-minute keynote speaking slot",
        "Logo on all conference materials",
        "10 complimentary registrations",
        "VIP networking access",
        "Post-event attendee contact list",
        "Digital marketing package",
        "Co-branding on platform launch",
      ],
    },
    {
      tier: "Gold",
      price: "₦1,200,000",
      color: "bg-yellow-500",
      features: [
        "Booth in main exhibition area",
        "Panel discussion opportunity",
        "Logo on website and signage",
        "6 complimentary registrations",
        "Lunch break sponsor recognition",
        "Social media mentions",
        "Newsletter inclusion",
      ],
    },
    {
      tier: "Silver",
      price: "₦600,000",
      color: "bg-gray-400",
      features: [
        "Standard exhibition space",
        "Logo on conference materials",
        "4 complimentary registrations",
        "Coffee break sponsorship",
        "Website listing",
        "Conference app inclusion",
      ],
    },
  ];

  const partners = [
    {
      name: "Access Bank",
      tier: "Platinum",
      logo: accessLogo,
      description: "Leading financial institution supporting healthcare innovation",
    },
    {
      name: "UBA",
      tier: "Platinum",
      logo: ubaLogo,
      description: "United Bank for Africa - Pan-African financial services",
    },
    {
      name: "Polaris Bank",
      tier: "Gold",
      logo: polarisLogo,
      description: "Digital banking solutions for healthcare providers",
    },
    {
      name: "The Assembly",
      tier: "Platinum",
      logo: assemblyLogo,
      description: "Official conference venue and event management partner",
    },
    {
      name: "FCMB",
      tier: "Gold",
      logo: fcmbLogo,
      description: "First City Monument Bank - Banking excellence",
    },
    {
      name: "First Bank",
      tier: "Platinum",
      logo: firstbankLogo,
      description: "Nigeria's premier banking institution",
    },
    {
      name: "Zenith Bank",
      tier: "Platinum",
      logo: zenithLogo,
      description: "Leading financial services provider in Nigeria",
    },
    {
      name: "MedxLearn",
      tier: "Gold",
      logo: "M",
      description: "Healthcare education and training platform",
    },
    {
      name: "Luminevent",
      tier: "Silver",
      logo: lumineventLogo,
      description: "Professional event management and production",
    },
    {
      name: "Tix Africa",
      tier: "Silver",
      logo: tixafricaLogo,
      description: "Ticketing solutions for events across Africa",
    },
    {
      name: "TajaHq",
      tier: "Silver",
      logo: tajahqLogo,
      description: "Digital marketing and brand management",
    },
    {
      name: "Heirs Insurance",
      tier: "Gold",
      logo: heirsLogo,
      description: "Comprehensive insurance solutions for healthcare",
    },
    {
      name: "Kinora",
      tier: "Silver",
      logo: "K",
      description: "Technology and innovation partner",
    },
    {
      name: "Wawewo",
      tier: "Silver",
      logo: "W",
      description: "Digital solutions and creative services",
    },
    {
      name: "PalmPay",
      tier: "Platinum",
      logo: palmpayLogo,
      description: "Official payment partner - digital payment solutions",
    },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'bg-purple-500';
      case 'Gold': return 'bg-yellow-500';
      case 'Silver': return 'bg-gray-400';
      default: return 'bg-primary';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 md:pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Handshake className="w-10 h-10 md:w-12 md:h-12 text-primary mr-3 md:mr-4" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Partnerships</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Partner with MEDFINTECH CONFERENCE 2026 and showcase your healthcare innovation to Africa's leading medical and fintech professionals.
          </p>
        </div>

        {/* Sponsorship Opportunities */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Sponsorship Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sponsorshipTiers.map((tier) => (
              <Card key={tier.tier} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-2 ${tier.color}`}></div>
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className={`w-8 h-8 text-white p-2 rounded-full ${tier.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{tier.tier}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{tier.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg">
                    Become a {tier.tier} Sponsor
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Partners */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Valued Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {partners.map((partner) => (
              <Card key={partner.name} className="hover:shadow-md transition-shadow">
                <CardHeader className="space-y-3 pb-3">
                  <div className="flex items-center justify-center">
                    {typeof partner.logo === 'string' && partner.logo.length === 1 ? (
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl md:text-3xl">
                        {partner.logo}
                      </div>
                    ) : (
                      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <CardTitle className="text-base md:text-lg mb-2">{partner.name}</CardTitle>
                    <Badge className={`${getTierColor(partner.tier)} text-white text-xs`}>
                      {partner.tier}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs md:text-sm text-muted-foreground text-center">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6 md:p-8">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Why Partner With Us?</h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Join hundreds of industry leaders in creating meaningful connections and driving innovation forward.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Users className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Reach 500+ Healthcare Professionals</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Connect with medical practitioners, fintech experts, and healthcare innovators.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Target className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Healthcare Innovation Focus</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Position your brand at the forefront of Africa's telemedicine revolution.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <Building className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Brand Recognition</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Build lasting brand awareness through multi-channel marketing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Partner With Us?</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                Let's discuss how we can create a customized partnership package that meets your specific goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto">
                  Download Partnership Package
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}