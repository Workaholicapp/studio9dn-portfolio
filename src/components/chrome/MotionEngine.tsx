"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useApp } from "@/lib/app-context";

/**
 * Global, persistent motion system — ported from the prototype's imperative
 * componentDidMount/_scan/_frame engine. Scans the DOM by class/data-attribute
 * (not React state) so any page can opt into an effect just by using the class,
 * exactly like the original markup does.
 */
export default function MotionEngine() {
  const { reducedMotion, mScale, playTone } = useApp();
  const pathname = usePathname();
  const mScaleRef = useRef(mScale);
  const playToneRef = useRef(playTone);
  useEffect(() => { mScaleRef.current = mScale; }, [mScale]);
  useEffect(() => { playToneRef.current = playTone; }, [playTone]);

  useEffect(() => {
    if (reducedMotion) return;

    let raf = 0;
    let mx = 0, my = 0; // normalized -1..1
    let cmx = 0, cmy = 0; // smoothed
    let px = 0, py = 0; // raw cursor px
    let cpx = 0, cpy = 0; // eased cursor px
    let lastHoverWord: Element | null = null;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const onTilt = (ev: Event) => {
      const el = ev.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const me = ev as MouseEvent;
      const ms = mScaleRef.current();
      const rx = ((me.clientY - r.top) / r.height - 0.5) * -16 * ms;
      const ry = ((me.clientX - r.left) / r.width - 0.5) * 20 * ms;
      el.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    };
    const offTilt = (ev: Event) => {
      (ev.currentTarget as HTMLElement).style.transform = "rotateX(0) rotateY(0)";
    };

    const scan = () => {
      document.querySelectorAll(".r3d:not(.in)").forEach((el) => io.observe(el));
      document.querySelectorAll<HTMLElement>(".tilt3d").forEach((el) => {
        if ((el as HTMLElement & { _tw?: boolean })._tw) return;
        (el as HTMLElement & { _tw?: boolean })._tw = true;
        el.addEventListener("mousemove", onTilt);
        el.addEventListener("mouseleave", offTilt);
      });
    };

    const onMove = (ev: MouseEvent) => {
      const w = window.innerWidth, h = window.innerHeight;
      mx = (ev.clientX / w - 0.5) * 2;
      my = (ev.clientY / h - 0.5) * 2;
      px = ev.clientX; py = ev.clientY;
    };

    const onOver = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      const hoverable = target.closest?.('button, a, .s9card, [role="button"], input, textarea, select');
      const cursor = document.getElementById("s9cursor");
      if (cursor) cursor.classList.toggle("hot", !!hoverable);
      const word = target.closest?.(".s9word--live");
      if (word && word !== lastHoverWord) playToneRef.current(523, 0.08, 0.035);
      lastHoverWord = word || null;
    };

    const onClickSound = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      if (target.closest?.("button, a")) playToneRef.current(330, 0.07, 0.03);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("click", onClickSound, true);

    scan();
    const rescanTimer = window.setTimeout(scan, 350);
    let fontsCancelled = false;
    document.fonts?.ready?.then(() => { if (!fontsCancelled) scan(); });

    const frame = () => {
      const cursor = document.getElementById("s9cursor");
      const dot = document.getElementById("s9cursorDot");
      if (cursor) {
        cpx += (px - cpx) * 0.16;
        cpy += (py - cpy) * 0.16;
        cursor.style.transform = `translate(${cpx.toFixed(1)}px,${cpy.toFixed(1)}px)`;
        if (dot) dot.style.transform = `translate(${px.toFixed(1)}px,${py.toFixed(1)}px)`;
        if (!cursor.classList.contains("ready") && (px || py)) {
          cursor.classList.add("ready");
          dot?.classList.add("ready");
        }
      }
      cmx += (mx - cmx) * 0.07;
      cmy += (my - cmy) * 0.07;
      const vh = window.innerHeight || 800;

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const sp = parseFloat(el.getAttribute("data-parallax") || "0") || 0;
        const r = el.getBoundingClientRect();
        const off = (r.top + r.height / 2 - vh / 2) * -sp;
        const mo = el.getAttribute("data-mouse");
        let mmx = 0, mmy = 0;
        if (mo) {
          const m = parseFloat(mo) || 0;
          mmx = cmx * m * 100; mmy = cmy * m * 60;
        }
        el.style.transform = `translate3d(${mmx.toFixed(1)}px,${(off + mmy).toFixed(1)}px,0)`;
      });
      document.querySelectorAll<HTMLElement>("[data-mouse]:not([data-parallax])").forEach((el) => {
        const m = (parseFloat(el.getAttribute("data-mouse") || "0") || 0) * mScaleRef.current();
        el.style.transform = `translate3d(${(cmx * m * 100).toFixed(1)}px,${(cmy * m * 70).toFixed(1)}px,0)`;
      });
      document.querySelectorAll<HTMLElement>("[data-parallax-x]").forEach((el) => {
        const sp = parseFloat(el.getAttribute("data-parallax-x") || "0") || 0;
        const p = el.parentElement || el;
        const r = p.getBoundingClientRect();
        const prog = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
        el.style.transform = `translate3d(${(prog * sp).toFixed(1)}px,0,0)`;
      });
      document.querySelectorAll<HTMLElement>(".s9stackcard").forEach((card) => {
        const r = card.getBoundingClientRect();
        const h = r.height || vh;
        const p = Math.min(1, Math.max(0, -r.top / h));
        const dim = card.querySelector<HTMLElement>(".s9stackcard-dim");
        if (dim) dim.style.opacity = (p * 0.6).toFixed(3);
        const inner = card.querySelector<HTMLElement>(".s9stackcard-inner");
        if (inner) inner.style.transform = `scale(${(1 - p * 0.07).toFixed(4)})`;
      });

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      fontsCancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(rescanTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("click", onClickSound, true);
      io.disconnect();
      document.querySelectorAll<HTMLElement>(".tilt3d").forEach((el) => {
        el.removeEventListener("mousemove", onTilt);
        el.removeEventListener("mouseleave", offTilt);
        delete (el as HTMLElement & { _tw?: boolean })._tw;
      });
    };
  }, [reducedMotion, pathname]);

  return null;
}
