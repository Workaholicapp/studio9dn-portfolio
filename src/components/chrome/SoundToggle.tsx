"use client";

import { useApp } from "@/lib/app-context";

export default function SoundToggle() {
  const { muted, toggleSound } = useApp();
  return (
    <button className={"s9sound" + (muted ? "" : " on")} onClick={toggleSound} type="button" aria-label="Toggle sound">
      <span className="s9sound-ico" aria-hidden="true"><i /><i /><i /></span>
      <span>{muted ? "Sound off" : "Sound on"}</span>
    </button>
  );
}
