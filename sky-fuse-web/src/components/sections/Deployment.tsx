import { Backpack, Boxes, GraduationCap, MapPin, Zap, type LucideIcon } from "lucide-react";

const bullets: { icon: LucideIcon; text: string }[] = [
  { icon: Boxes, text: "Works with commodity cameras and sensors" },
  { icon: Backpack, text: "Backpack-portable footprint" },
  { icon: GraduationCap, text: "Minimal operator training required" },
  { icon: MapPin, text: "Designed for austere and temporary deployments" },
  { icon: Zap, text: "Scales from prototype to operational system" },
];

export function Deployment() {
  return (
    <section id="deployment" className="relative bg-card/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Practical Design
              </span>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                Designed for Real-World Use
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                SkyFuse is built for environments where traditional CUAS systems don&apos;t fit — whether that&apos;s a
                remote training range, a rapidly deployed team, or a facility that needs effective detection without the
                complexity.
              </p>
              <div className="space-y-4">
                {bullets.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 rounded-xl border border-border/50 bg-muted/30 p-4 transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-muted">
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="absolute inset-8 flex items-center justify-center rounded-2xl border-2 border-primary/30">
                  <div className="text-center">
                    <div className="relative mx-auto mb-6 h-48 w-48">
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
                      <div className="absolute inset-4 rounded-full border border-primary/20" />
                      <div className="absolute inset-8 rounded-full border border-primary/10" />
                      <div className="absolute left-1/2 top-2 -translate-x-1/2 font-display text-xs font-semibold text-primary">
                        N
                      </div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-display text-xs text-muted-foreground">
                        S
                      </div>
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 font-display text-xs text-muted-foreground">
                        W
                      </div>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 font-display text-xs text-muted-foreground">
                        E
                      </div>
                      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary glow-primary" />
                      <div className="absolute left-1/2 top-1/2 h-0.5 w-16 origin-left -translate-y-1/2 rotate-45 bg-gradient-to-r from-primary to-transparent" />
                      <div className="absolute right-10 top-6 h-2 w-2 animate-pulse rounded-full bg-primary" />
                      <div
                        className="absolute bottom-12 right-8 h-2 w-2 animate-pulse rounded-full bg-primary/60"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </div>
                    <div className="font-display text-sm text-muted-foreground">BEARING: 045°</div>
                    <div className="mt-1 font-display text-lg font-semibold text-primary">TRACK ACTIVE</div>
                  </div>
                </div>
                <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-primary/50" />
                <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-primary/50" />
                <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-primary/50" />
                <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-primary/50" />
              </div>
              <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
