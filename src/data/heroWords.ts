import { projects } from "./projects";

export interface LiveWord {
  name: string;
  place: string;
  id: string;
  top: number;
  left: number;
  size: number;
  phase: string;
  amp: number;
}

export interface GhostWord {
  name: string;
  place: string;
  top: string;
  left: string;
  size: number;
  phase: string;
  amp: number;
}

export interface ClientWord {
  client: string;
  top: string;
  left: string;
  size: number;
  phase: string;
  amp: number;
}

const liveLayout = [
  { t: 14, l: 32, s: 40 },
  { t: 34, l: 18, s: 46 },
  { t: 51, l: 61, s: 56 },
  { t: 75, l: 44, s: 42 },
  { t: 43, l: 83, s: 36 },
  { t: 61, l: 30, s: 50 },
  { t: 71, l: 72, s: 38 },
  { t: 27, l: 52, s: 44 },
  { t: 86, l: 17, s: 34 },
];

export const liveWords: LiveWord[] = projects.map((p, i) => ({
  name: p.name,
  place: p.place,
  id: p.id,
  top: liveLayout[i].t,
  left: liveLayout[i].l,
  size: liveLayout[i].s,
  phase: (i * 1.7).toFixed(2),
  amp: 5 + (i % 3) * 2,
}));

const ghostNames = [
  { name: "Harmattan Pavilion", place: "Jos — in progress" },
  { name: "Oniru Residences", place: "Lagos — in progress" },
  { name: "Palm Line Villas", place: "Epe — concept" },
  { name: "Delta Rowing Club", place: "Warri — concept" },
  { name: "Laterite Court", place: "Abuja — in progress" },
  { name: "Savannah Lodge", place: "Kaduna — concept" },
  { name: "Ìjẹ̀bú Farmhouse", place: "Ìjẹ̀bú — concept" },
  { name: "Makoko Pavilion", place: "Lagos — research" },
  { name: "Cliff House", place: "Obudu — concept" },
  { name: "Lagoon Terraces", place: "Lekki — in progress" },
  { name: "Baobab Retreat", place: "Kwara — concept" },
  { name: "Rock Chapel", place: "Abeokuta — research" },
  { name: "Marina Exchange", place: "Lagos — concept" },
  { name: "Yankari Lodge", place: "Bauchi — research" },
  { name: "Terra Courtyard", place: "Enugu — concept" },
  { name: "Osun Retreat", place: "Osogbo — research" },
  { name: "Coral Boathouse", place: "Calabar — concept" },
  { name: "Highland Chapel", place: "Mambilla — concept" },
];

function scatter(n: number, seed: number) {
  const out: { t: number; l: number }[] = [];
  for (let i = 0; i < n; i++) {
    const a = Math.sin(seed + i * 12.9898) * 43758.5453;
    const rx = a - Math.floor(a);
    const b = Math.sin(seed + i * 78.233) * 43758.5453;
    const ry = b - Math.floor(b);
    out.push({ t: 8 + ry * 82, l: 5 + rx * 88 });
  }
  return out;
}

const ghostPos = scatter(ghostNames.length, 3.1);
export const ghostWords: GhostWord[] = ghostNames.slice(0, 12).map((g, i) => ({
  name: g.name,
  place: g.place,
  top: ghostPos[i].t.toFixed(1),
  left: ghostPos[i].l.toFixed(1),
  size: 14 + (i % 4) * 3,
  phase: (i * 2.3 + 1).toFixed(2),
  amp: 3 + (i % 3) * 2,
}));

const clientNames = [
  "Meridian Estates",
  "Cornerstone Group",
  "Lagoon Holdings",
  "Atlas Properties",
  "Private client — Ikoyi",
  "Verdant Developments",
  "Institutional client",
  "Cedarwood Living",
  "Harbourpoint Group",
  "Private client — Lekki",
];

const clientPos = scatter(clientNames.length, 8.7);
export const clientWords: ClientWord[] = clientNames.slice(0, 7).map((c, i) => ({
  client: c,
  top: clientPos[i].t.toFixed(1),
  left: clientPos[i].l.toFixed(1),
  size: 13 + (i % 3) * 2,
  phase: (i * 3.1 + 2).toFixed(2),
  amp: 3 + (i % 2) * 2,
}));
