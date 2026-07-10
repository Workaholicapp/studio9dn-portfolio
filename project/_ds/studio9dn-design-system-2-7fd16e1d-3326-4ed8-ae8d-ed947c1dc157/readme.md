# Studio9DN — Design System

An independent, multidisciplinary design practice rooted in **tropical architecture**, holistic building performance, and sustainable design excellence. Based in Lagos, Nigeria. Serves real estate firms, institutions, and private clients with strong economic standing and an acquired taste for fine design details.

**9DN = 9 Degrees North** — a line of latitude through the birthplace of the practice, and the line that marks where the world turns tropical. The brand sees architecture as "markers for clusters of ideals, keyed to coordinates."

## Sources
- `uploads/Studio9DN Brand Guidelines-V2.pdf` — V1 visual identity guidelines (© 2023). The single source of truth for logo lockups, colour, and type.
- `uploads/Studio9DN-{PL,RPL,IL,IPL,OL}-{Black,Forest,White}.png` — the five logo lockups in three colours (copied into `assets/logos/`).
- `uploads/claude.md` — a *generic* warm-editorial template that shipped with the upload; **not** Studio9DN-specific and **not** used as a source. Ignore it.

> No codebase or Figma file was provided. The website UI kit and slide template are faithful *brand* expressions built from the guidelines, not recreations of an existing product. Project names/photography in the kit are placeholders.

---

## CONTENT FUNDAMENTALS — how Studio9DN writes

- **Voice:** confident, earnest, precise. The brand literally lists its values as *confident, creative, driven, detail-oriented* and "we never compromise on quality, performance and sustainability."
- **Person:** first-person plural — **"we"**, "our work", "our latitude". Addresses the client as "you" sparingly.
- **Tone:** considered and a little literary, but never flowery. Sentences are complete and land with a period. Favours plain, technical-but-warm language ("passive-first", "cross-ventilation", "deep shade") over marketing adjectives.
- **Casing:** Sentence case for headings and body. **UPPERCASE, widely tracked** only for eyebrow labels and table/section labels. Never all-caps for long text.
- **Numerals & specifics:** concrete and proud — "9°N", "640 m²", "120+ projects", "two working days". Detail signals competence.
- **Place:** Lagos / Nigerian / West African specificity is a feature — Ikoyi, Lekki, Victoria Island, laterite, clay tile. Yoruba names and diacritics (Ìdúnnú) are welcome.
- **Emoji:** never. Not in UI chrome, not in copy.
- **Example lines:** *"Tropical architecture, designed to perform."* · *"A holistic take on building performance."* · *"We never compromise on quality, performance and sustainability."* · *"Let's build something considered."*

---

## VISUAL FOUNDATIONS

- **Colour:** One hero — **Forest `#434A36`** (PANTONE Black 3). Everything else is a warm, subdued neutral (the brand explicitly avoids true black/white) or a Forest tint. Ochre and Navy exist as documented *secondary* accents but appear rarely; one accent moment per view. Tints follow a ~20% step system; anything below 60% is a background needing dark text.
- **Type:** **Clash Grotesk** (primary — headings, UI, numerals, labels; weights 200–700, usually 500) + **Rowan** (secondary serif — used *italic* for H2, pull-quotes and editorial emphasis). Both from Indian Type Foundry, open-source, served via the Fontshare CDN. Large display sizes get tight tracking (−2%); labels get wide tracking (+14%). Headlines `text-wrap: balance`, body `text-wrap: pretty`, measure 45–70 characters.
- **Layout:** generous negative space is a *stated brand principle*. Left-aligned, ragged right. 8px baseline rhythm; 96px section breaks; 1180px shell / 680px reading measure; 12-col, 24px gutters. Asymmetry and editorial composition are encouraged.
- **Backgrounds:** flat warm paper (`#F5F3EC`) or full-bleed Forest inverse bands for emphasis. No gradients-as-decoration, no glassmorphism. Imagery (when present) is architectural, warm, and may be duotoned toward Forest. Logo may sit on photos only with strong contrast and never as a two-colour version.
- **Depth:** flat. Depth comes from surface-colour shifts + 1px borders + type-weight contrast — **not** shadows. The *one* sanctioned shadow is the modal (`--shadow-md/lg`).
- **Corners:** restrained — 4/6/10/16px. Controls 6px, cards 10px. Pills only for true pills (badges, avatars, tags).
- **Motion:** calm and deliberate, never bouncy. Short durations (120–360ms), standard/`ease-out` curves. Fades and small slides; no scale-on-hover, no lift.
- **Hover / press:** primary actions **darken** the fill (no lift, no scale); secondary/ghost get a subtle sunken background; links underline. Press darkens further.
- **Borders & cards:** 1px `--color-border` hairlines; cards are flat surfaces with a hairline, hover reveals a slightly stronger border. Inverse cards use Forest.
- **Transparency/blur:** sparingly — only the sticky header uses a translucent paper + backdrop blur.

---

## ICONOGRAPHY

The brand guidelines define **no icon set** — the identity is purely typographic + the 9DN mark. The exaggerated flourishes in the **9** and **N** reference swooping beach palms and moving water.

- **Approach used here:** keep icons minimal. Where the UI needs glyphs (arrows, +, ×, chevrons, menu), they are simple Unicode characters or tiny inline strokes that match Clash Grotesk's weight. No decorative icon library is bundled.
- **If you need a fuller icon set:** use **Lucide** (https://lucide.dev) via CDN — its 1.5–2px humanist stroke sits comfortably with Clash Grotesk. Flag this as a substitution; it is not part of the official brand.
- **Emoji / unicode-as-icon:** emoji never. A few neutral unicode glyphs (→ + × ▼ ≡ ⌕) are acceptable as functional affordances.
- **Logos** live in `assets/logos/` — five lockups × three colours (Forest / Black / White). Always pick the most-contrasting version for the background; honour clear space (height of the "N") on all sides.

---

## Index / manifest

**Foundations**
- `styles.css` — entry point (import this). `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css` (radius + elevation + motion), `base.css` (element resets + base type).
- `guidelines/*.card.html` — specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- `assets/logos/` — Primary, Reduced (®), Wordmark, Outline, Badge lockups in Forest/Black/White.

**Components** (`window.Studio9DNDesignSystem_7fd16e.*`, React)
- `components/forms/` — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch
- `components/data-display/` — Card, Badge, Tag, Avatar, Stat
- `components/navigation/` — Tabs, Breadcrumb
- `components/feedback/` — Dialog, Tooltip, Accordion

Each has a sibling `.d.ts` (props), `.prompt.md` (usage), and a per-directory `*.card.html` specimen.

**UI kits**
- `ui_kits/website/` — the Studio9DN practice website. Interactive: Home · Work · Project detail · Studio · Contact. Built from the component library. See `ui_kits/website/README.md`.

**Slides**
- `slides/*.card.html` — 1280×720 slide templates: title, section divider, big quote, stats, project showcase, closing.

**Skill**
- `SKILL.md` — Agent-Skills-compatible entry for downloading this system into Claude Code.

---

## Caveats
- **Ochre & Navy hex are approximate.** The guidelines name "Yellow" and "Navy" as secondary accents but the PDF's colour page did not yield clean values; `--ochre-500 #C99A3B` and `--navy-600 #2D3C4D` are tasteful placeholders. Confirm against the Pantone references before production.
- **Fonts are loaded from the Fontshare CDN**, not self-hosted. If you need offline/self-hosted binaries, download Clash Grotesk + Rowan from fontshare.com and swap the `@import`s in `tokens/fonts.css` for `@font-face` rules.
- **No project photography** was supplied — the website kit uses tasteful duotone placeholders labelled with locations.
