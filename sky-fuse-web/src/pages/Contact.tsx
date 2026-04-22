import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/site";

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          company: (form.elements.namedItem("company") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <main className="min-h-screen bg-background pt-24 pb-16 md:pt-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Contact
              </span>
              <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">Request a demo</h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Reach out for product questions, partnership discussions, or to schedule a private briefing.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_0_20px_hsl(166_100%_70%/0.08)]">
                  <h2 className="mb-6 font-display text-xl font-semibold text-foreground">SkyFuse</h2>
                  <ul className="space-y-5 text-muted-foreground">
                    <li className="flex gap-3">
                      <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Email</div>
                        <a className="text-primary hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Phone</div>
                        <a className="hover:text-primary" href={`tel:${CONTACT_PHONE_TEL}`}>
                          {CONTACT_PHONE_DISPLAY}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Operations</div>
                        <p className="text-sm">Remote-first · Serving defence & critical infrastructure teams</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  Prefer email? Messages are monitored regularly. For sensitive inquiries, state your affiliation and
                  preferred secure channel in the form.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/50 p-8 md:p-10">
                <form
                  name="contact"
                  method="POST"
                  className="space-y-5"
                  onSubmit={onSubmit}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="you@organization.gov"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                      Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      required
                      autoComplete="organization"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Unit or company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="min-h-[120px] w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us about your use case, timeline, and any clearance or procurement constraints."
                    />
                  </div>

                  {status === "ok" ? (
                    <p className="text-sm font-medium text-primary">Thanks — we&apos;ll get back to you shortly.</p>
                  ) : null}
                  {status === "error" ? (
                    <p className="text-sm font-medium text-destructive">
                      Something went wrong. Please email us directly.
                    </p>
                  ) : null}

                  <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </Button>
                </form>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  <Link to="/" className="text-primary hover:underline">
                    ← Back to home
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
