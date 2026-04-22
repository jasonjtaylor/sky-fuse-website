import { Link } from "react-router-dom";
import { Radar } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <div className="flex items-center gap-2">
                <Radar className="h-6 w-6 text-primary" />
                <span className="font-display text-xl font-semibold text-foreground">
                  Sky<span className="text-primary">Fuse</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Built for modern airspace awareness</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="/#capabilities"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Capabilities
              </a>
              <a
                href="/#how-it-works"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </a>
              <a href="/#roadmap" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Roadmap
              </a>
              <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Contact
              </Link>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                Contact:{" "}
                <a className="text-primary hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-border/50 pt-8">
            <p className="text-center text-xs text-muted-foreground">
              Concept and prototype system — not a weapon. SkyFuse is a detection and awareness platform only.
            </p>
            <p className="mt-2 text-center text-xs text-muted-foreground">© {year} SkyFuse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
