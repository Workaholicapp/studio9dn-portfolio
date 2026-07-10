"use client";

import Link from "next/link";
import { useApp } from "@/lib/app-context";

export default function Header() {
  const { toggleMenu } = useApp();
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(245,243,236,0.82)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 40px",
          height: 78,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        <div className="s9brandlabel" style={{ justifySelf: "start" }}>Creative Design Studio</div>
        <Link
          href="/"
          style={{ border: "none", background: "transparent", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", justifySelf: "center" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logos/Studio9DN-Wordmark-Forest.png" alt="Studio9DN" style={{ height: 27, width: "auto", display: "block" }} />
        </Link>
        <button onClick={toggleMenu} className="s9menu-btn" style={{ justifySelf: "end" }} aria-label="Open menu">
          <span className="bars" aria-hidden="true"><i /><i /></span>
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
}
