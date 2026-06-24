/** Total frames in the cinematic hero sequence */
export const FRAME_COUNT = 450;

/**
 * Eagerly resolve all frame URLs via Vite glob.
 * Files: src/assets/hero-section/frame-0001.jpg … frame-0450.jpg
 */
const frameModules = import.meta.glob(
  "../assets/hero-section/frame-*.jpg",
  { eager: true, query: "?url", import: "default" },
);

const frameUrlByIndex = new Map();

for (const [path, url] of Object.entries(frameModules)) {
  const match = path.match(/frame-(\d+)\.jpg$/i);
  if (match) {
    frameUrlByIndex.set(parseInt(match[1], 10), url);
  }
}

/**
 * Resolve a hero frame URL (1-based index).
 */
export function getHeroFrameUrl(frameIndex) {
  const index = Math.min(FRAME_COUNT, Math.max(1, frameIndex));
  return frameUrlByIndex.get(index) ?? frameUrlByIndex.get(1) ?? "";
}

// #region agent log
fetch("http://127.0.0.1:7746/ingest/a6f68039-d109-42ab-b7e9-abb1e1afda16", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Debug-Session-Id": "7ff6bc",
  },
  body: JSON.stringify({
    sessionId: "7ff6bc",
    runId: "pre-fix",
    hypothesisId: "A",
    location: "heroFrames.js:module-init",
    message: "glob frame URL map",
    data: {
      globModuleCount: Object.keys(frameModules).length,
      mapSize: frameUrlByIndex.size,
      frame1Url: getHeroFrameUrl(1),
      frame450Url: getHeroFrameUrl(450),
      sampleGlobKey: Object.keys(frameModules)[0] ?? null,
    },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

if (import.meta.env.DEV) {
  console.info("[HeroSequence] frames detected:", frameUrlByIndex.size);
  console.info("[HeroSequence] frame 1 URL:", getHeroFrameUrl(1));
  console.info("[HeroSequence] frame 450 URL:", getHeroFrameUrl(450));
}

/** Desktop scroll track height (vh) — longer = slower frame progression */
export const SCROLL_HEIGHT_VH = 420;

/** Mobile scroll track height (vh) */
export const MOBILE_SCROLL_HEIGHT_VH = 280;

/** On narrow screens, sample every Nth frame to reduce decode work */
export const MOBILE_FRAME_STEP = 2;
