import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  FRAME_COUNT,
  getHeroFrameUrl,
  MOBILE_FRAME_STEP,
} from "../utils/heroFrames";

const PRELOAD_BATCH = 12;
const PRIORITY_RADIUS = 8;

/**
 * Draw an image onto canvas using object-fit: cover semantics.
 */
function drawCover(ctx, img, width, height) {
  if (!img?.complete || !img.naturalWidth) return;

  const imgAspect = img.naturalWidth / img.naturalHeight;
  const canvasAspect = width / height;

  let drawWidth;
  let drawHeight;
  let offsetX;
  let offsetY;

  if (imgAspect > canvasAspect) {
    drawHeight = height;
    drawWidth = height * imgAspect;
    offsetX = (width - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = width;
    drawHeight = width / imgAspect;
    offsetX = 0;
    offsetY = (height - drawHeight) / 2;
  }

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

/**
 * Scroll-driven canvas hero sequence.
 *
 * - Preloads frame 1 immediately, then batches the rest in the background
 * - Prioritises frames near the current scroll position
 * - Renders via canvas (single DOM paint per frame, no img swap flicker)
 * - Maps scroll progress → frame index with clamped rounding
 */
export function useHeroSequence(containerRef, { reducedMotion = false } = {}) {
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(FRAME_COUNT).fill(null));
  const loadingRef = useRef(new Set());
  const loadedRef = useRef(new Set());
  const inflightRef = useRef(new Map());
  const pendingFrameRef = useRef(0);
  const schedulePaintRef = useRef(() => {});
  const rafRef = useRef(null);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  const [isReady, setIsReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const frameStep =
    typeof window !== "undefined" && window.innerWidth < 768
      ? MOBILE_FRAME_STEP
      : 1;

  const effectiveFrameCount = Math.ceil(FRAME_COUNT / frameStep);

  const mapProgressToFrame = useCallback(
    (progress) => {
      const clamped = Math.min(1, Math.max(0, progress));
      const rawIndex = Math.round(clamped * (effectiveFrameCount - 1));
      return Math.min(FRAME_COUNT - 1, rawIndex * frameStep);
    },
    [effectiveFrameCount, frameStep],
  );

  const loadFrame = useCallback(
    (index) => {
      if (index < 0 || index >= FRAME_COUNT) return Promise.resolve(null);
      if (loadedRef.current.has(index)) {
        return Promise.resolve(imagesRef.current[index]);
      }
      if (inflightRef.current.has(index)) {
        return inflightRef.current.get(index);
      }

      loadingRef.current.add(index);

      const promise = new Promise((resolve) => {
        const url = getHeroFrameUrl(index + 1);

        if (!url) {
          if (import.meta.env.DEV) {
            console.error("[HeroSequence] missing URL for frame", index + 1);
          }
          loadingRef.current.delete(index);
          inflightRef.current.delete(index);
          resolve(null);
          return;
        }

        const img = new Image();
        img.src = url;

        const finish = async () => {
          try {
            if (img.decode) await img.decode();
          } catch {
            // draw on next paint once dimensions are available
          }

          loadingRef.current.delete(index);
          inflightRef.current.delete(index);
          loadedRef.current.add(index);
          imagesRef.current[index] = img;
          setLoadProgress(loadedRef.current.size / FRAME_COUNT);

          if (import.meta.env.DEV && index === 0) {
            console.info("[HeroSequence] frame 1 loaded", {
              width: img.naturalWidth,
              height: img.naturalHeight,
            });
          }

          // Repaint when a frame finishes loading — fixes race where paint
          // ran before the image was ready (e.g. React StrictMode double mount).
          if (
            index === pendingFrameRef.current ||
            index === 0 ||
            index === pendingFrameRef.current - frameStep ||
            index === pendingFrameRef.current + frameStep
          ) {
            schedulePaintRef.current(pendingFrameRef.current);
          }

          resolve(img);
        };

        img.onload = () => {
          finish();
        };
        img.onerror = () => {
          loadingRef.current.delete(index);
          inflightRef.current.delete(index);
          if (import.meta.env.DEV) {
            console.error("[HeroSequence] failed to load frame", index + 1, url);
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
              hypothesisId: "C",
              location: "useHeroSequence.js:loadFrame:onerror",
              message: "frame load failed",
              data: { frameIndex: index + 1, url },
              timestamp: Date.now(),
            }),
          }).catch(() => {});
          // #endregion
          resolve(null);
        };
      });

      inflightRef.current.set(index, promise);
      return promise;
    },
    [frameStep],
  );

  const preloadPriority = useCallback(
    async (centerIndex) => {
      const indices = [centerIndex];
      for (let i = 1; i <= PRIORITY_RADIUS; i++) {
        indices.push(centerIndex - i * frameStep, centerIndex + i * frameStep);
      }

      await Promise.all(
        indices
          .filter((i) => i >= 0 && i < FRAME_COUNT)
          .map((i) => loadFrame(i)),
      );
    },
    [frameStep, loadFrame],
  );

  const paintFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = sizeRef.current;
    const img = imagesRef.current[frameIndex];

    ctx.clearRect(0, 0, width, height);

    if (img?.complete && img.naturalWidth) {
      drawCover(ctx, img, width, height);
    } else if (
      imagesRef.current[0]?.complete &&
      imagesRef.current[0]?.naturalWidth
    ) {
      drawCover(ctx, imagesRef.current[0], width, height);
    }

    // #region agent log
    if (frameIndex === 0 || frameIndex % 50 === 0) {
      fetch("http://127.0.0.1:7746/ingest/a6f68039-d109-42ab-b7e9-abb1e1afda16", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "7ff6bc",
        },
        body: JSON.stringify({
          sessionId: "7ff6bc",
          runId: "pre-fix",
          hypothesisId: "B,F,G",
          location: "useHeroSequence.js:paintFrame",
          message: "canvas paint attempt",
          data: {
            frameIndex,
            canvasW: canvas.width,
            canvasH: canvas.height,
            cssW: width,
            cssH: height,
            dpr: sizeRef.current.dpr,
            targetLoaded: Boolean(img?.complete && img?.naturalWidth),
            fallbackLoaded: Boolean(
              imagesRef.current[0]?.complete && imagesRef.current[0]?.naturalWidth,
            ),
            drewTarget: Boolean(img?.complete && img?.naturalWidth),
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    }
    // #endregion
  }, []);

  const schedulePaint = useCallback(
    (frameIndex) => {
      pendingFrameRef.current = frameIndex;

      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        paintFrame(pendingFrameRef.current);
      });
    },
    [paintFrame],
  );

  schedulePaintRef.current = schedulePaint;

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
  
    const width = window.innerWidth;
    const height = window.innerHeight;
  
  
    sizeRef.current = {
      width,
      height,
      dpr
    };
  
  
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
  
  
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  
  
    const ctx = canvas.getContext("2d");
  
    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );
  
  
    schedulePaint(
      pendingFrameRef.current
    );
  
  }, [schedulePaint]);

  // Initial preload: first frame + background batch loading
  useEffect(() => {
    let cancelled = false;

    async function init() {
      resizeCanvas();
      await loadFrame(0);
      if (cancelled) return;

      setIsReady(true);
      schedulePaint(0);

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
          hypothesisId: "G",
          location: "useHeroSequence.js:init:after-ready",
          message: "init complete isReady true",
          data: {
            width: sizeRef.current.width,
            height: sizeRef.current.height,
            frame0Complete: Boolean(imagesRef.current[0]?.complete),
            frame0NaturalW: imagesRef.current[0]?.naturalWidth ?? 0,
            loadedCount: loadedRef.current.size,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion

      if (import.meta.env.DEV) {
        const canvas = canvasRef.current;
        console.info("[HeroSequence] canvas paint init", {
          width: sizeRef.current.width,
          height: sizeRef.current.height,
          frameLoaded: Boolean(imagesRef.current[0]?.complete),
        });
      }

      for (let start = 1; start < FRAME_COUNT; start += PRELOAD_BATCH) {
        if (cancelled) break;

        const batch = Array.from(
          { length: Math.min(PRELOAD_BATCH, FRAME_COUNT - start) },
          (_, i) => loadFrame(start + i),
        );
        await Promise.all(batch);
      }
    }

    init();

    return () => {
      cancelled = true;
    };
  }, [loadFrame, schedulePaint, resizeCanvas]);

  // Canvas resize observer
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Scroll → frame mapping via Framer Motion scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reducedMotion) return;

    const frameIndex = mapProgressToFrame(progress);
    schedulePaint(frameIndex);
    preloadPriority(frameIndex);

    // #region agent log
    if (
      frameIndex === 0 ||
      frameIndex === FRAME_COUNT - 1 ||
      frameIndex % 45 === 0
    ) {
      fetch("http://127.0.0.1:7746/ingest/a6f68039-d109-42ab-b7e9-abb1e1afda16", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "7ff6bc",
        },
        body: JSON.stringify({
          sessionId: "7ff6bc",
          runId: "pre-fix",
          hypothesisId: "E",
          location: "useHeroSequence.js:scrollYProgress",
          message: "scroll mapped to frame",
          data: {
            progress: Number(progress.toFixed(4)),
            frameIndex,
            frameLoaded: Boolean(
              imagesRef.current[frameIndex]?.complete &&
                imagesRef.current[frameIndex]?.naturalWidth,
            ),
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
    }
    // #endregion
  });

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  return {
    canvasRef,
    isReady,
    loadProgress,
    scrollYProgress,
    effectiveFrameCount,
  };
}
