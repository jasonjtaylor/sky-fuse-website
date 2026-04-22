import { Camera, Cpu, Layers, MonitorDot, Share2, type LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  {
    icon: Camera,
    step: "01",
    title: "Sensors Observe",
    description: "Camera, RF, and acoustic sensors continuously monitor the airspace for activity.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Processing",
    description: "AI and signal processing algorithms extract features and identify potential threats.",
  },
  {
    icon: Layers,
    step: "03",
    title: "Fusion Validates",
    description: "The fusion engine cross-validates detections across sensors to minimize false alarms.",
  },
  {
    icon: MonitorDot,
    step: "04",
    title: "Operator Sees",
    description: "Live situational picture displayed on the dashboard with confidence metrics.",
  },
  {
    icon: Share2,
    step: "05",
    title: "Data Shared",
    description: "Detection data exported via CoT to command systems and tactical networks.",
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
              From sensor input to actionable intelligence in seconds.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
              {steps.map((item) => (
                <div key={item.step} className="group relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(188_86%_53%/0.2)]">
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
