"use client";

import { useState } from "react";
import SiteImage from "@/components/media/SiteImage";
import Button from "@/components/ui/Button";
import Compass from "@/components/ui/Compass";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { contactRows, contactCards } from "@/data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="s9view">
      {/* Intro band */}
      <section className="scene" style={{ position: "relative", overflow: "hidden", padding: "64px 0 8px" }}>
        <span aria-hidden="true" data-parallax="0.1" className="s9giant" style={{ position: "absolute", right: 6, top: 30, zIndex: 0, fontSize: "clamp(64px, 13vw, 190px)", opacity: 0.9 }}>contact</span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--forest-700)", marginBottom: 20 }}>Contact — 9DN</div>
          <h1 style={{ fontSize: "clamp(38px, 5.4vw, 68px)", fontWeight: 600, letterSpacing: "-0.03em", margin: 0, maxWidth: "15ch", lineHeight: 1.0, color: "var(--stone-900)", textWrap: "balance" }}>
            Let&apos;s build something <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>considered.</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.55, color: "var(--color-text-muted)", margin: "26px 0 0", maxWidth: "50ch", textWrap: "pretty" }}>Tell us about the site, the brief and your ambitions. We reply to every enquiry within two working days.</p>
        </div>
      </section>

      {/* Contact info cards */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 32px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--color-border)", border: "1px solid var(--color-border)" }}>
          {contactCards.map((c) => (
            <a key={c.n} href={c.href} className="s9contact-card">
              <span className="n">{c.n}</span>
              <span className="k">{c.k}</span>
              <span className="v">{c.v}</span>
              <span className="ar" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Studio location band */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "88px 32px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div className="r3d" data-parallax="0.05" style={{ position: "relative", height: "min(46vw, 420px)", minHeight: 280, borderRadius: 4, overflow: "hidden", border: "1px solid var(--color-border)" }}>
          <SiteImage src="/images/site/contact-studio-photo.jpg" alt="Studio9DN — Lagos" background="var(--forest-700)" />
          <div className="s9imlabel">Lagos, Nigeria</div>
        </div>
        <div>
          <span style={{ display: "inline-block", fontFamily: "var(--font-display)", fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--forest-200)", lineHeight: 1, marginBottom: 18 }}>LOS</span>
          <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.55, color: "var(--color-text-muted)", margin: "0 0 26px", maxWidth: "40ch", textWrap: "pretty" }}>Lagos, Nigeria — 9°N. Our home studio, where every project starts.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: "var(--text-base)", marginBottom: 26 }}>
            <span>Email: <a href="mailto:info@studio9dn.com" style={{ color: "var(--forest-700)", fontWeight: 500 }}>info@studio9dn.com</a></span>
            <span>Phone: <a href="tel:+2348129179436" style={{ color: "var(--forest-700)", fontWeight: 500 }}>+234 812 917 9436</a></span>
          </div>
          <Button href="#map-band" variant="ghost">View on map</Button>
        </div>
      </section>

      {/* Form band (dark, drifting watermark) */}
      <section style={{ position: "relative", overflow: "hidden", background: "var(--color-bg)", marginTop: 88, borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, opacity: 0.4, mixBlendMode: "multiply", pointerEvents: "none",
            backgroundImage:
              "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
          }}
        />
        <span aria-hidden="true" className="s9giant s9driftwm" style={{ position: "absolute", left: 0, bottom: -20, zIndex: 0, fontSize: "clamp(140px, 20vw, 300px)", opacity: 0.05, color: "var(--forest-700)", whiteSpace: "nowrap" }}>contact</span>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "96px 32px 110px", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 72, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--forest-700)", marginBottom: 18 }}>Send an enquiry</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--stone-900)", margin: "0 0 34px", maxWidth: "20ch", textWrap: "balance" }}>Let&apos;s help you get your project started.</h2>
            <form
              style={{ display: "grid", gap: 22 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
                <Input label="Name" placeholder="Your name" />
                <Input label="Email" type="email" placeholder="you@studio.com" />
              </div>
              <Select label="Project type" options={["Residential", "Commercial", "Hospitality", "Cultural", "Advisory / retrofit"]} />
              <Textarea label="About the project" placeholder="Site, brief and ambitions…" rows={5} />
              <Button type="submit">Send enquiry <span aria-hidden="true">→</span></Button>
            </form>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--forest-700)", marginBottom: 18 }}>Studio</div>
              <div style={{ borderTop: "1px solid var(--color-border)" }}>
                {contactRows.map((c) => (
                  <div key={c.k} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid var(--color-border)" }}>
                    <span style={{ fontSize: "var(--text-xs)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-subtle)" }}>{c.k}</span>
                    <span style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--stone-900)" }}>{c.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--forest-700)", marginBottom: 18 }}>Studio hours</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 3vw, 40px)", fontWeight: 600, color: "var(--stone-900)", letterSpacing: "-0.02em" }}>24/7</span>
                <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", maxWidth: "26ch" }}>Open around the clock — one of a kind in Nigeria. We&apos;re always reachable, day or night.</span>
              </div>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", margin: 0, maxWidth: "32ch" }}>We reply to every enquiry within two working days. Your details stay with us.</p>
          </div>
        </div>
      </section>

      {/* Map band */}
      <section id="map-band" style={{ position: "relative", height: "min(56vw, 460px)", minHeight: 320, overflow: "hidden", background: "var(--stone-200)" }}>
        <iframe
          title="Map showing Lagos, Nigeria"
          loading="lazy"
          style={{ width: "100%", height: "100%", border: 0, display: "block", filter: "grayscale(1) contrast(0.95)" }}
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.30%2C6.39%2C3.62%2C6.55&layer=mapnik"
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--forest-700)", mixBlendMode: "color", opacity: 0.82, pointerEvents: "none" }} />
        <div className="s9map-plate">
          <strong>Studio9DN</strong>
          <span>Lagos, Nigeria · 9°N · Open 24/7</span>
        </div>
      </section>

      {/* Closing: 9°N identity */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "110px 32px 130px", textAlign: "center", overflow: "hidden" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-text-subtle)", marginBottom: 26 }}>Connect with the studio</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 100 }}>
          <a href="#" className="s9soc"><small>IG</small> Instagram</a>
          <a href="#" className="s9soc"><small>LI</small> LinkedIn</a>
          <a href="#" className="s9soc"><small>BE</small> Behance</a>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 0.92, fontSize: "clamp(56px, 11vw, 150px)", color: "var(--stone-900)" }}>
            nine<br /><span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--forest-700)" }}>degrees</span>
          </div>
          <Compass className="s9compass" style={{ position: "absolute", right: "4%", top: "-18%", width: "clamp(90px, 12vw, 160px)", height: "clamp(90px, 12vw, 160px)" }} />
        </div>
      </section>

      {sent && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(28,30,24,0.5)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={() => setSent(false)}>
          <div style={{ background: "var(--color-bg)", borderRadius: 16, boxShadow: "var(--shadow-lg)", maxWidth: 440, width: "100%", padding: 40 }} onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: "var(--text-2xl)", fontWeight: 500, letterSpacing: "-0.01em" }}>Enquiry received.</div>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-muted)", lineHeight: 1.6, margin: "16px 0 28px", textWrap: "pretty" }}>Thank you — we&apos;ll reply within two working days. In the meantime, feel free to keep exploring our work.</p>
            <Button onClick={() => setSent(false)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}
