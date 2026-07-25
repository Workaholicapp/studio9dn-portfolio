import { tones } from "./projects";

export const nav = [
  { id: "home", label: "Home", href: "/" },
  { id: "work", label: "Work", href: "/work" },
  { id: "services", label: "Services", href: "/services" },
  { id: "studio", label: "Studio", href: "/studio" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export const menuItems = [
  { n: "01", label: "Home", href: "/" },
  { n: "02", label: "Projects", href: "/work" },
  { n: "03", label: "Services", href: "/services" },
  { n: "04", label: "9DN Creatives", href: "/creatives" },
  { n: "05", label: "Studio", href: "/studio" },
  { n: "06", label: "Contact", href: "/contact" },
];

export const homeStats = [
  { n: "24/7", label: "One of a kind in Nigeria" },
  { n: "9°N", label: "Our latitude, Lagos" },
  { n: "10+ yr", label: "Senior experience" },
  { n: "2 days", label: "To reply to enquiries" },
];

export const studioStats = [
  { n: "24/7", label: "Nigeria's only round-the-clock studio" },
  { n: "10+", label: "Years of senior experience" },
  { n: "9°N", label: "Where we design for" },
];

export const services = [
  { no: "01", title: "Architectural design", desc: "Concept through design development, grounded in context, climate and brief.", swatch: "linear-gradient(135deg, var(--forest-600), var(--forest-800))" },
  { no: "02", title: "Design coordination", desc: "Architectural, MEP and structural disciplines aligned into a buildable whole.", swatch: "linear-gradient(135deg, var(--stone-300), var(--stone-500))" },
  { no: "03", title: "Interior design", desc: "Space planning and interiors that carry the architecture inward.", swatch: "linear-gradient(135deg, var(--ochre-400, #d9b25f), var(--forest-700))" },
  { no: "04", title: "Construction documentation", desc: "Detailed working drawings and specification, prepared for the site.", swatch: "linear-gradient(135deg, var(--stone-100), var(--stone-300))" },
  { no: "05", title: "3D visualization", desc: "Visualization, animation and presentation documentation that sells the space.", swatch: "linear-gradient(135deg, var(--forest-500), var(--forest-800))" },
  { no: "06", title: "Construction supervision", desc: "Periodic or full supervision through to practical completion.", swatch: "linear-gradient(135deg, var(--stone-400), var(--stone-600))" },
];

export const process = [
  { no: "01", title: "Project brief & alignment", desc: "We reply within two working days and agree scope together." },
  { no: "02", title: "Concept / design development", desc: "Site, climate and brief resolved into a considered parti." },
  { no: "03", title: "Technical documentation", desc: "Detailed drawings and specification prepared for construction." },
  { no: "04", title: "Internal QA review", desc: "A structured quality-control pass before anything leaves the studio." },
  { no: "05", title: "Final delivery & revisions", desc: "Coordinated deliverables, with revisions turned around reliably." },
  { no: "06", title: "Construction support", desc: "On-site support and aftercare through to completion." },
];

export const accordionItems = [
  { title: "Tropical architecture", content: "Passive-first design tuned to a hot, humid climate — shade, ventilation, daylight and rainwater first; machinery last." },
  { title: "Building performance", content: "We model daylight, airflow and energy from the first sketch so performance is designed in, not added on." },
  { title: "Sustainable design", content: "Local materials, low embodied carbon, and buildings that age gracefully in the coastal climate." },
  { title: "Interiors & detailing", content: "A delicate treatment of fine detail, backed by a resilient outlook — for clients with an acquired taste." },
];

export const values = [
  { title: "Confident", desc: "We stand behind considered decisions and see them through." },
  { title: "Creative", desc: "Editorial, asymmetric, generous with space — never generic." },
  { title: "Driven", desc: "Performance is measured and improved, not assumed." },
  { title: "Detail-oriented", desc: "We never compromise on quality, performance and sustainability." },
];

export const contactRows = [
  { k: "Email", v: "info@studio9dn.com" },
  { k: "Phone", v: "+234 812 917 9436" },
  { k: "Studio", v: "Lagos, Nigeria" },
  { k: "Latitude", v: "9°N" },
];

export const contactCards = [
  { n: "01", k: "Email us", v: "info@studio9dn.com", href: "mailto:info@studio9dn.com" },
  { n: "02", k: "Call us", v: "+234 812 917 9436", href: "tel:+2348129179436" },
  { n: "03", k: "Visit us", v: "Lagos, Nigeria", href: "#" },
];

export const creativeDisciplines = [
  { no: "01", title: "Brand identity" },
  { no: "02", title: "Graphic design" },
  { no: "03", title: "Product design" },
  { no: "04", title: "Motion & digital" },
];

export const creatives = [
  { title: "Rebrvnded — Identity System", tag: "Brand identity", bg: tones.ochre, slot: "cr-rebrvnded" },
  { title: "Agodi Hotels — Brand", tag: "Brand identity", bg: tones.forest, slot: "cr-agodi" },
  { title: "Editorial Series", tag: "Graphic design", bg: tones.stone, slot: "cr-editorial" },
  { title: "Bay Atlantic — Collateral", tag: "Graphic design", bg: tones.forest, slot: "cr-bay" },
  { title: "Terracotta Screen — Product", tag: "Product design", bg: tones.ochre, slot: "cr-terracotta" },
  { title: "9DN — Title Sequence", tag: "Motion & digital", bg: tones.light, slot: "cr-title" },
].map((c) => ({ ...c, img: `/images/creatives/${c.slot}.jpg` }));

const pastels = ["var(--forest-100)", "var(--stone-100)", "var(--ochre-100)", "var(--navy-100)"];

export const team = [
  { name: "Uwagwu Daniel Ifeoluwa", role: "Founder & Design Lead", slot: "team-founder", line: "Every commission starts with the site, the light and the wind before it starts with a floor plan." },
  { name: "Licensed Architects", role: "10+ years of professional experience", slot: "team-architects", line: "A decade of practice has taught us that the quiet details are the ones clients remember longest." },
  { name: "Architectural Designer", role: "Design development & detailing", slot: "team-designer", line: "Detailing is where a good idea either survives contact with the real world, or doesn't." },
  { name: "Interior Designer", role: "Interiors & space planning", slot: "team-interior", line: "A room should feel resolved from the inside before it ever photographs well from the outside." },
  { name: "Visualization Specialist", role: "3D visualization & animation", slot: "team-viz", line: "We build the space in light long before anyone breaks ground on it." },
  { name: "Technical Documentation Lead", role: "Working drawings & QA", slot: "team-docs", line: "Precision on paper is what keeps a beautiful idea beautiful once it's built." },
].map((m, i) => ({ ...m, pastel: pastels[i % pastels.length], img: `/images/team/${m.slot}.jpg` }));
