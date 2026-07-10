import Link from "next/link";
import { services, process, accordionItems, creativeDisciplines } from "@/data/site";

export default function ServicesPage() {
  return (
    <div className="s9view">
      <section className="scene" style={{ position: "relative", overflow: "hidden", padding: "96px 0 40px" }}>
        <span aria-hidden="true" data-parallax="0.1" className="s9giant" style={{ position: "absolute", left: "4%", top: 58, zIndex: 0, fontSize: "clamp(48px, 10vw, 150px)", opacity: 0.9 }}>expertise</span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--forest-700)", marginBottom: 20 }}>Services &amp; expertise</div>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 78px)", fontWeight: 600, letterSpacing: "-0.03em", margin: 0, maxWidth: "15ch", lineHeight: 0.98, color: "var(--stone-900)", textWrap: "balance" }}>Performance, designed in.</h1>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.55, color: "var(--color-text-muted)", margin: "26px 0 0", maxWidth: "56ch", textWrap: "pretty" }}>Six disciplines, one passive-first outlook. We never compromise on quality, performance and sustainability.</p>
          <div style={{ marginTop: 36 }}>
            <Link href="/contact" className="s9btn">
              <span className="dot" aria-hidden="true">→</span>
              <span className="label">Start a project</span>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto 96px", padding: "24px 32px 0" }}>
        {services.map((s) => (
          <details key={s.no} className="s9svc-row">
            <summary>
              <span className="no">{s.no}</span>
              <span className="title">{s.title}</span>
              <span className="toggle" aria-hidden="true"><span>+</span></span>
            </summary>
            <div className="body">
              <p>{s.desc}</p>
              <div className="thumb" style={{ background: s.swatch }} />
            </div>
          </details>
        ))}
      </section>

      {/* 9DN Creatives band */}
      <section className="scene" style={{ position: "relative", overflow: "hidden", maxWidth: 1240, margin: "0 auto 96px", padding: "0 32px" }}>
        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", background: "var(--forest-800)", borderRadius: 4, padding: "clamp(40px, 5vw, 64px)", overflow: "hidden" }}>
          <div className="r3d">
            <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ochre-300, #E0C382)", marginBottom: 18 }}>A 9DN service</div>
            <h2 style={{ fontSize: "clamp(28px, 3.4vw, 46px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.03, margin: 0, color: "var(--stone-50)", textWrap: "balance" }}>9DN Creatives — beyond the building.</h2>
            <p style={{ fontSize: "var(--text-base)", lineHeight: 1.65, color: "var(--stone-300)", margin: "20px 0 26px", maxWidth: "42ch", textWrap: "pretty" }}>Brand identity, graphic design, product and motion — the creative work that surrounds and amplifies our architecture, offered to clients on demand or as a standalone commission.</p>
            <Link href="/creatives" className="s9btn s9btn--inverse">
              <span className="dot" aria-hidden="true">→</span>
              <span className="label">Explore 9DN Creatives</span>
            </Link>
          </div>
          <div className="r3d d1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {creativeDisciplines.map((d) => (
              <div key={d.no} style={{ border: "1px solid var(--forest-600)", borderRadius: 4, padding: 20, minHeight: 96, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "var(--ochre-300, #E0C382)" }}>{d.no}</div>
                <div style={{ fontSize: 15, fontWeight: 500, color: "var(--stone-50)" }}>{d.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "var(--forest-700)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "96px 32px", color: "var(--stone-100)" }}>
          <h2 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, margin: "0 0 48px", letterSpacing: "-0.01em" }}>How we work</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px 32px" }}>
            {process.map((p) => (
              <div key={p.no} style={{ borderTop: "1px solid var(--forest-500)", paddingTop: 20 }}>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--stone-300)" }}>{p.no}</div>
                <div style={{ fontSize: "var(--text-lg)", fontWeight: 500, marginTop: 10 }}>{p.title}</div>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--stone-300)", marginTop: 8, lineHeight: 1.55, textWrap: "pretty" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities accordion */}
      <section style={{ maxWidth: 760, margin: "96px auto", padding: "0 32px" }}>
        <h2 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, margin: "0 0 32px", letterSpacing: "-0.01em" }}>Capabilities in depth</h2>
        {accordionItems.map((a) => (
          <details key={a.title} style={{ borderBottom: "1px solid var(--color-border)", padding: "20px 0" }}>
            <summary style={{ cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "var(--text-lg)", fontWeight: 500 }}>
              <span>{a.title}</span>
              <span style={{ color: "var(--color-text-subtle)", fontWeight: 400 }}>+</span>
            </summary>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: 1.6, margin: "16px 0 0", maxWidth: "60ch", textWrap: "pretty" }}>{a.content}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
