import { cn } from "@/lib/utils";
import logo from "@/assets/brand-logo-footer.png";

interface EventLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function EventLogo({
  className,
  showTagline = false,
}: EventLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center flex-shrink-0",
        className
      )}
    >
      <img 
        src={logo} 
        alt="MEDFINTECH Conference 2026" 
        className="h-10 md:h-12 w-auto object-contain"
      />
    </div>
  );
}
