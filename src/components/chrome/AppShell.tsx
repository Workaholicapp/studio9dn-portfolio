"use client";

import { useApp } from "@/lib/app-context";
import MotionEngine from "./MotionEngine";
import PageLoader from "./PageLoader";
import CustomCursor from "./CustomCursor";
import SoundToggle from "./SoundToggle";
import Header from "./Header";
import MenuOverlay from "./MenuOverlay";
import Footer from "./Footer";
import TweaksPanel from "./TweaksPanel";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { patterns } = useApp();
  return (
    <div
      className={patterns ? "patterns-on" : "patterns-off"}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--color-bg)", fontFamily: "var(--font-display)" }}
    >
      <MotionEngine />
      <PageLoader />
      <CustomCursor />
      <SoundToggle />
      <Header />
      <MenuOverlay />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <TweaksPanel />
    </div>
  );
}
