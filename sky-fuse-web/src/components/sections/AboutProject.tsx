import { Cpu, Radio, Shield } from "lucide-react";

const tags = [
  { icon: Cpu, label: "AI Systems" },
  { icon: Radio, label: "Sensor Integration" },
  { icon: Shield, label: "Defence Tech" },
] as const;

export function AboutProject() {
  return (
    <section className="relative bg-card/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            About
          </span>
          <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-4xl">About the Project</h2>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="relative z-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                SkyFuse is developed by an independent technical lead with experience in AI systems, real-time sensor
                integration, and tactical communications, informed by operational defence environments.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {tags.map((t) => (
                  <div
                    key={t.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2"
                  >
                    <t.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
