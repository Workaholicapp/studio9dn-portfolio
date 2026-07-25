"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/lib/app-context";
import SiteImage from "@/components/media/SiteImage";
import { projects, sceneFor, disciplineLabel, patternClasses, type Discipline } from "@/data/projects";

const tabsBase: { id: "all" | Discipline; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "realestate", label: "Real estate" },
  { id: "architecture", label: "Architecture" },
  { id: "interior", label: "Interiors" },
];

export default function WorkPage() {
  const { projectPalette } = useApp();
  const [filter, setFilter] = useState<"all" | Discipline>("all");

  const sceneSrc = filter === "all" ? projects : projects.filter((p) => p.discipline === filter);
  const sceneList = sceneSrc.map((p, i) => ({
    ...p,
    n: String(i + 1).padStart(2, "0"),
    discLabel: disciplineLabel[p.discipline],
    scene: sceneFor(p.id, projectPalette),
    patCls: patternClasses[i % patternClasses.length],
  }));

  return (
    <div className="s9view">
      <section className="scene" style={{ position: "relative", overflow: "hidden", padding: "96px 0 40px" }}>
        <span aria-hidden="true" data-parallax="0.1" className="s9giant" style={{ position: "absolute", right: "3%", top: 64, zIndex: 0, fontSize: "clamp(56px, 11vw, 150px)", opacity: 0.9 }}>projects</span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--forest-700)", marginBottom: 20 }}>Projects — real estate · architecture · interiors</div>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 78px)", fontWeight: 600, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch", lineHeight: 0.98, color: "var(--stone-900)", textWrap: "balance" }}>Three disciplines, one standard.</h1>
          <div style={{ display: "flex", gap: 10, marginTop: 36, flexWrap: "wrap" }}>
            {tabsBase.map((t) => {
              const active = filter === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setFilter(t.id)}
                  style={{
                    padding: "9px 18px", borderRadius: 6, cursor: "pointer",
                    fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", fontWeight: 500,
                    border: "1px solid " + (active ? "var(--forest-700)" : "var(--color-border)"),
                    background: active ? "var(--forest-700)" : "transparent",
                    color: active ? "var(--stone-100)" : "var(--color-text-muted)",
                    transition: "all 160ms ease-out",
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 32, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--stone-400)" }}>
            <span aria-hidden="true" style={{ display: "inline-block", animation: "s9scrollcue 1.8s ease-in-out infinite" }}>↓</span> Scroll — projects stack as you go
          </div>
        </div>
      </section>
      <div className="s9stack">
        {sceneList.map((p, i) => (
          <section
            key={p.id}
            className="s9stackcard"
            style={{ background: p.scene.bg, color: p.scene.fg, ["--saccent-inv" as string]: p.scene.bg }}
          >
            <div className="s9stackcard-dim" />
            <div className={"s9pat " + p.patCls} aria-hidden="true" style={{ right: 0, top: 0, width: "min(38vw, 420px)", height: "100%", color: p.scene.accent, opacity: 0.1 }} />
            <div className="s9stackcard-inner" style={i % 2 === 1 ? { flexDirection: "row-reverse" } : undefined}>
              <div className="s9stackcard-media" style={{ overflow: "hidden" }}>
                <div className="s9stackcard-mediainner" data-parallax="0.05">
                  <div style={{ position: "absolute", inset: 0 }}>
                    <SiteImage src={p.cardImg} alt={p.name} background={p.bg} />
                  </div>
                </div>
                <div className="s9imlabel">{p.place}</div>
              </div>
              <div className="s9stackcard-copy">
                <div className="s9stackcard-index">{p.n}</div>
                <div className="s9stackcard-eyebrow">{p.discLabel} · {p.year}</div>
                <h2 className="s9stackcard-name">{p.name}</h2>
                <p className="s9stackcard-blurb">{p.overview}</p>
                <div className="s9stackcard-meta">
                  <div><span className="k">Location</span><span className="v">{p.place}</span></div>
                  <div><span className="k">Scope</span><span className="v">{p.area}</span></div>
                  <div><span className="k">Status</span><span className="v">{p.status}</span></div>
                </div>
                <Link href={`/work/${p.id}`} className="s9stackcard-view"><span>View project</span> <span className="ar" aria-hidden="true">→</span></Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
