import ImageSlot from "@/components/image-slot/ImageSlot";
import Button from "@/components/ui/Button";
import { creatives } from "@/data/site";

export default function CreativesPage() {
  return (
    <div className="s9view">
      <section className="scene" style={{ position: "relative", overflow: "hidden", padding: "96px 0 40px" }}>
        <span aria-hidden="true" data-parallax="0.1" className="s9giant" style={{ position: "absolute", left: "4%", top: 58, zIndex: 0, fontSize: "clamp(44px, 9.5vw, 140px)", opacity: 0.9 }}>creatives</span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--forest-700)", marginBottom: 20 }}>9DN Creatives — beyond the building</div>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 78px)", fontWeight: 600, letterSpacing: "-0.03em", margin: 0, maxWidth: "15ch", lineHeight: 0.98, color: "var(--stone-900)", textWrap: "balance" }}>Design that carries the whole story.</h1>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.55, color: "var(--color-text-muted)", margin: "26px 0 0", maxWidth: "58ch", textWrap: "pretty" }}>Brand identity, graphic design, product and motion — the creative work that surrounds and amplifies our architecture, offered to clients on demand.</p>
        </div>
      </section>
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "24px 32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px 28px" }}>
          {creatives.map((c) => (
            <div key={c.slot} className="s9card r3d tilt3d">
              <div className="tl-lift" style={{ position: "relative", height: 300, borderRadius: 4, overflow: "hidden", border: "1px solid var(--color-border)", background: c.bg }}>
                <ImageSlot id={c.slot} placeholder="Click to browse or drop artwork" />
                <div className="s9imlabel">{c.tag}</div>
              </div>
              <div style={{ fontSize: "var(--text-lg)", fontWeight: 600, marginTop: 16, color: "var(--stone-900)" }}>{c.title}</div>
              <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginTop: 4 }}>{c.tag}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ maxWidth: 1180, margin: "56px auto 96px", padding: "0 32px" }}>
        <div className="r3d" style={{ borderRadius: 4, background: "var(--forest-700)", padding: "clamp(48px, 7vw, 88px) clamp(32px, 6vw, 64px)", color: "var(--stone-50)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 600, margin: 0, letterSpacing: "-0.02em", maxWidth: "22ch", lineHeight: 1.04, textWrap: "balance", color: "var(--stone-50)" }}>Need branding or collateral for your project?</h2>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--stone-300)", margin: "22px 0 34px", maxWidth: "46ch", textWrap: "pretty" }}>Produced alongside the architecture, or as a standalone commission.</p>
          <Button href="/contact" variant="inverse">Start a brief</Button>
        </div>
      </section>
    </div>
  );
}
