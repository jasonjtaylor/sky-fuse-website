import { ArrowRight, CheckCircle2, Circle, Layers } from "lucide-react";

const current = [
  "Multi-sensor fusion engine",
  "Fusion explainability: every track shows which sensors contributed and how the score was reached",
  "Real-time bearing estimation",
  "Browser-based operator dashboard",
  "TAK / CoT integration",
  "Edge-deployable operation",
];

const future = [
  "Multi-target simultaneous tracking",
  "Multi-vendor sensor integration",
  "Disconnected-edge C2 deployment",
  "Track-level behavioural analysis",
  "Advanced RF identification",
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Development Status
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
              Readiness & Roadmap
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              SkyFuse is currently assessed at TRL 6 following live-UAS validation at the DND IDEaS Counter-UAS Sandbox, CFB Suffield, September 2026.
            </p>
          </div>

          <div className="mb-12 flex justify-center px-2">
            <div className="flex w-full max-w-3xl flex-col items-center gap-4 rounded-2xl border border-primary/30 bg-card px-5 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
              <div className="shrink-0 text-center sm:text-left">
                <div className="font-display text-3xl font-bold text-primary">TRL 6</div>
                <div className="text-sm text-muted-foreground">Technology Readiness Level</div>
              </div>
              <div className="hidden h-12 w-px shrink-0 bg-border sm:block" />
              <div className="w-full shrink border-t border-border pt-4 text-center text-sm leading-relaxed text-muted-foreground sm:border-t-0 sm:pt-0 sm:text-left">
                TRL 6. Multi-sensor fusion, C2 integration and recording pipeline exercised against live UAS flights, with tracks published to DRDC's TAK server. Next phase targets TRL 7 at the next operational trial.
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Current Capabilities</h3>
              </div>
              <ul className="space-y-3">
                {current.map((line) => (
                  <li key={line} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/50 bg-muted/30 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Planned Development Areas</h3>
              </div>
              <ul className="space-y-3">
                {future.map((line) => (
                  <li key={line} className="flex items-center gap-3">
                    <Circle className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
