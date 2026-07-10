const PREFIX = "s9img:";

export function getStoredImage(id: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(PREFIX + id);
  } catch {
    return null;
  }
}

export function setStoredImage(id: string, dataUrl: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFIX + id, dataUrl);
  } catch {
    // storage full or unavailable — the drop still renders for this session
  }
}

export function removeStoredImage(id: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(PREFIX + id);
  } catch {
    // ignore
  }
}
