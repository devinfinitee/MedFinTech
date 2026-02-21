import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { whatsappConfig, defaultContactEmail } from "@/lib/emailjs";
import MedFintechLogo from "@/components/MedFintechLogo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-8 pb-5 animate-in fade-in-50 slide-in-from-bottom-1 duration-700">
      <div className="w-full px-2 sm:px-3 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <MedFintechLogo
              className="mb-4"
            />
            <p className="text-white/80 text-sm mb-4">
              Reimagining Healthcare Access Through Financial Innovation. Join us for the official launch of Africa's largest telemedicine platform.
            </p>
            <div className="flex gap-2">
              <button className="hover-elevate active-elevate-2 p-2 rounded" data-testid="button-social-facebook">
                <Facebook size={20} />
              </button>
              <button className="hover-elevate active-elevate-2 p-2 rounded" data-testid="button-social-twitter">
                <Twitter size={20} />
              </button>
              <button className="hover-elevate active-elevate-2 p-2 rounded" data-testid="button-social-instagram">
                <Instagram size={20} />
              </button>
              <button className="hover-elevate active-elevate-2 p-2 rounded" data-testid="button-social-linkedin">
                <Linkedin size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-white/80 hover:text-primary transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/ticketing" className="text-white/80 hover:text-primary transition-colors">
                  Ticketing
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="text-white/80 hover:text-primary transition-colors">
                  Hotel Accommodation
                </Link>
              </li>
              <li>
                <Link href="/event-details" className="text-white/80 hover:text-primary transition-colors">
                  Event Details
                </Link>
              </li>
              <li>
                <Link href="/medxverse-launch" className="text-white/80 hover:text-primary transition-colors">
                  MedxVerse Launch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Contact Info</h4>
            <ul className="space-y-1.5 text-sm text-white/80">
              <li>📍 The Assembly, Ogbomoso, Oyo State, Nigeria 🇳🇬</li>
              <li>📞 {whatsappConfig.phoneNumber}</li>
              <li>📧 {defaultContactEmail}</li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold text-base mb-2">Event Date</h5>
              <p className="text-white/80 text-sm">Saturday, 7th March 2026</p>
              <p className="text-white/80 text-sm">9:00 AM - 4:00 PM WAT</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-center text-xs md:text-sm text-white/60">
          <p>&copy; 2026 MEDFINTECH Conference. All rights reserved.</p>
          <p className="mt-1">
            Designed &amp; Developed by{" "}
            <a
              href="https://wa.me/2348104639067"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Infinite™
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
