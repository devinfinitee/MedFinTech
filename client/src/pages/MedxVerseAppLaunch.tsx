import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Smartphone, 
  Heart, 
  Brain, 
  Calendar, 
  Pill, 
  TestTube, 
  CreditCard, 
  Shield, 
  BookOpen,
  Users,
  Stethoscope,
  Building2,
  TrendingUp,
  Globe,
  CheckCircle,
  Play,
  Download,
  Star,
  Zap
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MedxVerseAppLaunch() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) {
      const elements = Array.from(headerRef.current.children);
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    { icon: Stethoscope, title: "24/7 Teleconsultation", description: "Connect with licensed medical professionals anytime" },
    { icon: Brain, title: "AI-Powered Symptom Checker", description: "Lexi Health Assistant for intelligent health guidance" },
    { icon: Calendar, title: "Appointment Booking", description: "Seamless scheduling and management system" },
    { icon: Pill, title: "Digital Prescriptions", description: "Electronic prescriptions and refill requests" },
    { icon: TestTube, title: "Laboratory Test Booking", description: "Easy lab test scheduling and result management" },
    { icon: CreditCard, title: "Payment Integration", description: "Insurance and digital payment solutions" },
    { icon: Shield, title: "Secure Profile Management", description: "Protected patient data and privacy" },
    { icon: BookOpen, title: "Health Education", description: "Preventive care resources and health literacy" },
  ];

  const targetAudience = [
    { 
      icon: Stethoscope, 
      title: "Healthcare Professionals", 
      description: "Seeking digital expansion and telemedicine integration" 
    },
    { 
      icon: Building2, 
      title: "Hospitals & Clinics", 
      description: "Interested in modern telemedicine integration systems" 
    },
    { 
      icon: TrendingUp, 
      title: "Investors", 
      description: "Exploring health-tech opportunities and partnerships" 
    },
    { 
      icon: CreditCard, 
      title: "Fintech Institutions", 
      description: "Interested in health payment systems integration" 
    },
    { 
      icon: Users, 
      title: "Students & Innovators", 
      description: "Passionate about digital healthcare transformation" 
    },
    { 
      icon: Globe, 
      title: "Policy Stakeholders", 
      description: "Interested in scalable healthcare access solutions" 
    },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Hero Section */}
        <section ref={headerRef} className="mb-20 md:mb-24 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mb-6 animate-pulse">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white animate-bounce">
                  🚀 LAUNCH
                </Badge>
              </div>
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-green-700 bg-clip-text text-transparent">
            MedxVerse App Launch
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-muted-foreground">
            Officially Launching Africa's Largest Telemedicine Platform
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
            At MedFintech Conference 2026, we are proud to unveil a groundbreaking milestone in African healthcare 
            innovation — the official launch of the MedxVerse App, a next-generation telemedicine and virtual care 
            platform designed to transform healthcare access across Nigeria and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white font-semibold px-8">
              <Play className="w-5 h-5 mr-2" />
              Watch Live Demo
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
              <Download className="w-5 h-5 mr-2" />
              Get Early Access
            </Button>
          </div>
        </section>

        {/* Mission Statement */}
        <section ref={(el) => (sectionRefs.current[0] = el)} className="mb-20 md:mb-24">
          <div className="bg-gradient-to-br from-primary/5 to-green-50 rounded-3xl p-8 md:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-primary">
                Why MedxVerse Was Created
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Across Africa, millions of people face barriers to healthcare access — long queues, geographical 
                distance, financial limitations, and delayed consultations. For many families, accessing timely 
                medical care remains a challenge.
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-xl font-medium text-gray-700 leading-relaxed">
                  To remove the barriers between patients and quality healthcare through digital innovation 
                  and financial integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={(el) => (sectionRefs.current[1] = el)} className="mb-20 md:mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              What MedxVerse Offers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              An integrated telemedicine ecosystem designed for modern healthcare delivery, connecting patients, 
              doctors, laboratories, pharmacies, and financial systems within one secure digital platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Launch Significance */}
        <section ref={(el) => (sectionRefs.current[2] = el)} className="mb-20 md:mb-24">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                The Significance of This Launch
              </h2>
              <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
                Launching MedxVerse at MedFintech Conference 2026 symbolizes the convergence of three critical pillars:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">Medicine</h3>
                <p className="text-slate-300">Delivering professional healthcare services with clinical excellence</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Finance</h3>
                <p className="text-slate-300">Ensuring sustainable and inclusive healthcare payment systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Technology</h3>
                <p className="text-slate-300">Leveraging AI, automation, and digital infrastructure for efficiency</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl font-medium text-slate-200">
                This launch demonstrates how innovation can create scalable healthcare solutions for 
                communities, institutions, and governments.
              </p>
            </div>
          </div>
        </section>

        {/* Launch Experience */}
        <section ref={(el) => (sectionRefs.current[3] = el)} className="mb-20 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                What Attendees Will Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                During the official launch session, you'll witness the future of African healthcare unfold
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Witness a live demonstration of the MedxVerse platform",
                "Experience the AI chatbot (Lexi) in action", 
                "Understand the backend integration system",
                "Learn about partnership and institutional onboarding opportunities",
                "Explore investor collaboration and growth strategies"
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-gradient-to-r from-primary/5 to-transparent rounded-2xl p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                <CardContent className="p-8">
                  <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-orange-800">
                    The Journey Behind MedxVerse
                  </h3>
                  <p className="text-orange-700">
                    The launch presentation will highlight the challenges, the resilience, 
                    and the vision driving the platform forward.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section ref={(el) => (sectionRefs.current[4] = el)} className="mb-20 md:mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Who Should Pay Attention
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MedxVerse is designed not only for individuals but for institutions and systems 
              ready to modernize healthcare delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4 text-gray-800">{audience.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section ref={(el) => (sectionRefs.current[5] = el)} className="mb-20 md:mb-24">
          <div className="bg-gradient-to-br from-primary to-green-600 rounded-3xl p-8 md:p-16 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">
                A Movement, Not Just a Product
              </h2>
              
              <div className="space-y-4 text-xl md:text-2xl font-medium mb-12 leading-relaxed">
                <p>This is more than software.</p>
                <p className="text-green-100">It is infrastructure.</p>
                <p className="text-blue-100">It is opportunity.</p>
                <p className="text-yellow-100">It is inclusion.</p>
                <p className="text-pink-100">It is the future of healthcare delivery in Africa.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Be Part of the Launch
                </h3>
                <p className="text-xl mb-8 text-white/90">
                  Join us at MedFintech Conference 2026 as we officially unveil MedxVerse to the world.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-lg">
                  <Badge variant="secondary" className="px-6 py-2 text-lg">Download</Badge>
                  <Badge variant="secondary" className="px-6 py-2 text-lg">Partner</Badge>
                  <Badge variant="secondary" className="px-6 py-2 text-lg">Invest</Badge>
                  <Badge variant="secondary" className="px-6 py-2 text-lg">Collaborate</Badge>
                  <Badge variant="secondary" className="px-6 py-2 text-lg">Share</Badge>
                </div>
              </div>

              <div className="text-2xl md:text-3xl font-bold">
                The future of telemedicine begins here. 🚀
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-slate-50 to-white border-2 border-primary/20">
            <CardContent className="p-8">
              <Star className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
              <p className="text-muted-foreground mb-8">
                Register for MedFintech Conference 2026 and witness the official MedxVerse App Launch
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Reserve Your Seat
                </Button>
                <Button size="lg" variant="outline">
                  Partnership Inquiry
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}