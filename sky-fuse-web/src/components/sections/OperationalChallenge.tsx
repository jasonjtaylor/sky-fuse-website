import { AlertTriangle, GitMerge, Unplug, type LucideIcon } from "lucide-react";

const challenges: { icon: LucideIcon; text: string }[] = [
  { icon: GitMerge, text: "Operators must manually correlate detections from different sensors." },
  { icon: AlertTriangle, text: "Conflicting sensor information increases uncertainty and response times." },
  { icon: Unplug, text: "Existing sensor systems frequently operate in isolation without a common operational picture." },
];

export function OperationalChallenge() {
  return (
    <section className="relative bg-card/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Operational Challenge
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
              The Problem SkyFuse Solves
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Counter-UAS operators often rely on multiple independent sensor systems that produce separate alerts, tracks,
              and confidence levels.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {challenges.map((item) => (
              <div
                key={item.text}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="leading-relaxed text-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            SkyFuse addresses these challenges by correlating sensor inputs into a unified operational track with associated
            confidence metrics and TAK-ready output.
          </p>
        </div>
      </div>
    </section>
  );
}
