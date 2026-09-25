import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Layers, Brain, Radio, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";
import { DefsecVideo } from "@/components/DefsecVideo";

const features = [
  {
    icon: Layers,
    title: "Vendor Neutral",
    description:
      "Built to work with sensors from different manufacturers. No lock-in, no rip-and-replace.",
  },
  {
    icon: Brain,
    title: "Explainable Fusion",
    description:
      "Transparent correlation logic operators can audit and trust.",
  },
  {
    icon: Radio,
    title: "Into C2 Today",
    description:
      "Outputs TAK/CoT natively — drops into existing command workflows.",
  },
] as const;

export function Defsec() {
  useEffect(() => {
    document.title = "SkyFuse at DEFSEC";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "SkyFuse — vendor-neutral CUAS sensor fusion with explainable output, integrating into TAK/CoT command workflows."
      );
    }
    return () => {
      document.title = "Sky Fuse";
      if (meta) {
        meta.setAttribute(
          "content",
          "SkyFuse — software-defined CUAS sensor fusion and C2 gateway. Unified operational picture without replacing existing systems."
        );
      }
    };
  }, []);

  return (
    <>
      <main className="min-h-screen bg-background pt-20 md:pt-24">
        <section className="relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-12">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 gradient-radial opacity-50" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block text-muted-foreground/90">Sensors detect.</span>
                <span className="block">
                  <span className="text-foreground">Sky</span>
                  <span className="text-primary text-glow">Fuse</span>
                  <span className="text-muted-foreground/90"> reconciles.</span>
                </span>
                <span className="block text-muted-foreground/90">Operators decide.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <DefsecVideo />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3 sm:gap-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/30 md:p-8"
                >
                  <f.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card/60 p-8 text-center shadow-[0_0_30px_hsl(166_100%_70%/0.06)] md:p-12">
              <h2 className="mb-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
                Let&apos;s talk
              </h2>
              <p className="mb-8 text-muted-foreground">
                Interested in SkyFuse for your CUAS mission? Reach out directly or
                request a demo.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:jason.taylor@skyfusedefense.com">
                    <Mail className="h-5 w-5" />
                    Email Jason
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">
                    Request Demo
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="mt-6">
                <a
                  href="/defsec/SkyFuse-OnePager.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <FileDown className="h-4 w-4" />
                  Download the one-pager (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
