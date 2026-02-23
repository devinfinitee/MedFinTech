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
        className="h-20 md:h-24 w-auto max-w-[210px] md:max-w-[260px] object-contain"
      />
    </div>
  );
}
