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
        className="h-14 md:h-16 lg:h-20 w-auto max-w-[160px] md:max-w-[200px] lg:max-w-[240px] object-contain"
      />
    </div>
  );
}
