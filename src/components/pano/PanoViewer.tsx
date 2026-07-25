"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function PanoViewer({ src = "/images/site/pano-equirectangular.jpg" }: { src?: string }) {
  const viewRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [grabbing, setGrabbing] = useState(false);
  const [gyroOn, setGyroOn] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [missing, setMissing] = useState(false);

  const three = useRef<{
    renderer?: THREE.WebGLRenderer;
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    mat?: THREE.MeshBasicMaterial;
  }>({});
  const state = useRef({ lon: 0, lat: 0, tLon: 0, tLat: 0, fov: 72, drag: false, px: 0, py: 0, pinch: null as number | null, gyro: false });

  useEffect(() => {
    const canvas = canvasRef.current, view = viewRef.current;
    if (!canvas || !view) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(72, 1, 0.1, 1100);
    const geo = new THREE.SphereGeometry(500, 64, 44);
    geo.scale(-1, 1, 1);
    const mat = new THREE.MeshBasicMaterial();
    scene.add(new THREE.Mesh(geo, mat));
    three.current = { renderer, scene, camera, mat };

    new THREE.TextureLoader().load(
      src,
      (tex) => {
        tex.minFilter = THREE.LinearFilter;
        tex.colorSpace = THREE.SRGBColorSpace;
        mat.map = tex;
        mat.needsUpdate = true;
        setHasImage(true);
      },
      undefined,
      () => setMissing(true)
    );

    const resize = () => {
      const w = view.clientWidth, h = view.clientHeight;
      if (!w || !h) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest?.("button")) return;
      state.current.drag = true;
      state.current.px = e.clientX;
      state.current.py = e.clientY;
      setGrabbing(true);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!state.current.drag) return;
      state.current.tLon -= (e.clientX - state.current.px) * 0.11;
      state.current.tLat += (e.clientY - state.current.py) * 0.11;
      state.current.tLat = Math.max(-85, Math.min(85, state.current.tLat));
      state.current.px = e.clientX;
      state.current.py = e.clientY;
    };
    const onPointerUp = () => { state.current.drag = false; setGrabbing(false); };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      state.current.fov = Math.max(28, Math.min(92, state.current.fov + e.deltaY * 0.05));
      camera.fov = state.current.fov;
      camera.updateProjectionMatrix();
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        if (state.current.pinch != null) {
          state.current.fov = Math.max(28, Math.min(92, state.current.fov - (d - state.current.pinch) * 0.1));
          camera.fov = state.current.fov;
          camera.updateProjectionMatrix();
        }
        state.current.pinch = d;
      }
    };
    const onTouchEnd = () => { state.current.pinch = null; };
    const onOrient = (e: DeviceOrientationEvent) => {
      if (!state.current.gyro) return;
      state.current.tLon = e.alpha || 0;
      state.current.tLat = Math.max(-85, Math.min(85, (e.beta || 0) - 90));
    };

    view.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    view.addEventListener("wheel", onWheel, { passive: false });
    view.addEventListener("touchmove", onTouchMove, { passive: true });
    view.addEventListener("touchend", onTouchEnd);
    window.addEventListener("deviceorientation", onOrient, true);

    const ro = new ResizeObserver(resize);
    ro.observe(view);
    resize();

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      state.current.lon += (state.current.tLon - state.current.lon) * 0.1;
      state.current.lat += (state.current.tLat - state.current.lat) * 0.1;
      const phi = THREE.MathUtils.degToRad(90 - state.current.lat);
      const theta = THREE.MathUtils.degToRad(state.current.lon);
      const x = 500 * Math.sin(phi) * Math.cos(theta);
      const y = 500 * Math.cos(phi);
      const z = 500 * Math.sin(phi) * Math.sin(theta);
      camera.lookAt(x, y, z);
      if (mat.map) renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      view.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      view.removeEventListener("wheel", onWheel);
      view.removeEventListener("touchmove", onTouchMove);
      view.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("deviceorientation", onOrient, true);
      renderer.dispose();
    };
  }, [src]);

  const zoom = (d: number) => {
    const t = three.current;
    if (!t.camera) return;
    state.current.fov = Math.max(28, Math.min(92, state.current.fov + d));
    t.camera.fov = state.current.fov;
    t.camera.updateProjectionMatrix();
  };

  const toggleVR = () => {
    const next = !state.current.gyro;
    state.current.gyro = next;
    setGyroOn(next);
    const D = window.DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> };
    if (next && D?.requestPermission) {
      D.requestPermission().catch(() => {});
    }
    const el = viewRef.current as (HTMLDivElement & { requestFullscreen?: () => Promise<void> }) | null;
    el?.requestFullscreen?.().catch(() => {});
  };

  return (
    <div
      ref={viewRef}
      className={"s9pano-view" + (grabbing ? " grab" : "")}
      id="s9panoView"
      style={{ position: "relative", width: "100%", height: "min(84vh, 840px)", minHeight: 480, overflow: "hidden", cursor: hasImage ? "grab" : "default", touchAction: "none" }}
    >
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 2, display: hasImage ? "block" : "none", width: "100%", height: "100%" }} />
      {missing && (
        <div className="s9img-missing" style={{ position: "absolute", inset: 0, zIndex: 1, border: "none" }}>
          <div className="plate">
            <span>Add a 360°/equirectangular photo at</span>
            <code>{src}</code>
          </div>
        </div>
      )}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3,
          background: "linear-gradient(90deg, rgba(15,16,12,0.5), transparent 16%, transparent 84%, rgba(15,16,12,0.5)), linear-gradient(0deg, rgba(15,16,12,0.72), transparent 42%)",
        }}
      />
      {hasImage && (
        <div
          style={{
            position: "absolute", top: 22, left: "50%", transform: "translateX(-50%)", zIndex: 5,
            display: "inline-flex", alignItems: "center", gap: 9, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
            color: "rgba(245,243,236,0.82)", background: "rgba(15,16,12,0.4)", backdropFilter: "blur(6px)", padding: "9px 16px", pointerEvents: "none",
          }}
        >
          <span aria-hidden="true" style={{ fontSize: 13 }}>✛</span> Drag to look · scroll or pinch to zoom · tilt to pan
        </div>
      )}
      <div className="s9pano-zoom" style={{ position: "absolute", top: 20, right: 20, zIndex: 5, display: "flex", flexDirection: "column", gap: 8 }}>
        <button className="s9pano-ic" type="button" aria-label="Zoom in" onClick={() => zoom(-8)}>+</button>
        <button className="s9pano-ic" type="button" aria-label="Zoom out" onClick={() => zoom(8)}>−</button>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 5, padding: "clamp(28px, 5vw, 56px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 28, flexWrap: "wrap" }}>
        <div style={{ pointerEvents: "none" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ochre-300, #E0C382)", marginBottom: 16 }}>Step inside — 360° space</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.02, margin: 0, color: "var(--stone-50)", maxWidth: "16ch", textWrap: "balance" }}>Walk the space in full 360°.</h2>
        </div>
        <div className="s9pano-modes" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button className={"s9pano-mode" + (gyroOn ? " on" : "")} type="button" onClick={toggleVR}><span aria-hidden="true">◉</span> Enter VR headset</button>
        </div>
      </div>
    </div>
  );
}
