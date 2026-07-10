import Link from "next/link";
import { notFound } from "next/navigation";
import ImageSlot from "@/components/image-slot/ImageSlot";
import ProjectCard from "@/components/project/ProjectCard";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cur = getProject(slug);
  if (!cur) notFound();

  const others = projects.filter((p) => p.id !== cur.id).slice(0, 3);
  const curSpecs = [
    { k: "Location", v: cur.place },
    { k: "Year", v: cur.year },
    { k: "Scope", v: cur.area },
    { k: "Type", v: cur.type },
    { k: "Status", v: cur.status },
    { k: "Role", v: "Design & delivery" },
  ];

  return (
    <div className="s9view">
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 32px 0" }}>
        <nav style={{ display: "flex", gap: 8, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", marginBottom: 40 }}>
          <Link href="/work" className="s9link" style={{ border: "none", background: "transparent", padding: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", cursor: "pointer" }}>Work</Link>
          <span>/</span>
          <span>{cur.type}</span>
          <span>/</span>
          <span style={{ color: "var(--color-text)" }}>{cur.name}</span>
        </nav>
      </div>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "end", marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: "var(--text-xs)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-text-subtle)", marginBottom: 16 }}>{cur.type} — {cur.place}</div>
            <h1 style={{ fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 600, letterSpacing: "-0.03em", margin: 0, maxWidth: "14ch", lineHeight: 0.98, color: "var(--stone-900)", textWrap: "balance" }}>{cur.name}</h1>
          </div>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.55, color: "var(--color-text-muted)", margin: 0, textWrap: "pretty" }}>{cur.blurb}</p>
        </div>
      </div>
      {/* Hero image */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
        <div className="r3d" style={{ position: "relative", height: "clamp(360px, 52vw, 560px)", borderRadius: 4, overflow: "hidden", border: "1px solid var(--color-border)", background: cur.bg }}>
          <ImageSlot id={cur.hero} placeholder="Click to browse or drop project image" />
          <div className="s9imlabel">{cur.place}</div>
        </div>
      </div>
      {/* Specs + body */}
      <div style={{ maxWidth: 1180, margin: "64px auto 96px", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }}>
        <aside style={{ borderTop: "1px solid var(--color-text)", paddingTop: 20 }}>
          {curSpecs.map((s) => (
            <div key={s.k} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid var(--color-border)" }}>
              <span style={{ fontSize: "var(--text-xs)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-subtle)" }}>{s.k}</span>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{s.v}</span>
            </div>
          ))}
        </aside>
        <div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "var(--text-2xl)", margin: "0 0 24px", letterSpacing: "-0.01em" }}>Overview</h2>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.65, color: "var(--color-text-muted)", maxWidth: "60ch", margin: "0 0 32px", textWrap: "pretty" }}>{cur.overview}</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "var(--text-2xl)", margin: "0 0 24px", letterSpacing: "-0.01em" }}>Design approach</h2>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.65, color: "var(--color-text-muted)", maxWidth: "60ch", margin: 0, textWrap: "pretty" }}>{cur.approach}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48 }}>
            <div style={{ position: "relative", height: 260, borderRadius: 4, overflow: "hidden", border: "1px solid var(--color-border)", background: "var(--stone-300)" }}>
              <ImageSlot id={cur.ga} placeholder="Click to browse or drop" />
              <div className="s9imlabel">Detail — brise-soleil</div>
            </div>
            <div style={{ position: "relative", height: 260, borderRadius: 4, overflow: "hidden", border: "1px solid var(--color-border)", background: cur.bg }}>
              <ImageSlot id={cur.gb} placeholder="Click to browse or drop" />
              <div className="s9imlabel">Courtyard</div>
            </div>
          </div>
        </div>
      </div>
      {/* Next projects */}
      <section style={{ borderTop: "1px solid var(--color-border)", background: "var(--stone-100)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 32px" }}>
          <div style={{ fontSize: "var(--text-xs)", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-text-subtle)", marginBottom: 32 }}>More work</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {others.map((p) => (
              <ProjectCard key={p.id} project={p} height={240} variant="more" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
