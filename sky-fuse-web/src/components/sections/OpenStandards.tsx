import { GitMerge, LocateFixed, Map, Network, type LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Network,
    title: "SAPIENT",
    description:
      "Implemented against the published SAPIENT (BSI Flex 335 v2.0) specification for interoperable counter-UAS sensor integration.",
  },
  {
    icon: LocateFixed,
    title: "Cursor-on-Target (CoT)",
    description:
      "Native support for Cursor-on-Target messaging to distribute fused operational tracks across existing command-and-control environments.",
  },
  {
    icon: Map,
    title: "ATAK / WinTAK",
    description:
      "Designed to integrate with Tactical Assault Kit environments, enabling a common operational picture for defence and public safety users.",
  },
  {
    icon: GitMerge,
    title: "Vendor Neutral",
    description:
      "SkyFuse operates as a software fusion layer above existing sensors and command systems, enabling heterogeneous multi-vendor deployments without replacing existing hardware.",
  },
];

export function OpenStandards() {
  return (
    <section
      id="open-standards"
      className="relative py-24 md:py-32"
      aria-labelledby="open-standards-heading"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <header className="mb-16 text-center">
            <h2
              id="open-standards-heading"
              className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl"
            >
              Open Standards &amp; Interoperability
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              SkyFuse is designed to integrate into existing defence ecosystems rather than replace them. Our architecture
              emphasizes vendor neutrality, open standards, and interoperability, allowing organizations to preserve existing
              sensor investments while improving operational awareness.
            </p>
          </header>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center">
                  <item.icon
                    className="h-6 w-6 text-primary transition-transform duration-200 group-hover:scale-[1.08]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-2xl border border-border bg-card/50 p-8 md:p-10">
            <h3 className="mb-4 font-display text-xl font-semibold text-foreground md:text-2xl">Built for Integration</h3>
            <p className="max-w-4xl leading-relaxed text-muted-foreground">
              SkyFuse is built around interoperability. Our focus is enabling organizations to integrate diverse sensing
              technologies into a single trusted operational picture rather than creating another proprietary ecosystem.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
