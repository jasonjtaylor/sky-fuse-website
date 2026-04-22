import { AudioLines, Camera, Cpu, MonitorDot, Radio, Share2 } from "lucide-react";

const sensors = [
  { icon: Camera, label: "Visual Sensor", sublabel: "EO / video feeds" },
  { icon: Radio, label: "RF Sensor", sublabel: "Spectrum data" },
  { icon: AudioLines, label: "Acoustic Sensor", sublabel: "Acoustic data" },
] as const;

export function WhatIsSkyFuse() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
              What is <span className="text-primary">SkyFuse</span>?
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              SkyFuse is a software-defined fusion and interoperability layer for counter-UAS operations, designed to run on
              laptops and edge devices. It integrates RF, visual, acoustic, and radar-ready sensor inputs into a unified
              operational picture with minimal hardware overhead.
            </p>
          </div>

          <div className="relative rounded-2xl border border-border bg-card/50 p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-6 md:gap-4">
              <div className="space-y-4 md:col-span-2">
                {sensors.map((item, n) => (
                  <div
                    key={item.label}
                    className="group flex items-center gap-4 rounded-xl border border-border/50 bg-muted/50 p-4 transition-all duration-300 hover:border-primary/30"
                    style={{ animationDelay: `${n * 0.1}s` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden items-center justify-center md:flex">
                <div className="relative h-px w-16 bg-gradient-to-r from-primary/50 to-primary">
                  <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-b-4 border-l-8 border-t-4 border-transparent border-l-primary" />
                </div>
              </div>

              <div className="flex justify-center md:col-span-1">
                <div className="relative rounded-2xl border-2 border-primary/30 bg-primary/10 p-6 transition-all duration-300 hover:border-primary/50">
                  <div className="absolute -inset-1 rounded-2xl bg-primary/5 blur-xl" />
                  <div className="relative text-center">
                    <Cpu className="mx-auto mb-2 h-10 w-10 text-primary" />
                    <div className="font-display text-sm font-bold leading-tight text-foreground md:text-base">
                      Fusion &amp; Correlation
                    </div>
                    <div className="text-xs text-muted-foreground">Engine</div>
                  </div>
                </div>
              </div>

              <div className="hidden items-center justify-center md:flex">
                <div className="relative h-px w-16 bg-gradient-to-r from-primary to-primary/50">
                  <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-b-4 border-l-8 border-t-4 border-transparent border-l-primary/50" />
                </div>
              </div>

              <div className="space-y-4 md:col-span-1">
                <div className="group flex items-center gap-3 rounded-xl border border-border/50 bg-muted/50 p-4 transition-all duration-300 hover:border-primary/30">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <MonitorDot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold text-foreground">Operator Dashboard</div>
                    <div className="text-xs text-muted-foreground">Operational view</div>
                  </div>
                </div>
                <div className="group flex items-center gap-3 rounded-xl border border-border/50 bg-muted/50 p-4 transition-all duration-300 hover:border-primary/30">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Share2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold text-foreground">TAK / CoT Output</div>
                    <div className="text-xs text-muted-foreground">C2 export</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
