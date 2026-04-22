import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Crosshair, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#deployment", label: "Deployment" },
  { href: "/#roadmap", label: "Roadmap" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="group flex items-center gap-2">
            <Crosshair className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-45" />
            <span className="font-display text-xl font-semibold text-foreground">
              Sky<span className="text-primary">Fuse</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Button variant="heroOutline" size="sm" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          <button
            type="button"
            className="p-2 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="heroOutline" size="sm" className="w-fit" asChild>
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
