import Link from "next/link";
import SiteImage from "@/components/media/SiteImage";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  height = 300,
  r3dClass = "",
  variant = "grid",
}: {
  project: Project;
  height?: number;
  r3dClass?: string;
  variant?: "grid" | "more";
}) {
  return (
    <div className={"s9card r3d tilt3d" + (r3dClass ? ` ${r3dClass}` : "")} style={{ textAlign: "left" }}>
      <div className="tl-lift" style={{ position: "relative", height, borderRadius: 4, overflow: "hidden", border: "1px solid var(--color-border)" }}>
        <div className="s9zoom" style={{ position: "absolute", inset: 0 }}>
          <SiteImage src={project.cardImg} alt={project.name} background={project.bg} />
        </div>
        <div className="s9imlabel">{project.place}</div>
      </div>
      {variant === "more" ? (
        <Link
          href={`/work/${project.id}`}
          className="s9link"
          style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", textAlign: "left", marginTop: 14, width: "100%", display: "block" }}
        >
          <span style={{ display: "block", fontSize: "var(--text-lg)", fontWeight: 600, color: "var(--stone-900)" }}>{project.name}</span>
          <span style={{ display: "block", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginTop: 4 }}>{project.type}</span>
        </Link>
      ) : (
        <>
          <Link
            href={`/work/${project.id}`}
            className="s9link"
            style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 16, width: "100%" }}
          >
            <span style={{ fontSize: "var(--text-lg)", fontWeight: 600, color: "var(--stone-900)" }}>{project.name}</span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>{project.year}</span>
          </Link>
          <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginTop: 4 }}>{project.type}</div>
        </>
      )}
    </div>
  );
}
