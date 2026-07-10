export type ProjectTone = "forest" | "stone" | "light" | "ochre";
export type Discipline = "realestate" | "architecture" | "interior";

export interface Scene {
  bg: string;
  fg: string;
  muted: string;
  border: string;
  accent: string;
}

export interface ProjectBase {
  id: string;
  name: string;
  type: string; // Cultural | Residential | Commercial | Hospitality
  place: string;
  year: string;
  tone: ProjectTone;
  blurb: string;
  area: string;
  status: string;
  overview: string;
  approach: string;
}

export interface Project extends ProjectBase {
  discipline: Discipline;
  bg: string; // gradient
  card: string; // image slot id
  hero: string;
  ga: string;
  gb: string;
}

export const tones: Record<ProjectTone, string> = {
  forest: "linear-gradient(135deg, var(--forest-600), var(--forest-800))",
  stone: "linear-gradient(135deg, var(--stone-300), var(--stone-500))",
  light: "linear-gradient(135deg, var(--stone-100), var(--stone-400))",
  ochre: "linear-gradient(135deg, var(--ochre-500), var(--forest-700))",
};

const base: ProjectBase[] = [
  {
    id: "arts",
    name: "Performing Arts Centre",
    type: "Cultural",
    place: "Ota, Ogun State",
    year: "2023",
    tone: "forest",
    blurb: "A civic landmark for culture and creative expression in Ota.",
    area: "Auditorium",
    status: "Completed",
    overview:
      "A performing arts centre conceived as a civic landmark for culture in Ota. Dark acoustic surfaces, warm timber and a bold terracotta seating bowl create an environment that feels both purposeful and experientially charged — world-class performance infrastructure within a distinctly Nigerian context.",
    approach:
      "The auditorium was designed as a unified acoustic and visual instrument, where every surface, angle and material contributes to sound quality and sightline clarity across all seating tiers. Acoustic treatment was embedded into the ceiling and wall assemblies rather than applied as an afterthought, preserving the interior aesthetic while meeting performance-grade requirements.",
  },
  {
    id: "bell",
    name: "The Bell Veil",
    type: "Residential",
    place: "Lekki, Lagos",
    year: "2024",
    tone: "stone",
    blurb: "A calm-inducing home tuned by sound, climate and materiality.",
    area: "Private residence",
    status: "Completed",
    overview:
      "A residence conceived as a therapeutic environment, where sound, climate and materiality shape a calm-inducing living experience attuned to both psychological and environmental needs.",
    approach:
      "The design integrates wind-activated bells within a permeable façade — the Bell Veil — alongside rain-driven chimes and a musical water courtyard. A central courtyard enables cross-ventilation and stack-effect cooling, while deep overhangs, shaded verandahs and terracotta surfaces mitigate solar heat gain and enhance sensory warmth.",
  },
  {
    id: "atlantic",
    name: "Atlantic Crest",
    type: "Residential",
    place: "Victoria Island, Lagos",
    year: "2023",
    tone: "ochre",
    blurb: "A sculptural high-rise marker on the Lagos skyline.",
    area: "Mixed-use tower",
    status: "Completed",
    overview:
      "A high-rise residential tower conceived as a landmark of contemporary urban living. A sculptural façade of floor-to-ceiling glazing, sweeping curved balconies and gold vertical fins gives the tower a distinctive identity, while a podium of retail and parking activates the ground plane.",
    approach:
      "Façade composition and vertical identity were the primary drivers. The tower's expression was shaped through the rhythm of its curved balcony projections, the interplay of glazing against solid gold fins, and the tapering of the crown. Integrated balcony planting introduces a biophilic quality rarely seen at this scale in Lagos.",
  },
  {
    id: "rebrvnded",
    name: "Rebrvnded Fashion House",
    type: "Commercial",
    place: "Ikoyi, Lagos",
    year: "2024",
    tone: "light",
    blurb: "A flagship store as a built expression of brand identity.",
    area: "Retail flagship",
    status: "Completed",
    overview:
      "A flagship fashion retail store conceived as a physical embodiment of the Rebrvnded brand identity. A monolithic terracotta upper volume — softened by rounded corners and a perforated screen — sits above a transparent ground floor that draws the street into the retail experience.",
    approach:
      "Brand expression and customer experience were the primary drivers. A grounded, transparent retail base opens the interior to the street, while a solid, sculptural upper volume acts as a billboard at neighbourhood scale. The plan choreographs the customer journey through gallery, exhibition and storage.",
  },
  {
    id: "agodi",
    name: "Agodi Hotels",
    type: "Hospitality",
    place: "Ibadan, Oyo",
    year: "2022",
    tone: "ochre",
    blurb: "Luxury and charm in the heart of Ibadan.",
    area: "Hotel",
    status: "Completed",
    overview:
      "A hotel set in the heart of Ibadan, conceived as a beacon of opulence surrounded by the city's vibrant energy. With stunning vistas and considered amenities, Agodi offers an irresistible mix of comfort and charm.",
    approach:
      "Façade systems, interiors and immersive visualization were developed together to establish a cohesive language of indulgence and calm across the guest experience, from arrival through to the private suites.",
  },
  {
    id: "acogedor",
    name: "Acogedor",
    type: "Commercial",
    place: "Lekki, Lagos",
    year: "2024",
    tone: "forest",
    blurb: "A fine-dining interior of warmth and understated luxury.",
    area: "Restaurant",
    status: "Completed",
    overview:
      "A fine dining restaurant conceived as an immersive sensory environment. A deliberate interplay of deep terracotta tones, natural timber and controlled accent lighting creates a layered, moody interior that feels both contemporary and deeply inviting.",
    approach:
      "Materiality and atmosphere were the primary drivers. The interior was shaped through rich textures, tonal contrast and considered geometries — from arched wall niches to sculptural table bases. Recessed and accent lighting create depth and reinforce the intimate character of each seating area.",
  },
  {
    id: "bay",
    name: "Bay Atlantic Hotel",
    type: "Hospitality",
    place: "Victoria Island, Lagos",
    year: "2023",
    tone: "stone",
    blurb: "Refined hospitality on the Oniru corridor.",
    area: "Hotel",
    status: "Completed",
    overview:
      "A full-service hotel conceived as a landmark of refined hospitality on Lagos's expanding Oniru corridor. A palette of warm timber, polished stone and layered ambient lighting balances grandeur with approachability.",
    approach:
      "Circulation and experience were the primary organisational drivers. The lobby was designed as the heart of the hotel — a fluid, open-plan space weaving reception, lounge, retail and vertical movement. Fluted timber columns, a sculptural staircase and a coffered ceiling act as spatial organisers.",
  },
  {
    id: "tropical",
    name: "The Tropical House",
    type: "Residential",
    place: "Ikoyi, Lagos",
    year: "2021",
    tone: "forest",
    blurb: "A residence and getaway shaped by material and form.",
    area: "Private residence",
    status: "Completed",
    overview:
      "A tropical house conceived as both a residence and a retreat. Through a deliberate interplay of textures, contrast and controlled lighting, the design creates a layered, immersive environment that feels both contemporary and enduring.",
    approach:
      "Materiality and form were treated as the primary drivers. Rather than relying on applied finishes, the architecture was shaped through material transitions, contrast and unconventional geometries. Light, both natural and artificial, was integrated to reveal depth and enhance the spatial experience.",
  },
  {
    id: "olivia",
    name: "House Olivia",
    type: "Residential",
    place: "Sangotedo, Lagos",
    year: "2023",
    tone: "light",
    blurb: "A full-scale transformation rooted in slow living.",
    area: "Private residence",
    status: "Completed",
    overview:
      "Project Olivia is a full-scale residential transformation that reimagines an underutilised existing structure into a calm, functional retirement home for a family of three, developed with Allied Designers.",
    approach:
      "Rooted in the philosophy of slow living, the design transforms an inefficient structure into a purposeful environment that supports long-term comfort and well-being. Natural materials, thoughtful spatial planning and a strong emphasis on ambiance create a tranquil retreat.",
  },
];

const disciplineOf: Record<string, Discipline> = {
  atlantic: "realestate",
  agodi: "realestate",
  bay: "realestate",
  arts: "architecture",
  bell: "architecture",
  rebrvnded: "architecture",
  acogedor: "interior",
  tropical: "interior",
  olivia: "interior",
};

// Per-project scene palette — Omaha Performing Arts-inspired: bold saturated
// fields with a single strong contrasting text color per card (verified >=4.5:1).
export const sceneMapVivid: Record<string, Scene> = {
  arts: { bg: "#1B1330", fg: "#F5F3EC", muted: "rgba(245,243,236,0.74)", border: "rgba(245,243,236,0.26)", accent: "#8C93F0" },
  bell: { bg: "#8C93F0", fg: "#1B1330", muted: "rgba(27,19,48,0.7)", border: "rgba(27,19,48,0.22)", accent: "#F0123F" },
  atlantic: { bg: "#2B3FD1", fg: "#F5F3EC", muted: "rgba(245,243,236,0.74)", border: "rgba(245,243,236,0.26)", accent: "#FFB800" },
  rebrvnded: { bg: "#C11F3E", fg: "#F5F3EC", muted: "rgba(245,243,236,0.74)", border: "rgba(245,243,236,0.26)", accent: "#FFB800" },
  agodi: { bg: "#E85A12", fg: "#1B1330", muted: "rgba(27,19,48,0.7)", border: "rgba(27,19,48,0.22)", accent: "#FFD23A" },
  acogedor: { bg: "#3B0F91", fg: "#F5F3EC", muted: "rgba(245,243,236,0.74)", border: "rgba(245,243,236,0.26)", accent: "#FF6A1A" },
  bay: { bg: "#1E8FE0", fg: "#0A1730", muted: "rgba(10,23,48,0.7)", border: "rgba(10,23,48,0.22)", accent: "#FFB800" },
  tropical: { bg: "#14C463", fg: "#0A1730", muted: "rgba(10,23,48,0.7)", border: "rgba(10,23,48,0.22)", accent: "#C11F3E" },
  olivia: { bg: "#FFB800", fg: "#1B1330", muted: "rgba(27,19,48,0.7)", border: "rgba(27,19,48,0.22)", accent: "#2B3FD1" },
};

// A calmer, tonal alternative built entirely from the Forest ramp + one ochre accent.
export const sceneMapMono: Record<string, Scene> = {
  arts: { bg: "#20241A", fg: "#F5F3EC", muted: "rgba(245,243,236,0.72)", border: "rgba(245,243,236,0.22)", accent: "#C99A3B" },
  bell: { bg: "#E7E4D8", fg: "#20241A", muted: "rgba(32,36,26,0.66)", border: "rgba(32,36,26,0.18)", accent: "#434A36" },
  atlantic: { bg: "#3A4230", fg: "#F5F3EC", muted: "rgba(245,243,236,0.72)", border: "rgba(245,243,236,0.22)", accent: "#C99A3B" },
  rebrvnded: { bg: "#5A6248", fg: "#F5F3EC", muted: "rgba(245,243,236,0.72)", border: "rgba(245,243,236,0.22)", accent: "#E7E4D8" },
  agodi: { bg: "#C9C4AE", fg: "#20241A", muted: "rgba(32,36,26,0.66)", border: "rgba(32,36,26,0.18)", accent: "#434A36" },
  acogedor: { bg: "#171A12", fg: "#F5F3EC", muted: "rgba(245,243,236,0.72)", border: "rgba(245,243,236,0.22)", accent: "#C99A3B" },
  bay: { bg: "#8E9678", fg: "#171A12", muted: "rgba(23,26,18,0.68)", border: "rgba(23,26,18,0.2)", accent: "#F5F3EC" },
  tropical: { bg: "#434A36", fg: "#F5F3EC", muted: "rgba(245,243,236,0.72)", border: "rgba(245,243,236,0.22)", accent: "#C99A3B" },
  olivia: { bg: "#F5F3EC", fg: "#20241A", muted: "rgba(32,36,26,0.66)", border: "rgba(32,36,26,0.18)", accent: "#434A36" },
};

export const projects: Project[] = base.map((p) => ({
  ...p,
  discipline: disciplineOf[p.id] || "architecture",
  bg: tones[p.tone],
  card: "card-" + p.id,
  hero: "hero-" + p.id,
  ga: "ga-" + p.id,
  gb: "gb-" + p.id,
}));

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function sceneFor(id: string, palette: "vivid" | "monochrome"): Scene {
  const map = palette === "monochrome" ? sceneMapMono : sceneMapVivid;
  return map[id];
}

export const disciplineLabel: Record<Discipline, string> = {
  realestate: "Real estate",
  architecture: "Architecture",
  interior: "Interiors",
};

export const groupDefs = [
  {
    key: "realestate" as Discipline,
    no: "01",
    label: "Real estate",
    eyebrow: "Developments",
    desc: "Ground-up developments and investment-grade property — towers, hotels and mixed-use — designed to perform and to hold their value.",
    cols: "repeat(2, 1fr)",
    h: "440px",
  },
  {
    key: "architecture" as Discipline,
    no: "02",
    label: "Full architecture",
    eyebrow: "Ground-up commissions",
    desc: "Complete architectural commissions, from the first parti to practical completion — civic, cultural and private buildings shaped by climate.",
    cols: "repeat(3, 1fr)",
    h: "300px",
  },
  {
    key: "interior" as Discipline,
    no: "03",
    label: "Interiors",
    eyebrow: "Interior & transformation",
    desc: "Interior and transformation projects where materiality, light and atmosphere carry the experience inward.",
    cols: "repeat(3, 1fr)",
    h: "300px",
  },
];

export const patternClasses = ["s9pat-stripes", "s9pat-dots", "s9pat-chevron", "s9pat-bars"];
