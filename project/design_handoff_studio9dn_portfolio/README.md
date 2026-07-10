# Handoff: Studio9DN Portfolio Website

## Overview
A full portfolio website for **Studio9DN** — a 24/7 multidisciplinary architecture practice in Lagos, Nigeria (9DN = 9 Degrees North, the latitude where "the world turns tropical"). The site showcases nine real built projects across three disciplines (real estate, full architecture, interiors), plus services, a creative arm (9DN Creatives), studio/about, and contact. It is deliberately immersive: dancing-word hero, full-screen menu overlay, scroll-driven color-morphing project stack, a WebGL 360° panorama viewer, cursor color-reveal on imagery, and soft UI sounds.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (React/Next, Vue, etc.) using its established patterns and libraries. If no environment exists yet, a React + Vite or Next.js app is a good fit (the prototype is conceptually a single-page app with client-side routing). Three.js should come from npm rather than the CDN script tag used in the prototype.

## Fidelity
**High-fidelity.** Colors, type, spacing, copy, and interactions are final as designed. Recreate pixel-faithfully, sourcing tokens from `design_system/tokens/*.css` (they are CSS custom properties and can be ported to any token system).

## Brand foundations (from the bound Studio9DN design system)
- **Fonts** (Fontshare CDN, see `design_system/tokens/fonts.css`):
  - **Clash Grotesk** — primary: headings, UI, numerals, labels. Display sizes get tight tracking (−2%); uppercase labels get wide tracking (+14–22%).
  - **Rowan** *italic* — secondary serif for editorial emphasis (menu links, section subtitles, pull lines).
- **Core palette** (`tokens/colors.css`): Forest `#434A36` (hero color, PANTONE Black 3), warm paper `#F5F3EC` (page bg), stone neutrals `#ECEBE1 → #1C1D18`, ochre accent `#C99A3B` (tints `#F0E4C7`, dark `#B1842C`), navy `#2D3C4D`. No true black/white.
- **Shape**: corners are **square** (border-radius 0) on buttons and images per client direction; only circles (avatars, round arrow buttons) are round. Flat surfaces + 1px hairline borders (`--color-border`); no drop shadows except modals.
- **Voice**: first-person plural, sentence case, concrete numerals ("9°N", "two working days"). No emoji.

## App structure
Single-page app, client-side route state (`home | work | project | services | creatives | studio | contact`). Navigating scrolls to top. All routes share: fixed header, full-screen menu overlay, footer, custom cursor, sound system, page-load compass loader.

## Global chrome

### Header (sticky, translucent paper + blur, hairline bottom border)
3-column grid (1320px shell, 40px side padding, 78px tall):
- Left: uppercase label "Creative Design Studio" (11px, +18% tracking, stone-600).
- Center: Studio9DN wordmark logo (27px tall; `assets/logos/Studio9DN-Wordmark-Forest.png`), click → home.
- Right: **Menu button** — squared, 1px stone-900 border, uppercase 11px; two animated bars (staggered scaleX pulse, 2.4s loop; equalize on hover); hover inverts to stone-900 bg / paper text.

### Menu overlay (full screen)
- Near-black `#101208` background, fades/slides in 0.45s.
- Top bar mirrors header (white wordmark, Close button).
- Left: six numbered links (01 Home … 06 Contact) in **Rowan italic**, clamp(30px–60px), hairline separators; hover indents 22px, turns ochre, reveals →.
- **Strike-out exit animation**: on click, a 3px ochre bar slashes across the label (0.36s cubic-bezier(.65,0,.35,1)), label dims to 0.4 opacity, number shakes, a "swoosh + thud" sound plays, then navigation fires (~360ms delay).
- Right column: "Get in touch" (info@studio9dn.com, +234 812 917 9436) and "Studio" (Lagos, Nigeria — 9°N).

### Footer
Contact details as above, Lagos address, 9°N latitude motif.

### Custom cursor, sounds, loader
- Custom dot cursor grows on interactive targets.
- Web Audio soft sounds: gentle tick on hover, tone on click, strike sound in the menu; global mute toggle button; respects user gesture requirements.
- **Page loader**: rotating compass (the same compass illustration used on Contact) full-screen on paper bg, fades out ~800ms after mount. Respects `prefers-reduced-motion`.

## Screens

### 1. Home
- **Hero — dancing words field** (min 620px, up to 96vh):
  - Giant background watermark "studio9dn" in Clash Grotesk 600, ochre `var(--ochre-500)` at 0.16 opacity, clamp(52–170px), slow parallax.
  - ~28 floating words at scattered positions: **9 bold project names** (live links, Clash Grotesk 600, 34–56px) — hover grows the word (scale ~1.18), underlines in ochre, and a small forest tooltip tracks the cursor showing the project's location; click opens the project.
  - **12 faint smaller names** (in-progress/concept work, stone-400, 14–23px, non-italic) that **flee the cursor** (repulsion radius ~260px, force eased ~0.085 lerp).
  - **7 tiny "studio9dn" tags** (13–17px lowercase) that reveal a client name on hover with ochre underline.
  - A collision-relaxation pass (~80 iterations) separates words on load and after fonts load; words keep to 14–90% of field height to protect captions.
  - Top caption: "Architecture at 9°N — a portfolio in motion"; bottom legend explains bold vs faint.
- **Selected work**: project cards (image + name/year/type) with 3D tilt on hover, scroll-reveal.
- **360° panorama band** (near-black `#0F100C`): full-bleed WebGL equirectangular sphere viewer (three.js). Drag to look (lon/lat eased 0.1 lerp), scroll/pinch zoom (FOV 28–92), device-tilt "Enter VR headset" mode (fullscreen + gyro), +/− zoom buttons, ⟳ change-photo. Title "Walk the space in full 360°." Overlaid edge vignette gradients. Empty state is an upload slot prompting a 360° photo.
- **Stats row**: 9 signature projects / 9°N latitude / 10+ yr senior experience / 2 days reply. 24/7 studio positioning appears in supporting copy.
- **CTA button** (centered): "Let's build something considered →" — forest fill, hover swaps to transparent with forest text, arrow slides right.

### 2. Projects (route: work)
- Intro band: eyebrow "Projects — real estate · architecture · interiors", H1 "Three disciplines, one standard.", giant "projects" watermark, filter tabs (All work / Real estate / Architecture / Interiors — squared chips, active = forest fill), "↓ Scroll to explore" cue.
- **Sticky-stack cards**: each of the 9 projects is a full-viewport sticky card that stacks over the previous while scrolling. Each card carries its own background color with contrast-checked text:
  - arts `#1B1330`, bell `#8C93F0`, atlantic `#2B3FD1`, rebrvnded `#C11F3E`, agodi `#E85A12`, acogedor `#3B0F91`, bay `#1E8FE0`, tropical `#14C463`, olivia `#FFB800` (light text `#F5F3EC` on dark fields; ink `#1B1330`/`#0A1730` on light fields; per-card accent).
  - An alternate **monochrome palette** (forest ramp + ochre) exists behind a "projectPalette" setting — port as a theme variant if desired.
  - Card layout: index number, discipline + year eyebrow, big name, overview paragraph, Location/Scope/Status meta row, "View project" button whose hover fills **left-to-right** with the card's fg color while the label flips to the card's bg color (`--saccent-inv`), image area (upload slot) with parallax drift.
- Filtering re-renders the stack with renumbered cards.

### 3. Project detail
- Breadcrumb, H1 name, spec table (Location / Year / Scope / Type / Status / Role).
- Hero image + 2-image gallery (persistent upload slots per project: `hero-<id>`, `ga-<id>`, `gb-<id>`).
- Real copy per project: **Overview** and **Design approach** sections (Rowan italic H2s).
- "More work" — 3 other-project cards.
- The nine projects: Performing Arts Centre (Ota, 2023, Cultural), The Bell Veil (Lekki, 2024), Atlantic Crest (VI, 2023), Rebrvnded Fashion House (Ikoyi, 2024), Agodi Hotels (Ibadan, 2022, Hospitality), Acogedor (Lekki, 2024), Bay Atlantic Hotel (VI, 2023), The Tropical House (Ikoyi, 2021), House Olivia (Sangotedo, 2023). Full copy is in the prototype's `base[]` array.

### 4. Services
- Crafto-inspired editorial layout in brand tokens: numbered service rows (01 Architectural design, 02 Design coordination, 03 Interior design, 04 Construction documentation, 05 3D visualization, 06 Construction supervision) with hover states; 6-step process (Brief & alignment → Concept → Technical documentation → Internal QA → Final delivery → Construction support).
- **Primary button treatment site-wide**: a small circular colored dot sits in the button; on hover the fill sweeps **left → right** across the whole button (0.35s ease), label color flips for contrast.
- 9DN Creatives cross-link section.

### 5. 9DN Creatives
- Grid of creative work cards (brand identity, graphics, product, motion): Rebrvnded identity, Agodi Hotels brand, Editorial Series, Bay Atlantic collateral, Terracotta Screen product, 9DN title sequence. Upload slots per card.

### 6. Studio (About)
- Hero + narrative ("24/7 design studio — one of its kind in Nigeria" is a key selling point), values row (Confident / Creative / Driven / Detail-oriented), stats (10+ years, 7 team, 9°N).
- **Our people** (reference-derived composition):
  - Left-top: counter "01 / 06" (11px, +20% tracking) above a **rotated vertical** "Our people" label (vertical-rl, rotated 180°, Clash 600, ~17–22px).
  - Left-bottom: horizontal filmstrip of **3:4 portrait thumbnails** (80–116px wide, 18px gap, `overflow-x: auto`, bottom-aligned with hero) showing all members EXCEPT the featured one; each sits on a mild pastel tint rotating through forest-100 `#E5E7DE`, stone-100 `#ECEBE1`, ochre-100 `#F0E4C7`, navy-100 `#D4DAE0`; hover lifts 5px. Click promotes to featured.
  - Center: **tall narrow featured portrait** (210–310px wide × up to 580px tall, bottom baseline shared with thumbs). **B/W-until-focus**: image is `grayscale(1)` on its pastel bg by default; on hover/focus/tap the *background* desaturates to b/w while the *image* reveals full color (0.5s ease). Implemented as two sibling layers (bg + img) so the filters are independent.
  - Right: name (16px, 600), muted role, quote line in Clash 500 clamp(18–25px) max 32ch, and a **46px ochre circular → button** cycling to the next person (resets the color reveal). Text column must keep ≥240px measure at all widths.
  - Team: Uwagwu Daniel Ifeoluwa (Founder & Design Lead) + 5 role-based members, each with a one-line craft statement (see `team` array).

### 7. Contact
- Intro: eyebrow "Contact — 9DN", H1 "Let's build something *considered.*" (italic Rowan on "considered"), slowly drifting faded "contact" watermark (horizontal ±3% keyframe loop).
- Three **contact info cards** (01 Email us / 02 Call us / 03 Visit us) in a hairline-divided row; hover inverts to forest with ochre arrow reveal.
- Two-column body: enquiry form (Name + Email side-by-side, Project type select, message textarea, send button; on send show confirmation dialog) on an off-white, subtly noise-textured panel; right column has studio rows, office hours (Mon–Fri 9–18, Sat by appointment, Sun closed — with 24/7 studio note), compass illustration, and a photo/map upload slot.

## Interactions & behavior (site-wide)
- **Cursor color-reveal on images**: all project/team imagery renders grayscale; a ~155px radius circle of true color follows the cursor (radial mask over a `backdrop-filter: grayscale(1)` overlay; 30px soft edge; eases open/closed 0.32s). Exempt: the 360° panorama.
- **Scroll reveals**: `.r3d` elements fade/rise in via IntersectionObserver; parallax via `data-parallax` factors; 3D card tilt via mouse position (±16°/20° max).
- **Motion intensity setting** ("calm 0.35× / balanced 1× / bold 1.9×") scales tilt, parallax, word float, and repulsion globally — port as a user/theme setting. All motion respects `prefers-reduced-motion`.
- **Sounds**: hover/click ticks, menu strike swoosh (sawtooth 1200→180Hz, 0.18s + 110Hz sine thud), mute toggle persisted in state.
- **Image slots**: every image area is a drag/drop + click-to-browse upload slot persisted by stable id (localStorage in the prototype). In production, replace with a CMS/media pipeline but keep the id→image mapping concept. Slot ids: `card-<id>`, `hero-<id>`, `ga-<id>`, `gb-<id>`, `team-*`, `cr-*`, `pano-360`, `contact-map`, `studio-hero`.
- **Responsive**: mid-width (~900–1150px) needs care in Our People (thumb strip scrolls, text column min 240px); ≤900px stacks columns; hero word field thins on small screens.

## State management
- `route`, `projectId`, `filter` (projects), `menu` (overlay), `sent` (contact dialog), `muted` (sound), `peopleIdx` + `peopleOn` (team featured + color reveal), pano viewer internal state (lon/lat/fov/gyro).
- Settings/theme: `patterns` (bg motif on/off), `motionIntensity`, `projectPalette`.

## Design tokens (quick reference)
See `design_system/tokens/` for the full set. Key values:
- Paper bg `#F5F3EC`, surface `#FAF9F3`, border hairlines, text `#1C1D18` / muted stone.
- Forest ramp 50–900 (hero `#434A36`), ochre `#C99A3B`, navy `#2D3C4D`.
- Project card palette + pastel tints listed above.
- Radius: 0 on buttons/images (site override); pills only for true circles.
- Motion: 120–360ms ease-out standard; menu 450ms; color reveals 500ms.
- Type scale: tokens' `--text-*`; body was deliberately reduced one step from the token defaults.

## Assets
- `assets/logos/` — Studio9DN wordmark (Forest/White) + badge PNGs (from brand guidelines).
- Fonts via Fontshare CDN (`tokens/fonts.css`); self-host for production if needed.
- three.js 0.128 (CDN in prototype — use npm in production).
- All photography is user-supplied via upload slots; no stock imagery is bundled.

## Files
- `Studio9DN Portfolio.dc.html` — the complete prototype (markup, CSS in the `<style>` blocks, logic class at the bottom `<script type="text/x-dc">`; the 360° viewer + Africa-globe scripts are inline in the head).
- `image-slot.js` — the drag/drop image slot web component (prototype infrastructure; replace with real media handling).
- `support.js` — prototype runtime (renders the template; not needed in production).
- `design_system/tokens/*.css`, `design_system/styles.css` — the Studio9DN design-system tokens and base styles.
- `assets/logos/*` — brand lockups.
