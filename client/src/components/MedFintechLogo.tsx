import { cn } from "@/lib/utils";
import logo from "@/assets/medfintech-logo.png";

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
        className="h-20 md:h-24 lg:h-32 xl:h-36 w-auto object-contain"
      />
    </div>
  );
}
