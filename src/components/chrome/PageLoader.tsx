"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/lib/app-context";
import Compass from "@/components/ui/Compass";

export default function PageLoader() {
  const { reducedMotion } = useApp();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setHide(true), reducedMotion ? 200 : 750);
    return () => window.clearTimeout(t);
  }, [reducedMotion]);

  return (
    <div className={"s9loader" + (hide ? " hide" : "")} aria-hidden="true">
      <Compass />
    </div>
  );
}
