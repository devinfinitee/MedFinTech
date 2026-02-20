import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Users, Mic, Award, Linkedin, Twitter, Crown } from "lucide-react";
import amosImage from "../assets/amos-franklin.jpg";
import zainabImage from "../assets/zainab-abdulsalam.JPG";
import amooImage from "../assets/amoo-yetunde.jpg";
import boluwatifeImage from "../assets/boluwatife-agboola.JPG";
import ayodejiImage from "../assets/ayodeji-adelabu.jpg";
import adeyeyeImage from "../assets/adeyeye-enitan.JPG";
import obaGhandiImage from "../assets/oba-ghandi.JPG";
import sundayOladapoImage from "../assets/sunday-oladapo.JPG";
import ogunkolaImage from "../assets/ogunkola-ifeoluwa.jpg";

export default function SpecialGuests() {
  const royalFathers = [
    {
      name: "His Imperial Majesty, Oba Adeyeye Enitan Babatunde Ogunwusi, Ojaja II",
      title: "The Ooni of Ife",
      company: "Traditional Institution",
      bio: "His Imperial Majesty brings a unique perspective on how traditional institutions can serve as catalysts for digital transformation in healthcare and economic development across Africa.",
      session: "Traditional Institutions as Catalysts for Digital Health and Economic Transformation",
      time: "9:30 AM",
      image: adeyeyeImage,
      type: "Royal Address I",
    },
    {
      name: "His Imperial Majesty, Oba Ghandi Afọlábí Oladunni Ọláoyè, Orumógege III",
      title: "The Soun of Ogbomoso",
      company: "Traditional Institution",
      bio: "His Imperial Majesty champions youth empowerment and innovation, providing visionary leadership on the role of young Africans in shaping the continent's digital economy.",
      session: "Empowering the Next Generation: Youth, Innovation, and the Future of Africa's Digital Economy",
      time: "9:45 AM",
      image: obaGhandiImage,
      type: "Royal Address II",
    },
    {
      name: "His Royal Majesty, Oba Sunday Oladapo Oyediran, Lagbami Osekun III",
      title: "Traditional Ruler",
      company: "Traditional Institution",
      bio: "His Royal Majesty offers invaluable insights on how traditional leadership can drive community health initiatives, financial inclusion, and sustainable development in local communities.",
      session: "Community Health, Financial Inclusion, and the Role of Leadership in Sustainable Development",
      time: "Royal Address",
      image: sundayOladapoImage,
      type: "Royal Address",
    },
  ];

  const keynoteGuests = [
    {
      name: "Amos Franklin Momodu",
      title: "Chief Executive Officer",
      company: "MedxVerse",
      field: "Technology/Tech Industry",
      bio: "I am passionate about leveraging technology and artificial intelligence to develop innovative solutions that addresses real-world challenges and drive meaningful social impact, additionally, i take pride in mentoring emerging entrepreneurs and contributing to thought leadership through public speaking.",
      interests: "Technology innovation, AI solutions, mentoring entrepreneurs, thought leadership, public speaking",
      session: "AI, Data, and Trust: Building Secure Digital Health Systems in Africa",
      time: "10:30 AM",
      achievements: ["CEO of MedxVerse", "AI & Healthcare Innovation Expert", "Tech Entrepreneur"],
      image: amosImage,
      email: "contact@medxverse.com",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Dr. Zainab Abdulsalam",
      title: "Medical Doctor & Digital Health Strategist",
      company: "Women's Health Advocate",
      bio: "Zainab Abdulsalam is a medical doctor, women's health advocate, and health content strategist passionate about making complex medical topics relatable and actionable. She's trained 50+ health writers and is building a movement to elevate health content standards across Africa. Through telemedicine advocacy, content strategy, and writer education, she's working to ensure that Africa's digital health revolution is built on medical integrity.",
      session: "Telemedicine Platforms in Africa: From Concept to Community Impact",
      time: "1:30 PM",
      achievements: ["Medical Doctor (MBBS)", "Health Content Strategist", "Telemedicine Advocate"],
      image: zainabImage,
      email: "zainabsalamthewriter@gmail.com",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Archbishop Gbenga Ayansola (JP)",
      title: "Special Guest Speaker",
      company: "Community Leader",
      bio: "Distinguished religious leader and justice of peace, bringing moral and ethical perspectives to healthcare innovation.",
      session: "Special Guest Address",
      time: "3:00 PM",
      achievements: ["Archbishop", "Justice of Peace", "Community Leader"],
      image: "GA",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  const panelGuests = [
    {
      name: "Boluwatife Agboola",
      title: "CEO",
      company: "Torchlife Africa",
      expertise: "The 'Digital Wallet' for Health: Making Care Affordable in Nigeria",
      bio: "Boluwatife Agboola is a software engineer and impact-driven technologist focused on building scalable digital solutions. He is the founder of TorchLife, a healthcare crowdfunding initiative focused on supporting critical medical needs through transparent, technology-driven fundraising.",
      image: boluwatifeImage,
      email: "bolutifegboola@gmail.com",
    },
    {
      name: "Olushola Adeoye",
      title: "CEO",
      company: "CallMate AI",
      expertise: "AI-Driven Customer Experience in Healthcare & Fintech",
      bio: "Specializing in SAAS, Machine Learning and AI with deep interests in Gaming and Augmented Reality Fintech. Leading innovations in AI-driven customer experience solutions.",
      discipline: "SAAS, Machine Learning and AI",
      interests: "Gaming, Augmented Reality Fintech",
      image: "OA",
    },
    {
      name: "Adelabu Ayodeji Adetunji",
      title: "SME & Startup Growth Lead",
      company: "Flutterwave",
      field: "Fintech/Business Development",
      expertise: "Driving Financial Inclusion and Seamless Payment Solutions in Healthcare and Emerging Markets",
      professionalInterests: "Inclusive development, data analysis",
      personalInterests: "Continuing education, board games",
      image: ayodejiImage,
      email: "ayodeji.adelabu@flutterwavego.com",
      alternateEmail: "ayodejiadelabu@yahoo.com",
    },
    {
      name: "Amoo Yetunde Ololade",
      title: "Global Health Nurse",
      company: "Nursing (Global Health)",
      expertise: "Leadership, Innovation, and Entrepreneurship in Healthcare",
      image: amooImage,
      email: "amooyetunde@rocketmail.com",
    },
    {
      name: "Ogunkola Ifeoluwa E.",
      title: "MC (Master of Ceremonies)",
      company: "Hadassah - The Compere Without Comparison",
      expertise: "Event Hosting & Coordination",
      role: "Conference Compere",
      image: ogunkolaImage,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 md:pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-10 h-10 md:w-12 md:h-12 text-primary mr-3 md:mr-4" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Featured Speakers</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Meet our exceptional lineup of healthcare professionals, fintech innovators, and industry leaders driving the future of telemedicine in Africa.
          </p>
        </div>

        {/* Royal Fathers - Fathers of the Day */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <Crown className="w-7 h-7 md:w-8 md:h-8 text-amber-600 mr-2 md:mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-amber-800">Fathers of the Day</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {royalFathers.map((royal) => (
              <Card key={royal.name} className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-amber-200">
                <CardHeader className="text-center pb-4 bg-gradient-to-br from-amber-50 to-yellow-50">
                  <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border-4 border-amber-300 shadow-lg">
                    <img 
                      src={royal.image} 
                      alt={royal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge className="bg-amber-600 text-white hover:bg-amber-700 mb-2">
                    {royal.type}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">{royal.name}</CardTitle>
                  <p className="text-amber-700 font-semibold text-sm">{royal.title}</p>
                  <p className="text-muted-foreground text-xs">{royal.company}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{royal.bio}</p>
                  
                  <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                    <div className="flex items-start text-sm text-amber-800 font-semibold mb-1">
                      <Crown className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{royal.session}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground ml-6">
                      <Calendar className="w-3 h-3 mr-1" />
                      {royal.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Keynote Speakers */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <Mic className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold">Keynote Speakers</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {keynoteGuests.map((guest) => (
              <Card key={guest.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  {typeof guest.image === 'string' && guest.image.length === 2 ? (
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {guest.image}
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={guest.image} 
                        alt={guest.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardTitle className="text-xl">{guest.name}</CardTitle>
                  <p className="text-primary font-semibold">{guest.title}</p>
                  <p className="text-muted-foreground">{guest.company}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{guest.bio}</p>
                  
                  <div className="bg-primary/5 rounded-lg p-3">
                    <div className="flex items-center text-sm text-primary font-semibold mb-1">
                      <Mic className="w-4 h-4 mr-2" />
                      {guest.session}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {guest.time}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Key Achievements
                    </h4>
                    <div className="space-y-1">
                      {guest.achievements.map((achievement, index) => (
                        <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Linkedin className="w-4 h-4 mr-1" />
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Twitter className="w-4 h-4 mr-1" />
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Panel Speakers */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold">Industry Leaders & Experts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {panelGuests.map((guest) => (
              <Card key={guest.name} className="text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  {typeof guest.image === 'string' && guest.image.length === 2 ? (
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3">
                      {guest.image}
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden">
                      <img 
                        src={guest.image} 
                        alt={guest.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardTitle className="text-lg">{guest.name}</CardTitle>
                  <p className="text-sm text-primary font-semibold">{guest.title}</p>
                  <p className="text-xs text-muted-foreground">{guest.company}</p>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                    {guest.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Networking Opportunities */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Meet the Speakers</h2>
                <p className="text-muted-foreground mb-6">
                  Don't miss exclusive opportunities to connect with our speakers during dedicated networking sessions, 
                  Q&A segments, and the VIP reception.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold">VIP Reception</h3>
                    <p className="text-sm text-muted-foreground">Exclusive access for premium ticket holders</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold">Q&A Sessions</h3>
                    <p className="text-sm text-muted-foreground">Interactive discussions after each keynote</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold">One-on-One</h3>
                    <p className="text-sm text-muted-foreground">Private meetings available for VIP attendees</p>
                  </div>
                </div>
                
                <Button size="lg">
                  Upgrade to VIP Access
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Join the Conversation</h2>
              <p className="text-muted-foreground mb-6">
                Be part of the dialogue that's shaping the future of our industry. Register now to learn from these incredible speakers.
              </p>
              <Button size="lg" className="mr-4">
                Register Now
              </Button>
              <Button size="lg" variant="outline">
                View Full Schedule
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}