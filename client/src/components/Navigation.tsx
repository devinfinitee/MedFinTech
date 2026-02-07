import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AirCambridgeLogo from "@/components/AirCambridgeLogo";

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
    { path: "/about", label: "About" },
    { path: "/booking", label: "Services" },
    { path: "/passport-booking", label: "Passport" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-500 ${
        isScrolled 
          ? "bg-black shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
          : "bg-black/80 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-22 lg:h-24 gap-2 md:gap-4">
          <Link href="/" data-testid="link-home" className="flex items-center min-w-0 flex-shrink overflow-hidden pr-2 py-2">
            <AirCambridgeLogo
              showTagline
              className={`transition-all duration-400 ease-out will-change-transform
                ${hasMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}
                ${isScrolled ? "md:scale-[0.97]" : "md:scale-100"}
                hover:scale-[1.01] md:hover:scale-[1.01]
              `}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-${link.label.toLowerCase()}`}>
                <span
                  className={`text-sm font-semibold transition-all cursor-pointer relative group ${
                    location === link.path
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    location === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </span>
              </Link>
            ))}
          </div>

          <Button
            variant="default"
            className="hidden md:inline-flex font-semibold"
            data-testid="button-book-jet"
            asChild
          >
            <Link href="/booking">Request Service</Link>
          </Button>

          <button
            className="md:hidden text-white hover:text-primary transition-colors p-2 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className={`block py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
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
              <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                Request Service
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
