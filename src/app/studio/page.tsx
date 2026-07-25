"use client";

import { useState } from "react";
import SiteImage from "@/components/media/SiteImage";
import { studioStats, values, team } from "@/data/site";

export default function StudioPage() {
  const [peopleIdx, setPeopleIdx] = useState(0);
  const [peopleOn, setPeopleOn] = useState(false);

  const idx = Math.min(peopleIdx, team.length - 1);
  const featured = team[idx];
  const thumbs = team.map((m, i) => ({ ...m, i })).filter((m) => m.i !== idx);
  const indexLabel = String(idx + 1).padStart(2, "0") + " / " + String(team.length).padStart(2, "0");

  const selectPerson = (i: number) => { setPeopleIdx(i); setPeopleOn(false); };
  const nextPerson = () => { setPeopleIdx((idx + 1) % team.length); setPeopleOn(false); };

  return (
    <div className="s9view">
      <section className="scene" style={{ position: "relative", overflow: "hidden", padding: "96px 0 40px" }}>
        <span aria-hidden="true" data-parallax="0.1" className="s9giant" style={{ position: "absolute", right: "4%", top: 58, zIndex: 0, fontSize: "clamp(56px, 12vw, 180px)", opacity: 0.9 }}>about</span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--forest-700)", marginBottom: 20 }}>Studio — Lagos, 9°N</div>
          <h1 style={{ fontSize: "clamp(38px, 5.4vw, 70px)", fontWeight: 600, letterSpacing: "-0.03em", margin: 0, maxWidth: "18ch", lineHeight: 1.0, color: "var(--stone-900)", textWrap: "balance" }}>
            Markers for clusters of ideals, <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>keyed to coordinates.</span>
          </h1>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "24px 32px 72px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div className="r3d tilt3d" style={{ position: "relative", height: 520, borderRadius: 4, overflow: "hidden", border: "1px solid var(--color-border)" }}>
          <SiteImage src="/images/site/studio-hero.jpg" alt="Studio9DN — studio" background="linear-gradient(135deg, var(--forest-600), var(--forest-800))" />
          <div className="s9imlabel">Studio — Ikoyi</div>
        </div>
        <div className="r3d d1">
          <p style={{ fontSize: "var(--text-xl)", lineHeight: 1.5, margin: "0 0 24px", textWrap: "pretty" }}>Studio9DN is an independent, multidisciplinary practice rooted in tropical architecture, holistic building performance and sustainable design.</p>
          <p style={{ fontSize: "var(--text-base)", lineHeight: 1.65, color: "var(--color-text-muted)", margin: "0 0 20px", textWrap: "pretty" }}>9DN is 9 degrees north — a line of latitude through the birthplace of the practice, and the line that marks where the world turns tropical. We design for that climate specifically: shade, cross-ventilation, deep verandas and rainwater, before any machinery.</p>
          <p style={{ fontSize: "var(--text-base)", lineHeight: 1.65, color: "var(--color-text-muted)", margin: 0, textWrap: "pretty" }}>We work with real estate firms, institutions and private clients who share an acquired taste for fine design details — and we never compromise on quality, performance and sustainability.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40, borderTop: "1px solid var(--color-border)", paddingTop: 32 }}>
            {studioStats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "var(--text-3xl)", fontWeight: 500, letterSpacing: "-0.02em" }}>{s.n}</div>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "var(--stone-100)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 32px" }}>
          <div style={{ fontSize: "var(--text-xs)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-text-subtle)", marginBottom: 32 }}>Our values</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {values.map((v) => (
              <div key={v.title} style={{ borderTop: "1px solid var(--color-text)", paddingTop: 20 }}>
                <div style={{ fontSize: "var(--text-xl)", fontWeight: 500 }}>{v.title}</div>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginTop: 10, lineHeight: 1.55, textWrap: "pretty" }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="scene" style={{ position: "relative", overflow: "hidden", maxWidth: 1240, margin: "96px auto 110px", padding: "0 32px" }}>
        <div className="s9people-wrap">
          <div className="s9people-left">
            <div className="s9people-meta">
              <span className="ct">{indexLabel}</span>
              <span className="lbl">Our people</span>
            </div>
            <div className="s9people-thumbs">
              {thumbs.map((m) => (
                <button key={m.slot} type="button" onClick={() => selectPerson(m.i)} className="s9people-thumb" style={{ background: m.pastel }} aria-label={m.name}>
                  <SiteImage src={m.img} alt={m.name} />
                </button>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => setPeopleOn((o) => !o)} className={"s9people-hero" + (peopleOn ? " on" : "")} aria-label="Reveal in colour">
            <span className="bgc" style={{ background: featured.pastel }} />
            <span className="imgc">
              <SiteImage src={featured.img} alt={featured.name} />
            </span>
          </button>
          <div className="s9people-side">
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-base)", fontWeight: 600, color: "var(--stone-900)" }}>{featured.name}</div>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", marginTop: 4 }}>{featured.role}</div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(18px, 1.9vw, 25px)", lineHeight: 1.55, letterSpacing: "-0.005em", color: "var(--stone-900)", margin: "30px 0 0", maxWidth: "32ch", textWrap: "pretty" }}>&quot;{featured.line}&quot;</p>
              <button type="button" onClick={nextPerson} className="s9people-next" aria-label="Next person">→</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
