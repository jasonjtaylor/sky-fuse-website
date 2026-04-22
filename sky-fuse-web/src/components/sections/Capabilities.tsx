import {
  Compass,
  Eye,
  Laptop,
  Layers,
  LayoutDashboard,
  Radio,
  type LucideIcon,
} from "lucide-react";

const items: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Eye,
    title: "AI Vision Detection",
    description:
      "Detects and classifies drones using onboard AI computer vision models trained for small aerial targets.",
  },
  {
    icon: Layers,
    title: "Multi-Sensor Fusion",
    description:
      "Combines vision, RF, and acoustic cues into a single validated track, dramatically reducing false alarms.",
  },
  {
    icon: Compass,
    title: "Live Bearing & Tracking",
    description: "Radar-style compass display with smooth directional updates and real-time position estimation.",
  },
  {
    icon: LayoutDashboard,
    title: "Operator Dashboard",
    description: "Browser-based UI with live video feed, map integration, and confidence metrics at a glance.",
  },
  {
    icon: Laptop,
    title: "Edge-Deployed",
    description: "No cloud dependency — runs fully offline on laptops or rugged edge computers in austere environments.",
  },
  {
    icon: Radio,
    title: "TAK Compatible",
    description: "Outputs Cursor-on-Target (CoT) events for seamless integration with ATAK and WinTAK systems.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-card/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Core Features
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">Key Capabilities</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need for effective low-altitude drone detection in one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, t) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                style={{ animationDelay: `${t * 0.1}s` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
