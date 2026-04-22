import { Camera, Cpu, Layers, MonitorDot, Share2, type LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  {
    icon: Camera,
    step: "01",
    title: "Sensors Observe",
    description: "RF, visual, and acoustic systems monitor the airspace and generate detection inputs.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Multi-Sensor Data Ingest",
    description: "SkyFuse ingests and standardizes heterogeneous sensor data at the tactical edge.",
  },
  {
    icon: Layers,
    step: "03",
    title: "Fusion Correlates",
    description: "Cross-sensor detections are correlated into a unified track with confidence scoring.",
  },
  {
    icon: MonitorDot,
    step: "04",
    title: "Operator Sees",
    description: "A live operational picture is displayed through the dashboard and map interface.",
  },
  {
    icon: Share2,
    step: "05",
    title: "Data Shared",
    description: "Track data is exported via CoT into TAK-enabled command and control environments.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Process
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From distributed sensors to a correlated track and TAK-enabled C2 output.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
              {steps.map((item) => (
                <div key={item.step} className="group relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(166_100%_70%/0.2)]">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
