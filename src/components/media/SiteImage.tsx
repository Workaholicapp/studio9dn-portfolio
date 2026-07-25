"use client";

import { useEffect, useRef, useState } from "react";

interface SiteImageProps {
  /** Absolute path under /public, e.g. "/images/projects/card-arts.jpg" */
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  /** Cursor color-reveal (image renders B&W, true colour blooms under the cursor). Off for the 360 pano. */
  reveal?: boolean;
  /** Fallback background shown behind the image (and if it hasn't been added yet). */
  background?: string;
}

const REVEAL_RADIUS = 155;

/**
 * Static replacement for the old drag/drop ImageSlot — renders a fixed
 * image from the public asset folder. If the file hasn't been dropped in at
 * `src` yet, shows the expected path in place of a broken-image icon so the
 * gap is obvious and self-documenting while assets are still being filled in.
 */
export default function SiteImage({ src, alt, className, style, reveal = true, background }: SiteImageProps) {
  const [missing, setMissing] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // The browser starts loading (and can fail) an SSR-rendered <img> before
    // React finishes hydrating and attaches onError, so a failure that
    // happened during that race is otherwise missed. Check the already-known
    // outcome directly once mounted.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setMissing(true);
  }, [src]);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!reveal || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    wrapRef.current.style.setProperty("--rx", e.clientX - r.left + "px");
    wrapRef.current.style.setProperty("--ry", e.clientY - r.top + "px");
    wrapRef.current.style.setProperty("--rr", REVEAL_RADIUS + "px");
  };
  const onPointerLeave = () => {
    if (!reveal || !wrapRef.current) return;
    wrapRef.current.style.setProperty("--rr", "0px");
  };

  return (
    <div
      ref={wrapRef}
      className={"s9-image-slot" + (reveal && !missing ? " s9revealwrap" : "") + (className ? " " + className : "")}
      style={background ? { ...style, background } : style}
      onPointerMove={reveal ? onPointerMove : undefined}
      onPointerLeave={reveal ? onPointerLeave : undefined}
    >
      {!missing && (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={imgRef} src={src} alt={alt} onError={() => setMissing(true)} />
      )}
      {reveal && !missing && <div className="s9reveal" aria-hidden="true" />}
      {missing && (
        <div className="s9img-missing">
          <div className="plate">
            <span>Add image at</span>
            <code>{src}</code>
          </div>
        </div>
      )}
    </div>
  );
}
