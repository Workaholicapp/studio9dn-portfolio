"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useApp } from "@/lib/app-context";
import { liveWords, ghostWords, clientWords } from "@/data/heroWords";

interface WordEl {
  el: HTMLElement;
  kind: "1" | "0" | "c";
  phase: number;
  amp: number;
  cx: number;
  cy: number;
  cs: number;
}

export default function HeroWordField() {
  const { reducedMotion, mScale, playTone } = useApp();
  const fieldRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<WordEl[]>([]);
  const cursorRef = useRef({ x: 0, y: 0 });
  const trackedPlaceRef = useRef<string | null>(null);
  const tkRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    const nodeEls = Array.from(field.querySelectorAll<HTMLElement>(".s9word"));
    wordsRef.current = nodeEls.map((el) => ({
      el,
      kind: (el.getAttribute("data-live") as "1" | "0" | "c") || "0",
      phase: parseFloat(el.getAttribute("data-phase") || "0") || 0,
      amp: parseFloat(el.getAttribute("data-amp") || "8") || 8,
      cx: 0,
      cy: 0,
      cs: 1,
    }));

    const relax = () => {
      const fr = field.getBoundingClientRect();
      if (!fr.width) return;
      const nodes = wordsRef.current.map((w) => {
        const r = w.el.getBoundingClientRect();
        return { w, x: r.left + r.width / 2 - fr.left, y: r.top + r.height / 2 - fr.top, width: r.width, height: r.height };
      });
      for (let it = 0; it < 80; it++) {
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i], b = nodes[j];
            const padX = (a.width + b.width) / 2 + 18, padY = (a.height + b.height) / 2 + 10;
            const dx = b.x - a.x, dy = b.y - a.y;
            if (Math.abs(dx) < padX && Math.abs(dy) < padY) {
              const ox = padX - Math.abs(dx), oy = padY - Math.abs(dy);
              if (ox < oy) { const s = ((dx < 0 ? -1 : 1) * ox) / 2; a.x -= s; b.x += s; }
              else { const s = ((dy < 0 ? -1 : 1) * oy) / 2; a.y -= s; b.y += s; }
            }
          }
        }
      }
      nodes.forEach((n) => {
        n.x = Math.max(n.width / 2 + 6, Math.min(fr.width - n.width / 2 - 6, n.x));
        n.y = Math.max(fr.height * 0.14, Math.min(fr.height * 0.9, n.y));
        n.w.el.style.left = ((n.x / fr.width) * 100).toFixed(2) + "%";
        n.w.el.style.top = ((n.y / fr.height) * 100).toFixed(2) + "%";
      });
    };

    relax();
    const t1 = window.setTimeout(relax, 350);
    let cancelled = false;
    document.fonts?.ready?.then(() => { if (!cancelled) relax(); });

    if (reducedMotion) {
      wordsRef.current.forEach((w) => { w.el.style.transform = "translate(-50%,-50%)"; });
      return () => { cancelled = true; window.clearTimeout(t1); };
    }

    const onMove = (e: MouseEvent) => { cursorRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove, { passive: true });

    const t0 = performance.now();
    let raf = 0;
    const frame = () => {
      raf = requestAnimationFrame(frame);
      const now = (performance.now() - t0) / 1000;
      const ms = mScale();
      const { x: cxp, y: cyp } = cursorRef.current;

      wordsRef.current.forEach((w) => {
        const amp = w.amp * ms;
        let tx = Math.sin(now * 0.6 + w.phase) * amp;
        let ty = Math.cos(now * 0.5 + w.phase * 1.3) * amp;
        let ts = 1;
        const r = w.el.getBoundingClientRect();
        const ex = r.left + r.width / 2, ey = r.top + r.height / 2;
        const dx = ex - cxp, dy = ey - cyp;
        const dist = Math.hypot(dx, dy) || 0.001;
        if (w.kind === "0") {
          const R = 260 * (0.7 + ms * 0.3);
          if (dist < R) {
            const f = Math.pow((R - dist) / R, 1.35);
            tx += (dx / dist) * f * 230 * ms;
            ty += (dy / dist) * f * 230 * ms;
          }
        } else if (w.kind === "1" && dist < 100) {
          ts = 1 + 0.18 * ms;
        }
        const e = 0.085;
        w.cx += (tx - w.cx) * e;
        w.cy += (ty - w.cy) * e;
        w.cs += (ts - w.cs) * 0.14;
        w.el.style.transform = `translate(-50%,-50%) translate(${w.cx.toFixed(1)}px,${w.cy.toFixed(1)}px) scale(${w.cs.toFixed(3)})`;
      });

      const trk = trackRef.current;
      if (trk) {
        if (trackedPlaceRef.current) {
          tkRef.current.x = tkRef.current.x == null ? cxp : tkRef.current.x + (cxp - tkRef.current.x) * 0.25;
          tkRef.current.y = tkRef.current.y == null ? cyp : tkRef.current.y + (cyp - tkRef.current.y) * 0.25;
          trk.textContent = trackedPlaceRef.current;
          trk.classList.add("on");
          trk.style.transform = `translate(${tkRef.current.x.toFixed(1)}px,${tkRef.current.y.toFixed(1)}px) translate(-50%, calc(-100% - 16px))`;
        } else {
          trk.classList.remove("on");
        }
      }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelled = true;
      window.clearTimeout(t1);
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reducedMotion, mScale]);

  const onLiveEnter = (place: string) => { trackedPlaceRef.current = place; };
  const onLiveLeave = () => { trackedPlaceRef.current = null; };

  return (
    <section className="s9wordfield" style={{ position: "relative", overflow: "hidden", height: "min(96vh, 900px)", minHeight: 620 }}>
      <div className="s9pat s9pat-dots" aria-hidden="true" style={{ right: 0, bottom: 0, width: "min(30vw, 340px)", height: "min(40vh, 340px)", color: "var(--forest-700)", opacity: 0.07 }} />
      <div aria-hidden="true" data-parallax="0.06" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 0, pointerEvents: "none" }}>
        <span className="s9giant" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(52px, 10vw, 170px)", letterSpacing: "-0.05em", whiteSpace: "nowrap", opacity: 0.16, color: "var(--ochre-500)" }}>studio9dn</span>
      </div>
      <div style={{ position: "absolute", top: 30, left: 0, right: 0, zIndex: 3, textAlign: "center", pointerEvents: "none" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--forest-700)" }}>Architecture at 9°N — a portfolio in motion</div>
      </div>
      <div className="s9words" ref={fieldRef} style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        {liveWords.map((w) => (
          <Link
            key={w.id}
            href={`/work/${w.id}`}
            className="s9word s9word--live"
            data-live="1"
            data-phase={w.phase}
            data-amp={w.amp}
            style={{ left: `${w.left}%`, top: `${w.top}%`, fontSize: `${w.size}px` }}
            onMouseEnter={() => onLiveEnter(w.place)}
            onMouseLeave={onLiveLeave}
            onFocus={() => onLiveEnter(w.place)}
            onBlur={onLiveLeave}
          >
            {w.name}
          </Link>
        ))}
        {ghostWords.map((w) => (
          <span
            key={w.name}
            className="s9word s9word--ghost"
            data-live="0"
            data-phase={w.phase}
            data-amp={w.amp}
            style={{ left: `${w.left}%`, top: `${w.top}%`, fontSize: `${w.size}px` }}
          >
            {w.name}
          </span>
        ))}
        {clientWords.map((w) => (
          <ClientWord key={w.client} word={w} playTone={playTone} />
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 26, left: 0, right: 0, zIndex: 3, display: "flex", justifyContent: "center", gap: 22, alignItems: "center", pointerEvents: "none", flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--stone-500)" }}>Bold — built &amp; published</span>
        <span style={{ width: 5, height: 5, background: "var(--forest-400)" }} />
        <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--stone-400)", fontStyle: "italic" }}>Faint — in progress, catch us if you can</span>
      </div>
      <div className="s9track" id="s9track" ref={trackRef} aria-hidden="true" />
    </section>
  );
}

function ClientWord({ word, playTone }: { word: (typeof clientWords)[number]; playTone: (f: number, d?: number, v?: number) => void }) {
  return (
    <span
      className="s9word s9word--client"
      data-live="c"
      data-phase={word.phase}
      data-amp={word.amp}
      style={{ left: `${word.left}%`, top: `${word.top}%`, fontSize: `${word.size}px` }}
      onMouseEnter={(e) => { e.currentTarget.textContent = word.client; e.currentTarget.classList.add("rev"); playTone(659, 0.09, 0.035); }}
      onMouseLeave={(e) => { e.currentTarget.textContent = "studio9dn"; e.currentTarget.classList.remove("rev"); }}
    >
      studio9dn
    </span>
  );
}
