import { useEffect, useState } from "react";

type Blip = { x: number; y: number; id: number };

export function RadarBackdrop() {
  const [blips, setBlips] = useState<Blip[]>([]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBlips((prev) => {
        const kept = prev.filter((b) => Date.now() - b.id < 3000);
        if (Math.random() > 0.6) {
          const angle = Math.random() * Math.PI * 2;
          const radius = 30 + Math.random() * 60;
          return [...kept, { x: 50 + Math.cos(angle) * radius, y: 50 + Math.sin(angle) * radius, id: Date.now() }];
        }
        return kept;
      });
    }, 800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-40">
      <div className="relative h-[600px] w-[600px]">
        {[1, 2, 3, 4].map((ring) => (
          <div
            key={ring}
            className="absolute rounded-full border border-primary/20"
            style={{
              width: `${ring * 25}%`,
              height: `${ring * 25}%`,
              top: `${50 - ring * 12.5}%`,
              left: `${50 - ring * 12.5}%`,
            }}
          />
        ))}
        <div className="absolute left-0 top-1/2 h-px w-full bg-primary/20" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-primary/20" />
        <div className="absolute left-1/2 top-1/2 h-px w-[70%] origin-left -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary/10" />
        <div className="absolute left-1/2 top-1/2 h-px w-[70%] origin-left -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-primary/10" />
        <div className="animate-radar-sweep absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 h-1 w-1/2"
            style={{
              background: "linear-gradient(90deg, hsl(166 100% 70% / 0.6), transparent)",
              transformOrigin: "left center",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 origin-left"
            style={{
              width: "50%",
              height: "50%",
              background: "conic-gradient(from 0deg, hsl(166 100% 70% / 0.15), transparent 30deg)",
              transform: "translateY(-2px)",
            }}
          />
        </div>
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary glow-primary" />
        {blips.map((b) => (
          <div
            key={b.id}
            className="absolute h-2 w-2 animate-pulse rounded-full bg-primary opacity-90 glow-primary"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        <div className="animate-pulse-slow absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      </div>
    </div>
  );
}
