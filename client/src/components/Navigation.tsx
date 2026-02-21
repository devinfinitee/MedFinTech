import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import EventLogo from "@/components/MedFintechLogo";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Trigger a gentle entrance animation once on mount
    const timeout = window.setTimeout(() => {
      setHasMounted(true);
    }, 50);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/registration", label: "Registration" },
    { path: "/ticketing", label: "Ticketing" },
    { path: "/accommodation", label: "Hotel Accommodation" },
    { path: "/event-details", label: "Event Details" },
    { path: "/medxverse-launch", label: "MedxVerse Launch" },
    { path: "/partnerships", label: "Partnerships" },
    { path: "/special-guests", label: "Special Guests" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] border-b border-white/10 transition-all duration-500 ${
        isScrolled 
          ? "bg-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
          : "bg-slate-900/90 backdrop-blur-xl"
      }`}
    >
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16 md:h-20 px-3 sm:px-5 md:px-6 lg:px-10">
          <Link href="/" data-testid="link-home" className="flex items-center flex-shrink-0 mr-4 md:mr-6">
            <EventLogo
              className={`transition-opacity duration-300 ease-out
                ${hasMounted ? "opacity-100" : "opacity-0"}
              `}
            />
          </Link>

          <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 min-w-0 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase()}`}>
                <span
                  className={`text-sm lg:text-base font-semibold transition-all duration-300 cursor-pointer relative group px-1 py-2 whitespace-nowrap ${
                    location === link.path
                      ? "text-primary"
                      : "text-white/90 hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 rounded-full ${
                    location === link.path ? 'w-full shadow-[0_0_8px_rgba(56,180,73,0.6)]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(56,180,73,0.6)]'
                  }`}></span>
                </span>
              </Link>
            ))}
          </div>

          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-flex font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex-shrink-0 ml-4 text-sm lg:text-base px-4 lg:px-6"
            data-testid="button-register-event"
            asChild
          >
            <Link href="/registration">Register Now</Link>
          </Button>

          <button
            className="md:hidden text-white hover:text-primary transition-colors p-2 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className={`block py-3 px-4 rounded-lg text-base font-semibold transition-all ${
                    location === link.path 
                      ? "text-primary bg-primary/10" 
                      : "text-white hover:text-primary hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Button variant="default" className="w-full font-semibold" size="lg" asChild>
              <Link href="/registration" onClick={() => setIsMobileMenuOpen(false)}>
                Register Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
