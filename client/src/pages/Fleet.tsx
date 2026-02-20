import { useState, useEffect, useRef } from "react";
import JetCard from "@/components/JetCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AVAILABLE_LOCATIONS } from "@/lib/locations";
import gsap from "gsap";
import jet1 from "@assets/stock_images/luxury_private_jet_e_68c499e9.jpg";
import jet2 from "@assets/stock_images/luxury_private_jet_e_9a9496d7.jpg";
import jet3 from "@assets/stock_images/luxury_private_jet_e_6f06c902.jpg";
import jet4 from "@assets/stock_images/luxury_private_jet_e_fcb5c50d.jpg";
import jet5 from "@assets/stock_images/luxury_private_jet_e_e886b84a.jpg";
import interior1 from "@assets/stock_images/luxury_private_jet_i_bec10afb.jpg";

//todo: remove mock data
const allJets = [
  {
    id: "1",
    name: "Gulfstream G700",
    category: "Heavy Jet",
    capacity: 19,
    range: "7,500 nm",
    speed: "Mach 0.925",
    hourlyRate: 12500,
    image: jet1,
  },
  {
    id: "2",
    name: "Bombardier Global 7500",
    category: "Ultra Long Range",
    capacity: 17,
    range: "7,700 nm",
    speed: "Mach 0.925",
    hourlyRate: 13000,
    image: jet2,
  },
  {
    id: "3",
    name: "Cessna Citation X",
    category: "Midsize Jet",
    capacity: 12,
    range: "3,460 nm",
    speed: "Mach 0.935",
    hourlyRate: 8500,
    image: jet3,
  },
  {
    id: "4",
    name: "Embraer Phenom 300",
    category: "Light Jet",
    capacity: 9,
    range: "2,010 nm",
    speed: "Mach 0.78",
    hourlyRate: 4500,
    image: jet4,
  },
  {
    id: "5",
    name: "Dassault Falcon 8X",
    category: "Heavy Jet",
    capacity: 16,
    range: "6,450 nm",
    speed: "Mach 0.90",
    hourlyRate: 11000,
    image: jet5,
  },
  {
    id: "6",
    name: "Hawker 900XP",
    category: "Midsize Jet",
    capacity: 9,
    range: "2,930 nm",
    speed: "Mach 0.80",
    hourlyRate: 5500,
    image: interior1,
  },
];

export default function Fleet() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [capacityFilter, setCapacityFilter] = useState<string>("all");
  const [currency, setCurrency] = useState<'USD' | 'NGN'>('USD');
  const headerRef = useRef<HTMLDivElement>(null);

  const filteredJets = allJets.filter((jet) => {
    const categoryMatch = categoryFilter === "all" || jet.category === categoryFilter;
    const capacityMatch =
      capacityFilter === "all" ||
      (capacityFilter === "small" && jet.capacity < 10) ||
      (capacityFilter === "medium" && jet.capacity >= 10 && jet.capacity < 15) ||
      (capacityFilter === "large" && jet.capacity >= 15);
    return categoryMatch && capacityMatch;
  });

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0">Our Exclusive Fleet</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">
            Travel the world in style aboard our meticulously maintained aircraft with every detail perfected.
          </p>
        </div>

        <div className="mb-8">
          <div className="bg-card rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-lg mb-4">Available Locations</h2>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_LOCATIONS.map((location) => (
                <span key={location.value} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {location.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[200px]" data-testid="select-category">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Light Jet">Light Jet</SelectItem>
              <SelectItem value="Midsize Jet">Midsize Jet</SelectItem>
              <SelectItem value="Heavy Jet">Heavy Jet</SelectItem>
              <SelectItem value="Ultra Long Range">Ultra Long Range</SelectItem>
            </SelectContent>
          </Select>

          <Select value={capacityFilter} onValueChange={setCapacityFilter}>
            <SelectTrigger className="w-full sm:w-[200px]" data-testid="select-capacity">
              <SelectValue placeholder="Capacity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Capacities</SelectItem>
              <SelectItem value="small">Small (1-9)</SelectItem>
              <SelectItem value="medium">Medium (10-14)</SelectItem>
              <SelectItem value="large">Large (15+)</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2 ml-auto">
            <Button
              type="button"
              variant={currency === 'USD' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrency('USD')}
            >
              USD ($)
            </Button>
            <Button
              type="button"
              variant={currency === 'NGN' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrency('NGN')}
            >
              NGN (₦)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredJets.map((jet) => (
            <JetCard
              key={jet.id}
              {...jet}
              currency={currency}
              onViewDetails={(id) => console.log("View details for jet:", id)}
            />
          ))}
        </div>

        {filteredJets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No aircraft match your selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
