import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "@/assets/img-1.jpg";
import img2 from "@/assets/img-2.jpg";
import img3 from "@/assets/img-3.jpg";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  Stethoscope,
  Smartphone,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Heart,
  Rocket,
  Play,
  Star,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const launchRef = useRef(null);
  const speakersRef = useRef(null);
  const expectRef = useRef(null);
  const royalRef = useRef(null);

  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();

    // Additional refresh after content loads
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    // Hero section animations - with safety checks
    const ctx = gsap.context(() => {
      
      // Only animate if elements exist
      if (document.querySelector(".hero-badge")) {
        gsap.from(".hero-badge", {
          y: -30,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
        });
      }

      if (document.querySelector(".hero-title")) {
        gsap.from(".hero-title", {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: "power2.out",
        });
      }

      if (document.querySelector(".hero-subtitle")) {
        gsap.from(".hero-subtitle", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.6,
          ease: "power2.out",
        });
      }

      if (document.querySelector(".hero-buttons")) {
        gsap.from(".hero-buttons", {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          delay: 0.8,
          ease: "back.out(1.4)",
        });
      }

      if (document.querySelector(".hero-detail")) {
        gsap.from(".hero-detail", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          delay: 1,
          ease: "power2.out",
        });
      }

      // Background parallax effect - subtle and smooth
      if (document.querySelector(".hero-bg")) {
        gsap.to(".hero-bg", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Feature section title animation
      if (document.querySelector(".features-title")) {
        gsap.from(".features-title", {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // Feature cards scroll animation - fast and responsive
      if (document.querySelector(".feature-card")) {
        gsap.from(".feature-card", {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
          y: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power1.out",
        });
      }

      // MedxVerse launch section animations - synchronized
      if (document.querySelector(".launch-badge")) {
        gsap.from(".launch-badge", {
          scrollTrigger: {
            trigger: launchRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
          scale: 0.5,
          rotation: 180,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }

      if (document.querySelector(".launch-title")) {
        gsap.from(".launch-title", {
          scrollTrigger: {
            trigger: launchRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      }

      if (document.querySelector(".launch-feature")) {
        gsap.from(".launch-feature", {
          scrollTrigger: {
            trigger: launchRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
          y: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power1.out",
        });
      }

      // Floating animation for background circles - smooth and subtle
      if (document.querySelector(".float-circle")) {
        gsap.to(".float-circle", {
          y: "+=20",
          x: "+=15",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            each: 0.5,
            from: "random",
          },
        });
      }

      // Speaker cards animation
      if (document.querySelector(".speaker-card")) {
        gsap.from(".speaker-card", {
          scrollTrigger: {
            trigger: speakersRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        });
      }

      // Add continuous pulse animation to primary buttons
      if (document.querySelector(".pulse-button")) {
        gsap.to(".pulse-button", {
          boxShadow: "0 0 20px rgba(56, 180, 73, 0.6)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // What to Expect section animations
      if (document.querySelector(".expect-title")) {
        gsap.from(".expect-title", {
          scrollTrigger: {
            trigger: expectRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (document.querySelector(".expect-card")) {
        gsap.from(".expect-card", {
          scrollTrigger: {
            trigger: expectRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
            markers: false,
          },
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        });
      }

      // Royal Fathers section animations
      if (document.querySelector(".royal-title")) {
        gsap.from(".royal-title", {
          scrollTrigger: {
            trigger: royalRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (document.querySelector(".royal-card")) {
        gsap.from(".royal-card", {
          scrollTrigger: {
            trigger: royalRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
            markers: false,
          },
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      // Parallax effect for background images
      const bgImages = document.querySelectorAll(".parallax-img");
      bgImages.forEach((img) => {
        gsap.to(img, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Add gentle hover effect animation for cards
      document.querySelectorAll(".animate-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -8,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

    }, heroRef);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: Stethoscope,
      title: "Healthcare Innovation",
      description: "Discover the latest advances in telemedicine and digital health solutions transforming African healthcare.",
    },
    {
      icon: Smartphone,
      title: "Fintech Integration",
      description: "Explore how financial technology is making healthcare more accessible and affordable across Africa.",
    },
    {
      icon: TrendingUp,
      title: "Platform Launch",
      description: "Witness the official launch of Africa's largest telemedicine platform at this historic event.",
    },
    {
      icon: Users,
      title: "Expert Networking",
      description: "Connect with healthcare professionals, fintech innovators, and industry leaders shaping the future.",
    },
  ];

  const speakers = [
    { name: "Amos Franklin Momodu", title: "CEO, MedxVerse" },
    { name: "Dr. Zainab Abdulsalam", title: "Medical Doctor & Digital Health Strategist" },
    { name: "Boluwatife Agboola", title: "CEO, Torchlife Africa" },
    { name: "Amoo Yetunde Ololade", title: "Global Health Nurse" },
    { name: "Adelabu Ayodeji Adetunji", title: "SME Growth Lead, Flutterwave" },
    { name: "Olushola Adeoye", title: "CEO, CallMate AI" },
  ];

  return (
    <div className="min-h-screen" ref={heroRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-28 md:pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 hero-bg">
          <img 
            src={img1} 
            alt="MEDFINTECH Conference" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="hero-badge mb-6 bg-primary text-white text-lg px-4 py-2" variant="secondary">
              Saturday, 7th March 2026
            </Badge>
            <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 leading-tight">
              MEDFINTECH
              <br />
              <span className="text-primary">CONFERENCE 2026</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl mb-4 text-slate-300">
              Official Launch of Africa's Largest Telemedicine Platform
            </p>
            <p className="hero-subtitle text-lg mb-8 text-slate-400 max-w-2xl mx-auto">
              Reimagining Healthcare Access Through Financial Innovation
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="pulse-button text-lg px-8 py-3 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105" asChild>
                <Link href="/registration">Register Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/event-details">View Schedule</Link>
              </Button>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="hero-detail flex items-center justify-center space-x-3 hover:scale-105 transition-transform">
                <Calendar className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Date</div>
                  <div className="text-slate-400">March 7, 2026</div>
                </div>
              </div>
              <div className="hero-detail flex items-center justify-center space-x-3 hover:scale-105 transition-transform">
                <Clock className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Time</div>
                  <div className="text-slate-400">9:00 AM - 4:00 PM</div>
                </div>
              </div>
              <div className="hero-detail flex items-center justify-center space-x-3 hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Venue</div>
                  <div className="text-slate-400">The Assembly, Ogbomoso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div className="features-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Conference</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MEDFINTECH Conference 2026 is a landmark gathering designed to redefine healthcare delivery 
              through technology, financial inclusion, and strategic collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card animate-card group text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50 group-hover:rotate-12">
                    <feature.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MedxVerse App Launch Highlight */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-green-600 text-white relative overflow-hidden" ref={launchRef}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="float-circle absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="float-circle absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="float-circle absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Launch Badge */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Badge className="launch-badge bg-white text-primary text-lg px-6 py-3 font-bold">
                  🚀 HISTORIC LAUNCH EVENT
                </Badge>
                <div className="absolute -top-2 -right-2">
                  <Star className="w-8 h-8 text-yellow-300 animate-bounce" />
                </div>
              </div>
            </div>

            <h2 className="launch-title text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              MedxVerse App
              <br />
              <span className="text-yellow-300">Official Launch</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-6 text-green-100 font-medium">
              Africa's Largest Telemedicine Platform Goes Live
            </p>
            
            <p className="text-lg mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Witness history in the making as we officially unveil MedxVerse — a revolutionary telemedicine 
              platform designed to transform healthcare access across Nigeria and Africa. This is more than 
              an app launch; it's the beginning of a healthcare revolution.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="launch-feature bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Smartphone className="w-12 h-12 text-yellow-300 mx-auto mb-4 transition-transform duration-300 hover:rotate-12" />
                <h3 className="text-xl font-bold mb-2">24/7 Teleconsultation</h3>
                <p className="text-white/80">Connect with licensed medical professionals anytime, anywhere</p>
              </div>
              
              <div className="launch-feature bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4 transition-transform duration-300 hover:rotate-12" />
                <h3 className="text-xl font-bold mb-2">AI Health Assistant</h3>
                <p className="text-white/80">Lexi AI provides instant symptom checking and health guidance</p>
              </div>
              
              <div className="launch-feature bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Shield className="w-12 h-12 text-yellow-300 mx-auto mb-4 transition-transform duration-300 hover:rotate-12" />
                <h3 className="text-xl font-bold mb-2">Integrated Payments</h3>
                <p className="text-white/80">Seamless insurance and digital payment integration</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
                asChild
              >
                <Link href="/medxverse-launch">
                  <Rocket className="w-6 h-6 mr-2" />
                  Experience the Launch
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
                asChild
              >
                <Link href="/registration">
                  <Play className="w-6 h-6 mr-2" />
                  Watch Live Demo
                </Link>
              </Button>
            </div>

            {/* Countdown or Status */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl py-4 px-8 inline-block">
              <p className="text-lg font-semibold">
                🎯 Live demonstration at the conference • March 7, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers Preview */}
      <section className="py-20 relative overflow-hidden" ref={speakersRef}>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 z-0">
          <img 
            src={img2} 
            alt="Healthcare Innovation" 
            className="parallax-img w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Speakers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from leading voices in healthcare, fintech, AI, and entrepreneurship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="speaker-card text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {speaker.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{speaker.name}</CardTitle>
                  <p className="text-sm text-primary font-semibold">{speaker.title}</p>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/special-guests">View All Speakers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-slate-50 relative overflow-hidden" ref={expectRef}>
        {/* Background Image */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-3/4 opacity-10 z-0">
          <img 
            src={img3} 
            alt="Digital Healthcare" 
            className="parallax-img w-full h-full object-cover rounded-r-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="expect-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What to Expect</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="expect-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Platform Launch</h3>
                <p className="text-muted-foreground">
                  Official launch of Africa's largest telemedicine platform
                </p>
              </CardContent>
            </Card>

            <Card className="expect-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">HealthTech Insights</h3>
                <p className="text-muted-foreground">
                  Latest trends in digital health and AI applications
                </p>
              </CardContent>
            </Card>

            <Card className="expect-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Startup Growth</h3>
                <p className="text-muted-foreground">
                  Investment strategies and scaling healthcare startups
                </p>
              </CardContent>
            </Card>

            <Card className="expect-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Networking</h3>
                <p className="text-muted-foreground">
                  Connect with healthcare professionals and fintech leaders
                </p>
              </CardContent>
            </Card>

            <Card className="expect-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Policy Insights</h3>
                <p className="text-muted-foreground">
                  Healthcare policy transformation and regulatory updates
                </p>
              </CardContent>
            </Card>

            <Card className="expect-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Certificate</h3>
                <p className="text-muted-foreground">
                  Certificate of participation for all registered attendees
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Royal Fathers Section */}
      <section className="py-20" ref={royalRef}>
        <div className="container mx-auto px-4">
          <div className="royal-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Distinguished Royal Fathers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are honored to host distinguished traditional leaders whose presence signifies 
              the importance of innovation and development in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="royal-card text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">His Imperial Majesty</h3>
                <p className="text-primary font-semibold mb-2">Oba Ghandi Afolabi Olaolunja Oladunni Olaye</p>
                <p className="text-sm text-muted-foreground">Orumogege III</p>
              </CardContent>
            </Card>

            <Card className="royal-card text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">His Imperial Majesty</h3>
                <p className="text-primary font-semibold mb-2">Oba Adeyeye Enitan Babatunde Ogunwusi</p>
                <p className="text-sm text-muted-foreground">Ojaja II</p>
              </CardContent>
            </Card>

            <Card className="royal-card text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">His Royal Majesty</h3>
                <p className="text-primary font-semibold mb-2">Oba Sunday Olayinka Oyetade</p>
                <p className="text-sm text-muted-foreground">Lagbami Osekun III</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of this historic launch and help shape the future of healthcare in Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/registration">Register Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/ticketing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
