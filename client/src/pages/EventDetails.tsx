import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, Mic, Coffee, Award, BookOpen } from "lucide-react";

export default function EventDetails() {
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

  const scheduleDay2 = [
    { time: "8:30 AM", title: "Continental Breakfast", type: "networking", speaker: "" },
    { time: "9:30 AM", title: "Keynote: Sustainable Business Practices", type: "keynote", speaker: "Dr. Alex Chen" },
    { time: "11:00 AM", title: "Coffee Break", type: "break", speaker: "" },
    { time: "11:30 AM", title: "Breakout Sessions (Choose 1 of 3)", type: "workshop", speaker: "Various" },
    { time: "1:00 PM", title: "Award Ceremony Lunch", type: "networking", speaker: "" },
    { time: "2:30 PM", title: "Closing Keynote: Looking Ahead", type: "keynote", speaker: "Robert Kim" },
    { time: "4:00 PM", title: "Farewell Reception", type: "networking", speaker: "" },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'keynote': return <Mic className="w-4 h-4" />;
      case 'panel': return <Users className="w-4 h-4" />;
      case 'workshop': return <BookOpen className="w-4 h-4" />;
      case 'networking': return <Coffee className="w-4 h-4" />;
      case 'break': return <Clock className="w-4 h-4" />;
      case 'discussion': return <Users className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      keynote: 'bg-primary text-white',
      panel: 'bg-blue-500 text-white',
      workshop: 'bg-green-500 text-white',
      networking: 'bg-orange-500 text-white',
      break: 'bg-gray-500 text-white',
      discussion: 'bg-purple-500 text-white',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-24 md:pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-10 h-10 md:w-12 md:h-12 text-primary mr-3 md:mr-4" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Event Details</h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Everything you need to know about MEDFINTECH CONFERENCE 2026 - Official Launch of Africa's Largest Telemedicine Platform.
          </p>
        </div>

        {/* Event Overview */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <Card>
            <CardContent className="p-4 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary mr-3 md:mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Date</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">Saturday, 7th March 2026</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary mr-3 md:mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Time</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">9:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary mr-3 md:mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">Venue</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">The Assembly, Ogbomoso, Oyo State</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Conference Schedule - Saturday, 7th March 2026</h2>
            <div className="space-y-4">
              {scheduleDay1.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="text-lg font-mono font-semibold text-primary min-w-[80px]">
                          {item.time}
                        </div>
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(item.type)}
                          <Badge className={getTypeBadge(item.type)}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          {item.speaker && (
                            <p className="text-muted-foreground mt-1">
                              Speaker: {item.speaker}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    All keynote and breakout sessions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Welcome and closing receptions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Networking lunches and coffee breaks
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Conference materials and swag bag
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Digital access to presentation slides
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Venue Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">
                      Grand Convention Center<br />
                      123 Conference Drive<br />
                      Downtown, ST 12345
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Parking</h4>
                    <p className="text-muted-foreground">
                      Complimentary parking available on-site
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Map & Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}