"use client";

import { useState } from "react";
import { useApp, MotionIntensity, ProjectPalette } from "@/lib/app-context";

export default function TweaksPanel() {
  const { motionIntensity, setMotionIntensity, projectPalette, setProjectPalette, patterns, setPatterns } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <div className="s9tweaks">
      {open && (
        <div className="s9tweaks-panel">
          <div className="s9tweaks-row">
            <span className="lbl">Motion intensity</span>
            <div className="s9tweaks-opts">
              {(["calm", "balanced", "bold"] as MotionIntensity[]).map((v) => (
                <button key={v} className={"s9tweaks-opt" + (motionIntensity === v ? " active" : "")} onClick={() => setMotionIntensity(v)}>
                  {v[0].toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="s9tweaks-row">
            <span className="lbl">Project palette</span>
            <div className="s9tweaks-opts">
              {(["vivid", "monochrome"] as ProjectPalette[]).map((v) => (
                <button key={v} className={"s9tweaks-opt" + (projectPalette === v ? " active" : "")} onClick={() => setProjectPalette(v)}>
                  {v[0].toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="s9tweaks-row">
            <span className="lbl">Patterns</span>
            <div className="s9tweaks-opts">
              <button className={"s9tweaks-opt" + (patterns ? " active" : "")} onClick={() => setPatterns(true)}>On</button>
              <button className={"s9tweaks-opt" + (!patterns ? " active" : "")} onClick={() => setPatterns(false)}>Off</button>
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        className={"s9tweaks-btn" + (open ? " open" : "")}
        onClick={() => setOpen((o) => !o)}
        aria-label="Tweaks"
        aria-expanded={open}
      >
        +
      </button>
    </div>
  );
}
