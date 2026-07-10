"use client";

import { useRouter } from "next/navigation";
import { useApp } from "@/lib/app-context";
import { menuItems } from "@/data/site";

export default function MenuOverlay() {
  const { menuOpen, closeMenu, playStrike } = useApp();
  const router = useRouter();

  const strikeAndGo = (href: string) => (ev: React.MouseEvent<HTMLButtonElement>) => {
    const el = ev.currentTarget as HTMLButtonElement & { _striking?: boolean };
    if (!el || el._striking) {
      router.push(href);
      closeMenu();
      return;
    }
    el._striking = true;
    el.classList.add("striking");
    playStrike();
    window.setTimeout(() => {
      el._striking = false;
      el.classList.remove("striking");
      router.push(href);
      closeMenu();
    }, 360);
  };

  return (
    <div className={"s9overlay" + (menuOpen ? " open" : "")}>
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 40px",
          height: 78,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          flex: "0 0 auto",
        }}
      >
        <span style={{ justifySelf: "start" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logos/Studio9DN-Wordmark-White.png" alt="Studio9DN" style={{ height: 27, width: "auto", display: "block", justifySelf: "center" }} />
        <button onClick={closeMenu} className="s9menu-btn s9menu-btn--close" style={{ justifySelf: "end" }} aria-label="Close menu">
          <span>Close</span><span aria-hidden="true" style={{ fontSize: 16, lineHeight: 1 }}>✕</span>
        </button>
      </div>
      <div className="s9overlay-body">
        <nav className="s9overlay-nav">
          {menuItems.map((m) => (
            <button key={m.n} onClick={strikeAndGo(m.href)} className="s9menu-link">
              <span className="n">{m.n}</span>
              <span className="l">
                <span className="ltext">{m.label}</span>
                <span className="strike" aria-hidden="true" />
              </span>
              <span className="ar" aria-hidden="true">→</span>
            </button>
          ))}
        </nav>
        <div className="s9overlay-aside">
          <div>
            <div className="s9brandlabel" style={{ color: "var(--forest-300)", marginBottom: 12 }}>Get in touch</div>
            <a href="mailto:info@studio9dn.com" style={{ display: "block", fontSize: "var(--text-lg)", color: "var(--stone-50)", marginBottom: 6 }}>info@studio9dn.com</a>
            <a href="tel:+2348129179436" style={{ display: "block", fontSize: "var(--text-lg)", color: "var(--stone-50)" }}>+234 812 917 9436</a>
          </div>
          <div>
            <div className="s9brandlabel" style={{ color: "var(--forest-300)", marginBottom: 12 }}>Studio</div>
            <div style={{ fontSize: "var(--text-base)", color: "var(--forest-100)", lineHeight: 1.7 }}>Lagos, Nigeria<br />9°N — where the world turns tropical</div>
          </div>
        </div>
      </div>
    </div>
  );
}
