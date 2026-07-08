import { cn } from "@/lib/utils";

type SkyFuseLogoProps = {
  className?: string;
};

export function SkyFuseLogo({ className }: SkyFuseLogoProps) {
  return (
    <img
      src="/skyfuse-logo.png"
      alt="SkyFuse"
      width={179}
      height={100}
      className={cn("h-11 w-auto md:h-14", className)}
      loading="eager"
      decoding="async"
    />
  );
}
