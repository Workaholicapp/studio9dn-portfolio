# Studio9DN — image assets

This site no longer lets site visitors upload photos. Every image is now a fixed file loaded from
this folder — to put a real photo somewhere on the site, **save it at the exact path listed below**
(same filename, same folder). Nothing else needs to change in the code.

Until a file exists at its path, that spot on the site shows a small "Add image at …" placeholder
with the expected path — so it's easy to see what's still missing as you go. Any common web image
format works (`.jpg`/`.jpeg`/`.png`/`.webp`); just make sure the **filename matches exactly**,
including the extension. (If you'd rather use `.png` or `.webp` for a given file, rename it in the
matching field in `src/data/projects.ts` / `src/data/site.ts` — the path is just a string there.)

Recommended: photos roughly 2000px on the long edge, compressed for the web (a few hundred KB each is plenty).

---

## `projects/` — the 9 project photos (card, hero, gallery ×2)

Each project needs 4 photos. `card` is the small thumbnail used on Home, Work and "More work";
`hero` is the large banner on that project's own page; `ga`/`gb` are the two gallery images on
the project page (captioned "Detail — brise-soleil" and "Courtyard").

| Path | Project | Used as |
|---|---|---|
| `public/images/projects/card-arts.jpg` | Performing Arts Centre | card thumbnail |
| `public/images/projects/hero-arts.jpg` | Performing Arts Centre | project page hero |
| `public/images/projects/ga-arts.jpg` | Performing Arts Centre | project page gallery (1st) |
| `public/images/projects/gb-arts.jpg` | Performing Arts Centre | project page gallery (2nd) |
| `public/images/projects/card-bell.jpg` | The Bell Veil | card thumbnail |
| `public/images/projects/hero-bell.jpg` | The Bell Veil | project page hero |
| `public/images/projects/ga-bell.jpg` | The Bell Veil | project page gallery (1st) |
| `public/images/projects/gb-bell.jpg` | The Bell Veil | project page gallery (2nd) |
| `public/images/projects/card-atlantic.jpg` | Atlantic Crest | card thumbnail |
| `public/images/projects/hero-atlantic.jpg` | Atlantic Crest | project page hero |
| `public/images/projects/ga-atlantic.jpg` | Atlantic Crest | project page gallery (1st) |
| `public/images/projects/gb-atlantic.jpg` | Atlantic Crest | project page gallery (2nd) |
| `public/images/projects/card-rebrvnded.jpg` | Rebrvnded Fashion House | card thumbnail |
| `public/images/projects/hero-rebrvnded.jpg` | Rebrvnded Fashion House | project page hero |
| `public/images/projects/ga-rebrvnded.jpg` | Rebrvnded Fashion House | project page gallery (1st) |
| `public/images/projects/gb-rebrvnded.jpg` | Rebrvnded Fashion House | project page gallery (2nd) |
| `public/images/projects/card-agodi.jpg` | Agodi Hotels | card thumbnail |
| `public/images/projects/hero-agodi.jpg` | Agodi Hotels | project page hero |
| `public/images/projects/ga-agodi.jpg` | Agodi Hotels | project page gallery (1st) |
| `public/images/projects/gb-agodi.jpg` | Agodi Hotels | project page gallery (2nd) |
| `public/images/projects/card-acogedor.jpg` | Acogedor | card thumbnail |
| `public/images/projects/hero-acogedor.jpg` | Acogedor | project page hero |
| `public/images/projects/ga-acogedor.jpg` | Acogedor | project page gallery (1st) |
| `public/images/projects/gb-acogedor.jpg` | Acogedor | project page gallery (2nd) |
| `public/images/projects/card-bay.jpg` | Bay Atlantic Hotel | card thumbnail |
| `public/images/projects/hero-bay.jpg` | Bay Atlantic Hotel | project page hero |
| `public/images/projects/ga-bay.jpg` | Bay Atlantic Hotel | project page gallery (1st) |
| `public/images/projects/gb-bay.jpg` | Bay Atlantic Hotel | project page gallery (2nd) |
| `public/images/projects/card-tropical.jpg` | The Tropical House | card thumbnail |
| `public/images/projects/hero-tropical.jpg` | The Tropical House | project page hero |
| `public/images/projects/ga-tropical.jpg` | The Tropical House | project page gallery (1st) |
| `public/images/projects/gb-tropical.jpg` | The Tropical House | project page gallery (2nd) |
| `public/images/projects/card-olivia.jpg` | House Olivia | card thumbnail |
| `public/images/projects/hero-olivia.jpg` | House Olivia | project page hero |
| `public/images/projects/ga-olivia.jpg` | House Olivia | project page gallery (1st) |
| `public/images/projects/gb-olivia.jpg` | House Olivia | project page gallery (2nd) |

Where these come from in code: `src/data/projects.ts` (`cardImg`/`heroImg`/`gaImg`/`gbImg` fields,
derived from each project's `id`).

---

## `team/` — "Our people" portraits (Studio page)

One photo per person — used for both their filmstrip thumbnail and their large featured portrait.

| Path | Person |
|---|---|
| `public/images/team/team-founder.jpg` | Uwagwu Daniel Ifeoluwa — Founder & Design Lead |
| `public/images/team/team-architects.jpg` | Licensed Architects |
| `public/images/team/team-designer.jpg` | Architectural Designer |
| `public/images/team/team-interior.jpg` | Interior Designer |
| `public/images/team/team-viz.jpg` | Visualization Specialist |
| `public/images/team/team-docs.jpg` | Technical Documentation Lead |

Where these come from in code: `src/data/site.ts` (`team` array, `img` field).

---

## `creatives/` — 9DN Creatives grid (Creatives page)

| Path | Piece |
|---|---|
| `public/images/creatives/cr-rebrvnded.jpg` | Rebrvnded — Identity System |
| `public/images/creatives/cr-agodi.jpg` | Agodi Hotels — Brand |
| `public/images/creatives/cr-editorial.jpg` | Editorial Series |
| `public/images/creatives/cr-bay.jpg` | Bay Atlantic — Collateral |
| `public/images/creatives/cr-terracotta.jpg` | Terracotta Screen — Product |
| `public/images/creatives/cr-title.jpg` | 9DN — Title Sequence |

Where these come from in code: `src/data/site.ts` (`creatives` array, `img` field).

---

## `site/` — one-off photos used elsewhere

| Path | Where it appears |
|---|---|
| `public/images/site/home-people.jpg` | Home page, "We create unique spatial experiences" section (a black & white studio/team photo) |
| `public/images/site/studio-hero.jpg` | Studio page hero image |
| `public/images/site/contact-studio-photo.jpg` | Contact page, studio location photo |
| `public/images/site/pano-equirectangular.jpg` | Home page, the full-bleed 360° viewer band. **Must be a true equirectangular (2:1 aspect ratio) panoramic photo** — a normal photo will look distorted when dragged around in the 3D viewer. |

Where these come from in code: `src/app/page.tsx`, `src/app/studio/page.tsx`, `src/app/contact/page.tsx`,
and the `src` prop passed to `<PanoViewer>`.

---

## How it renders

Every image on the site goes through one component, `src/components/media/SiteImage.tsx` — it just
renders `<img src="…">` at a fixed path (no upload, no drag/drop). If the file at that path doesn't
exist yet, it shows a small dashed placeholder with the expected path instead of a broken-image icon,
so gaps are obvious while you're filling these in.
