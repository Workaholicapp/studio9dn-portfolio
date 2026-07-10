"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getStoredImage, removeStoredImage, setStoredImage } from "./storage";

interface ImageSlotProps {
  id: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Cursor color-reveal (images render B&W, true colour blooms under the cursor). Off for the 360 pano. */
  reveal?: boolean;
  /** Fires with the current data URL (or null) on mount and whenever the image changes. */
  onImageChange?: (src: string | null) => void;
}

const REVEAL_RADIUS = 155;

function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ImageSlot({ id, placeholder = "Click to browse or drop", className, style, reveal = true, onImageChange }: ImageSlotProps) {
  // Server (and the first client render, to match it) always render the
  // empty state — the stored image lives in localStorage, which isn't
  // available during SSR. Reading it eagerly here would hydrate to a
  // different DOM shape than the server markup, and React won't patch that
  // mismatch. The real value is applied a moment after mount instead.
  const [src, setSrc] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const onImageChangeRef = useRef(onImageChange);
  useEffect(() => { onImageChangeRef.current = onImageChange; }, [onImageChange]);

  useEffect(() => {
    const stored = getStoredImage(id);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe: syncs client-only storage after mount
    if (stored) setSrc(stored);
    onImageChangeRef.current?.(stored);
  }, [id]);

  const applyFile = useCallback(
    async (file: File | undefined | null) => {
      if (!file || !file.type.startsWith("image/")) return;
      const dataUrl = await readFile(file);
      setStoredImage(id, dataUrl);
      setSrc(dataUrl);
      onImageChangeRef.current?.(dataUrl);
    },
    [id]
  );

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    applyFile(e.dataTransfer.files?.[0]);
  };

  const onPointerMoveReveal = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!reveal || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    wrapRef.current.style.setProperty("--rx", e.clientX - r.left + "px");
    wrapRef.current.style.setProperty("--ry", e.clientY - r.top + "px");
    wrapRef.current.style.setProperty("--rr", REVEAL_RADIUS + "px");
  };
  const onPointerLeaveReveal = () => {
    if (!reveal || !wrapRef.current) return;
    wrapRef.current.style.setProperty("--rr", "0px");
  };

  const remove = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeStoredImage(id);
    setSrc(null);
    onImageChangeRef.current?.(null);
  };

  if (src) {
    return (
      <div
        ref={wrapRef}
        className={"s9-image-slot" + (reveal ? " s9revealwrap" : "") + (className ? " " + className : "")}
        style={style}
        onPointerMove={onPointerMoveReveal}
        onPointerLeave={onPointerLeaveReveal}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" />
        {reveal && <div className="s9reveal" aria-hidden="true" />}
        <div className="s9upload-actions">
          <button type="button" className="s9upload-btn" onClick={() => inputRef.current?.click()}>Replace</button>
          <button type="button" className="s9upload-btn" onClick={remove}>Remove</button>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="s9upload-input"
          onChange={(e) => applyFile(e.target.files?.[0])}
        />
      </div>
    );
  }

  return (
    <div className={"s9-image-slot" + (className ? " " + className : "")} style={style}>
      <div
        className={"s9upload-empty" + (dragOver ? " drag" : "")}
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") inputRef.current?.click(); }}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
      >
        <span className="ic" aria-hidden="true">⬒</span>
        <span className="t1">{placeholder}</span>
        <span className="t2">or browse files</span>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="s9upload-input"
        onChange={(e) => applyFile(e.target.files?.[0])}
      />
    </div>
  );
}
