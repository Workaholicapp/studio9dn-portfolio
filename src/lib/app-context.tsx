"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

export type MotionIntensity = "calm" | "balanced" | "bold";
export type ProjectPalette = "vivid" | "monochrome";

interface AppState {
  patterns: boolean;
  motionIntensity: MotionIntensity;
  projectPalette: ProjectPalette;
  muted: boolean;
  menuOpen: boolean;
}

interface AppContextValue extends AppState {
  reducedMotion: boolean;
  mScale: () => number;
  setPatterns: (v: boolean) => void;
  setMotionIntensity: (v: MotionIntensity) => void;
  setProjectPalette: (v: ProjectPalette) => void;
  toggleSound: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
  playTone: (freq: number, dur?: number, vol?: number, type?: OscillatorType) => void;
  playStrike: () => void;
}

const STORAGE_KEY = "s9-settings";

const defaults: AppState = {
  patterns: true,
  motionIntensity: "balanced",
  projectPalette: "vivid",
  muted: false,
  menuOpen: false,
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Start from the SSR-safe defaults on both server and first client render
  // (no `window` access in the initializer) — reading localStorage/matchMedia
  // synchronously here would produce a value that differs from the server
  // markup and React does not patch a hydration mismatch in inline styles.
  // The real values are applied a moment later, after mount, via the effect
  // below (a legitimate "sync from an external system on mount" case).
  const [state, setState] = useState<AppState>(defaults);
  const [reducedMotion, setReducedMotion] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe: syncs client-only storage after mount
      if (raw) setState((s) => ({ ...s, ...JSON.parse(raw) }));
    } catch {
      /* ignore */
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const persist = useCallback((next: Partial<AppState>) => {
    setState((s) => {
      const merged = { ...s, ...next };
      try {
        const { patterns, motionIntensity, projectPalette, muted } = merged;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ patterns, motionIntensity, projectPalette, muted }));
      } catch {
        /* ignore */
      }
      return merged;
    });
  }, []);

  const ensureAudio = useCallback(() => {
    if (!audioRef.current) {
      try {
        const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioRef.current = new Ctor();
      } catch {
        audioRef.current = null;
      }
    }
    if (audioRef.current && audioRef.current.state === "suspended") {
      audioRef.current.resume().catch(() => {});
    }
    return audioRef.current;
  }, []);

  const playTone = useCallback(
    (freq: number, dur = 0.09, vol = 0.04, type: OscillatorType = "sine") => {
      if (state.muted) return;
      const a = ensureAudio();
      if (!a) return;
      const t = a.currentTime;
      const o = a.createOscillator();
      const g = a.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g);
      g.connect(a.destination);
      o.start(t);
      o.stop(t + dur + 0.03);
    },
    [ensureAudio, state.muted]
  );

  const playStrike = useCallback(() => {
    if (state.muted) return;
    const a = ensureAudio();
    if (!a) return;
    const t = a.currentTime;
    const o1 = a.createOscillator();
    const g1 = a.createGain();
    o1.type = "sawtooth";
    o1.frequency.setValueAtTime(1200, t);
    o1.frequency.exponentialRampToValueAtTime(180, t + 0.16);
    g1.gain.setValueAtTime(0.0001, t);
    g1.gain.linearRampToValueAtTime(0.05, t + 0.015);
    g1.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o1.connect(g1);
    g1.connect(a.destination);
    o1.start(t);
    o1.stop(t + 0.2);
    const o2 = a.createOscillator();
    const g2 = a.createGain();
    o2.type = "sine";
    o2.frequency.setValueAtTime(110, t + 0.14);
    g2.gain.setValueAtTime(0.0001, t + 0.14);
    g2.gain.linearRampToValueAtTime(0.09, t + 0.155);
    g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
    o2.connect(g2);
    g2.connect(a.destination);
    o2.start(t + 0.14);
    o2.stop(t + 0.34);
  }, [ensureAudio, state.muted]);

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      reducedMotion,
      mScale: () => (state.motionIntensity === "calm" ? 0.35 : state.motionIntensity === "bold" ? 1.9 : 1),
      setPatterns: (v) => persist({ patterns: v }),
      setMotionIntensity: (v) => persist({ motionIntensity: v }),
      setProjectPalette: (v) => persist({ projectPalette: v }),
      toggleSound: () =>
        setState((s) => {
          const next = { ...s, muted: !s.muted };
          persist({ muted: next.muted });
          if (!next.muted) playTone(440, 0.12, 0.05);
          return next;
        }),
      toggleMenu: () => setState((s) => ({ ...s, menuOpen: !s.menuOpen })),
      closeMenu: () => setState((s) => ({ ...s, menuOpen: false })),
      openMenu: () => setState((s) => ({ ...s, menuOpen: true })),
      playTone,
      playStrike,
    }),
    [state, reducedMotion, persist, playTone, playStrike]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
