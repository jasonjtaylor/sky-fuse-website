import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadarBackdrop } from "@/components/RadarBackdrop";

const stats = [
  { value: "3", label: "Multi-Sensor Integration" },
  { value: "<5s", label: "Track Updates" },
  { value: "100%", label: "Edge Ready" },
] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 gradient-radial" />
      <RadarBackdrop />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="mb-8 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 opacity-0"
            style={{ animationDelay: "0s", animationFillMode: "forwards" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Layered CUAS Fusion &amp; C2 Gateway</span>
          </div>

          <h1
            className="mb-6 animate-fade-in-up font-display text-5xl font-bold tracking-tight opacity-0 md:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="text-foreground">Sky</span>
            <span className="text-primary text-glow">Fuse</span>
          </h1>

          <p
            className="mb-6 animate-fade-in-up font-display text-xl font-light text-muted-foreground opacity-0 md:text-2xl"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Unified CUAS Sensor Fusion &amp; C2 Integration
          </p>

          <p
            className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-lg leading-relaxed text-muted-foreground/80 opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            SkyFuse fuses RF, visual, and acoustic sensor systems into a single operational picture, enabling layered
            CUAS operations without replacing existing systems.
          </p>

          <div
            className="flex animate-fade-in-up flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="/#capabilities">
                View Capabilities
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <Mail className="h-5 w-5" />
                Request Demo
              </Link>
            </Button>
          </div>

          <div
            className="mx-auto mt-16 grid max-w-lg animate-fade-in-up grid-cols-3 gap-8 opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-bold text-primary md:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
