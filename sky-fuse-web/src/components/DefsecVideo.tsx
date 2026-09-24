import { DEFSEC_VIDEO_URL } from "@/lib/defsec-config";
import { SkyFuseLogo } from "@/components/SkyFuseLogo";

function isEmbedUrl(url: string): boolean {
  return (
    url.includes("youtube.com/embed") ||
    url.includes("player.vimeo.com")
  );
}

function VideoPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-card/80 text-center">
      <SkyFuseLogo className="mb-4 h-12 opacity-60 md:h-16" />
      <p className="text-sm font-medium text-muted-foreground md:text-base">
        Video coming soon
      </p>
    </div>
  );
}

export function DefsecVideo() {
  const url = DEFSEC_VIDEO_URL.trim();

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_0_30px_hsl(166_100%_70%/0.1)]">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <div className="absolute inset-0">
          {!url ? (
            <VideoPlaceholder />
          ) : isEmbedUrl(url) ? (
            <iframe
              src={url}
              title="SkyFuse DEFSEC Video"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={url}
              controls
              playsInline
              className="h-full w-full object-cover"
            >
              <track kind="captions" />
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
