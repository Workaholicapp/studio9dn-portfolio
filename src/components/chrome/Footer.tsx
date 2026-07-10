import Link from "next/link";
import { nav } from "@/data/site";

export default function Footer() {
  return (
    <footer style={{ background: "var(--forest-800)", color: "var(--stone-300)", marginTop: "auto", position: "relative", overflow: "hidden" }}>
      <div className="s9pat s9pat-bars" aria-hidden="true" style={{ left: 0, top: 0, width: "100%", height: "100%", color: "var(--forest-500)", opacity: 0.05 }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid var(--forest-600)" }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logos/Studio9DN-Wordmark-White.png" alt="Studio9DN" style={{ height: 28, width: "auto", display: "block" }} />
            <p style={{ fontSize: "var(--text-base)", lineHeight: 1.6, margin: "24px 0 0", maxWidth: "36ch", color: "var(--stone-300)", textWrap: "pretty" }}>
              Tropical architecture, designed to perform. Based in Lagos, at 9 degrees north.
            </p>
          </div>
          <div>
            <div style={{ fontSize: "var(--text-xs)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--stone-500)", marginBottom: 18 }}>Navigate</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              {nav.map((n) => (
                <Link key={n.id} href={n.href} className="s9link" style={{ border: "none", background: "transparent", padding: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-sm)", color: "var(--stone-100)", cursor: "pointer" }}>
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "var(--text-xs)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--stone-500)", marginBottom: 18 }}>Studio</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: "var(--text-sm)", color: "var(--stone-100)" }}>
              <span>info@studio9dn.com</span>
              <span>+234 812 917 9436</span>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 28, fontSize: "var(--text-xs)", color: "var(--stone-500)" }}>
          <span>© 2026 Studio9DN. All rights reserved.</span>
          <span>9°N — where the world turns tropical.</span>
        </div>
      </div>
    </footer>
  );
}
