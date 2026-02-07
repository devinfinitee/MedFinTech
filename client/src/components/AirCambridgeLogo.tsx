import { cn } from "@/lib/utils";
import brandLogo from "@/assets/aircambridge-brand.png";

interface AirCambridgeLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function AirCambridgeLogo({
  className,
  showTagline = false,
}: AirCambridgeLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center md:flex-col md:items-center gap-0 md:gap-1 flex-shrink max-w-full overflow-hidden",
        className
      )}
    >
      <img
        src={brandLogo}
        alt="AirCambridge"
        className="h-6 sm:h-7 md:h-10 lg:h-12 w-auto object-contain max-w-[60vw] sm:max-w-[140px] md:max-w-[180px] lg:max-w-none"
      />
      {showTagline && (
        <span className="hidden lg:block text-[10px] xl:text-xs uppercase tracking-[0.3em] text-white/70 whitespace-nowrap leading-none">
          Seamless travel & mobility
        </span>
      )}
    </div>
  );
}
