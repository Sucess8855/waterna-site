# Design Map

Source: https://isleutilities.com/ — captured 2026-09-10 at 1440x900.

## Spacing Scale

- Base unit: **10px** (not the conventional 8px)
- Observed: 3, 5, 9, 10, 11, 15, 18, 20, 22.5, 25, 30, 60, 90
- Frequency leaders: 10px (19 uses), 90px (13), 30px (13), 20px (12)
- Section padding: `90px 150px` — fixed down the whole page
- Method: `margin` / `padding` only; sampled `gap: normal`

## Font Hierarchy

| Role | Size | Weight | Family |
|---|---|---|---|
| Hero | 117px | 700 | Lexend Deca |
| Display | 100px | 900 | Lexend Deca |
| Section title | 64px | 700 | Lexend Deca |
| Subsection | 32px | 700 | Montserrat |
| Lede | 20px | 600 | Montserrat |
| Button | 20px | 800 | Montserrat |
| Body | 16px | 400 | Montserrat |
| Caption | 15px | 400 | Montserrat |

Full size set: 117, 100, 90, 64, 36, 32, 30, 26, 20, 16, 15, 13.5px.
Weight distribution: 600 (21), 700 (20), 400 (12), 500 (9), 800 (7), 900 (3).
The scale is **not** mathematical — 16 to 20 is 1.25x, 20 to 32 is 1.6x, 32 to 64 is 2.0x.
No `ch`-based line-length control: `body.maxWidth` is `none`.

## Color Palette

| Role | Hex | Share of background area |
|---|---|---|
| Background | `#FFFFFF` | 74.4% |
| Band dark | `#08414D` | 9.0% |
| Band mid | `#0A7580` | 7.4% |
| Accent (buttons only) | `#00B2A4` | 0.6% |
| Accent soft (nav pill) | `#A1E6E6` | 0.1% |
| Page base | `#EEEEEE` | — |
| Body text | `#4F4F4F` | — |
| Heading text | `#08414D` | — |

Neutrals `#4F4F4F` and `#EEEEEE` are pure grays (equal RGB channels). The dark "neutral" is not neutral — it is teal `#08414D`.

## Image Ratios

- Hero: **1.25:1** (1440x1152), rendered full-bleed
- Thumbnail: **1:1** (500x500), rendered at 35px
- Only one image on the page renders above thumbnail scale

## Component Tokens

- **Radius**: `50%` (icon badges, 5 uses), `40px` and `36px` (pill buttons, 7 uses), `20px` (cards, approx), `0 0 14px 14px` (dropdown panels, 3 uses)
- **Nested radius**: 40px button inside ~20px card — child radius **exceeds** parent
- **Shadows**:
  - `rgba(8,65,77,0.12) 0 2px 48px -12px` — teal-tinted, cards
  - `rgba(0,0,0,0.2) 0 2px 4px 0` — tight functional depth
  - `rgba(0,0,0,0.12) 0 16px 36px -6px` — elevated panel
  - `rgba(0,0,0,0.08) 0 1px 0 0` — imperceptible at 1x zoom
  - All single-layer; no stacked shadows anywhere
- **Button**: 20px / 800 weight / 0.6px tracking / capitalize / 18px vertical, 36px horizontal padding
- **Grid**: container 1440px, `max-width: none`, 150px section padding giving a ~1140px content column. **CSS Grid count: 0** — layout is flexbox and absolute positioning throughout. Content rows are 3-up.
- **Motion**: `transform` and `box-shadow` at 0.3s `cubic-bezier(0.78, 0.13, 0.15, 0.86)`; `prefers-reduced-motion` honoured; `:focus-visible` present
- **Alignment**: hero left; intro band, section headings, cards and CTA centred; 3-up feature columns left

---

# Taste DNA

### One Claim Owns the First Screen
- **Trigger**: When making a globally unknown consultancy legible in two seconds.
- **Decision**: Spent the entire first viewport on three words at 117px over a full-bleed photograph — over the conventional hero of headline plus subhead plus two buttons plus trust logos.
- **Reason**: A visitor who cannot say what a company does after one glance leaves. Adding a second message to the first screen buys nothing and costs the first one.
- **Evidence**: 117px hero against a 16px body norm, a 7.3x jump; the 26-36px midrange is used 7 times or fewer each; the hero is the only left-aligned block on a page that otherwise centres its bands.

### The Accent Is a Promise, Not a Decoration
- **Trigger**: When a vivid brand teal was available across every section, card and heading.
- **Decision**: Confined `#00B2A4` to button fills alone and built all structural colour from two darker teals — over spreading the accent across headings, icons, borders and rules.
- **Reason**: If the eye-catching colour appears in six non-clickable places, it stops meaning "click here", and the visitor has to read every element to find the action.
- **Evidence**: `#00B2A4` occupies 0.6% of measured background area and appears only as button fill; `#08414D` (9.0%) and `#0A7580` (7.4%) carry every section band; buttons are the only 800-weight text on the page.

### Shadows Belong to the Brand's Colour Space
- **Trigger**: When cards needed to lift off a white background.
- **Decision**: Tinted the shadow toward brand teal at 48px blur and -12px spread — over the default grey `rgba(0,0,0,0.1)` drop shadow that every framework ships.
- **Reason**: A grey shadow on a coloured brand surface reads as a rendering artefact; a shadow carrying the brand hue reads as the object sitting in the same light as everything around it.
- **Evidence**: `rgba(8,65,77,0.12) 0 2px 48px -12px` on cards, against `rgba(0,0,0,0.2) 0 2px 4px` reserved for tight functional depth; the tinted shadow's hue is the same teal used for headings.

### Restraint: Photography Argues Once, Then Gets Out of the Way
- **Trigger**: When every section could have been illustrated with stock imagery of plants, engineers and water.
- **Decision**: Spent the entire photographic budget on one full-bleed hero and rendered every section below it in flat colour, line icons and type — over the sector convention of a photograph per section.
- **Reason**: Stock photography repeated down a page reads as padding and trains the visitor to skip images. Used once, a photograph sets the subject and the page can then be read rather than looked at.
- **Evidence**: Only one image renders above thumbnail scale (1440x1152 hero); the remaining rendered images are 35px region flags at 1:1; the three feature columns use line icons at 50% radius rather than photographs; `#FFFFFF` holds 74.4% of background area below the hero.

---

## Counter-findings — what NOT to copy

Recorded because a taste extraction that only flatters is useless:

1. **The hero headline is not a heading.** The DOM exposes only an `h5`; "WE KNOW WATER." is a `<p>` at 117px. Screen readers and search engines see a page with no `h1`.
2. **No layout system.** `gridCount: 0` — the page is flexbox and absolute positioning, a page-builder artefact. Do not reproduce this; use CSS Grid.
3. **The type scale is irregular.** Ratios jump 1.25x, 1.6x, 2.0x with no governing step.
4. **Line length is uncontrolled.** `body.maxWidth: none` — the centred intro band runs the full 1140px column.
