import Link from "next/link";
import HeroWordField from "@/components/home/HeroWordField";
import ProjectCard from "@/components/project/ProjectCard";
import SiteImage from "@/components/media/SiteImage";
import PanoViewer from "@/components/pano/PanoViewer";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 3);

export default function HomePage() {
  return (
    <div className="s9view">
      <HeroWordField />

      {/* Feature badges */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px 96px" }}>
        <div style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "20px 0", display: "flex", justifyContent: "center", alignItems: "center", gap: "20px 56px", flexWrap: "wrap" }}>
          {[
            { icon: "✓", label: "Full-service design studio" },
            { icon: "⌖", label: "Located in Lagos · 9°N" },
            { icon: "♥", label: "Award-winning practice" },
          ].map((b) => (
            <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text)" }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--forest-700)", color: "var(--stone-50)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </section>

      {/* We create unique experiences */}
      <section className="scene" style={{ position: "relative", overflow: "hidden", maxWidth: 1280, margin: "0 auto", padding: "8px 32px 48px" }}>
        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
          <div className="tilt3d r3d" style={{ position: "relative", height: "clamp(340px, 44vw, 520px)", borderRadius: 4, overflow: "hidden" }}>
            <SiteImage src="/images/site/home-people.jpg" alt="Studio9DN — studio photo" background="var(--stone-300)" />
          </div>
          <div className="r3d d1">
            <h2 style={{ fontSize: "clamp(28px, 3.4vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 600, margin: 0, color: "var(--stone-900)", textWrap: "balance" }}>We create unique spatial experiences.</h2>
            <p style={{ fontSize: "var(--text-base)", lineHeight: 1.7, color: "var(--color-text-muted)", margin: "22px 0 0", maxWidth: "46ch", textWrap: "pretty" }}>
              We&apos;re excited by our work and how it shapes the way people live. With over a decade of experience, we deliver considered architecture and construction-ready documentation — keeping quality, performance and sustainability at the core of every brief.
            </p>
            <div style={{ marginTop: 30 }}>
              <Button href="/studio">About studio</Button>
            </div>
          </div>
        </div>
        <span aria-hidden="true" data-parallax="0.08" className="s9giant" style={{ position: "absolute", right: 10, bottom: 17, zIndex: 0, fontSize: "clamp(64px, 13vw, 190px)", opacity: 0.9 }}>studio</span>
      </section>

      {/* Service columns */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "8px 32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
          {[
            { no: "01", title: "Architecture", desc: "Considered, passive-first buildings tuned to climate, site and brief — concept through completion.", cls: "r3d" },
            { no: "02", title: "Interior design", desc: "Interiors and detailing that carry the architecture inward, warm and buildable.", cls: "r3d d1" },
            { no: "03", title: "Technical delivery", desc: "Construction-ready documentation and coordination, delivered with precision.", cls: "r3d d2" },
          ].map((s) => (
            <div key={s.no} className={s.cls}>
              <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>{s.no}</div>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--stone-900)" }}>{s.title}</div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--color-text-muted)", margin: "10px 0 0", maxWidth: "32ch", textWrap: "pretty" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="scene" style={{ position: "relative", overflow: "hidden", padding: "40px 0 8px" }}>
        <span aria-hidden="true" data-parallax="0.1" className="s9giant" style={{ position: "absolute", left: 0, top: 40, zIndex: 0, fontSize: "clamp(64px, 13vw, 190px)", opacity: 0.9 }}>projects</span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "96px 32px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(24px, 2.6vw, 38px)", fontWeight: 600, letterSpacing: "-0.02em", margin: 0, color: "var(--stone-900)" }}>Selected work</h2>
            <Link href="/work" className="s9link" style={{ border: "none", background: "transparent", fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", cursor: "pointer" }}>All projects →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} height={300} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <Button href="/work">Explore projects</Button>
          </div>
        </div>
      </section>

      {/* 360° panorama band */}
      <section className="s9pano scene" style={{ position: "relative", overflow: "hidden", background: "#0f100c", marginTop: 40 }}>
        <PanoViewer src="/images/site/pano-equirectangular.jpg" />
      </section>

      {/* CTA button */}
      <section style={{ maxWidth: 1180, margin: "72px auto 96px", padding: "0 32px", display: "flex", justifyContent: "center" }}>
        <Link href="/contact" className="s9cta-btn">
          <div className="s9pat s9pat-stripes" aria-hidden="true" style={{ inset: 0, color: "var(--stone-50)", opacity: 0.08 }} />
          <span>Let&apos;s build something considered</span>
          <span className="ar" aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
