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
        className="h-12 md:h-14 w-auto max-w-[140px] md:max-w-[180px] object-contain"
      />
    </div>
  );
}
