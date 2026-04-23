# SEPA Wireframe · v0.3

Unbranded clickable wireframe for a proposed SEPA site repositioning. Built for the Antenna × SEPA RFP response.

## What this is

A single-file React SPA that demonstrates:

- The new organizing idea, **"Let's shape energy's transition,"** heroing the homepage
- A revised information architecture that consolidates the sprawl of sepapower.org
- Role-based entry points for the four audiences in the strategy deck, each with named case studies and a dedicated guide
- The Grid / Growth / Globe framework rendered in indexable text
- A proposed SEPA × Public Utilities Fortnightly brand architecture, made explicit
- A persistent mission and values panel ("brand stamp") that appears on every page
- A "Voices" module surfacing SEPA's thought leaders and a team strip showing the people doing the work
- Data visualizations (research distribution, load forecast gap) built directly into sections where they earn their place
- Photo placeholders with captions that specify what imagery would live there
- An editorial "working document" visual language that pairs with the measured-not-muted tone from the deck

"Unbranded" means the wireframe deliberately avoids SEPA's current blue/green palette. The aesthetic is a neutral editorial system: warm bone background, ink black, one warm rust accent, monospace metadata labels, hairline rules, monogram avatars for placeholder faces.

## What changed from v0.2

- **Brand and mission are now ever-present.** A dark "brand stamp" panel appears on every page above the main footer: mission statement in serif italic with "energy's transition" accented, a values chip row (Trust / Evidence / Neutrality / Convening / Openness / Rigor), and institutional footer metadata. A mission fragment also rides in the top meta strip across every page.
- **People are visible.** Monogram avatars (with named initials, varied color variants) stand in for real photography. A new "People doing the work" section on the homepage includes a Voices strip (4 named experts with POVs and pull quotes) and a team grid (8 staff with roles). About page leadership cards are now richer with bios and focus areas.
- **Thought leadership is surfaced.** Research is no longer authorless; every featured piece is attributed to a named expert. Voice cards combine monogram, role, expertise, POV title, and italic pull quote in one module.
- **Benefit-based storytelling on every audience page.** Each of the four role pages (utilities, regulators, providers, buyers) now includes a "How members use this" section with two named case studies. Format: named org → specific challenge → SEPA resource used → measurable outcome → attributed pull quote from the person. Examples include "$47M rate-case exposure reduced," "14 co-ops aligned on storage," "4 orders citing SEPA research," "$1.2B procurement coordinated."
- **Each audience page names a guide.** A specific SEPA team member is visible at the top of every role landing as "your guide in this practice" with a one-click "Book 30 min" CTA.
- **Data visualizations are in.** Two new charts built in hand-coded SVG: a distribution bar showing the 482-asset research library split across Grid/Growth/Globe on the homepage, and a dual-line forecast chart on the Transition page showing the gap between the 2022 peak load forecast and the 2024 revision.
- **Imagery placeholders are intentional.** Captioned photo boxes tell reviewers exactly what imagery would live in each slot (working group in Boulder, editorial meeting at DC office, annual all-hands) so the wireframe no longer reads as text-only.

## Consolidation from sepapower.org, at a glance

| Current site | Wireframe proposal | Why |
|---|---|---|
| "Our Focus" (6 flat focus areas) + Grid/Growth/Globe (video-only) | **The Transition** section with G/G/G as primary framework and focus areas nested under it | Surfaces the strategic framework in indexable text; ends the six-silo flatness |
| "Knowledge" submenu (5 subpages) | **Research** — one unified library with audience / force / kind filters | Ends the type-vs-topic browsing split |
| DELTa, Carbon Tracker, Snapshots (scattered) | **Tools spotlight** with distinct dark-card treatment | Elevates proprietary tools; gives them the prominence the current site doesn't |
| Research with no authors | **Voices** module with named experts + attributed POVs | Thought leadership becomes human |
| No case studies | **Member Stories** on every audience page | Turns research into outcomes; benefit-based storytelling |
| No visible team photos or culture | **People module** on homepage + Leadership cards on About + Photo placeholders with captions | Authentic culture and talent visible throughout |
| No data visualization | **SVG charts** in The Work and Transition sections | Shows SEPA's scale and substance visually |
| PUF orphaned in footer | **Publications** section with its own page | Resolves the brand architecture ambiguity |
| Mission on About only | **Brand stamp on every page** | Mission and values ever-present |
| "Our Capabilities" (ambiguous) | Removed | The label was never working |
| "Join SEPA" recruitment CTA | **Ask to act** | Matches the deck's positioning shift |
| "See Yourself with SEPA" hero | **"Let's shape energy's transition"** | The organizing idea from the deck, heroed |

## Pages included

| Route | What it demonstrates |
|---|---|
| `#home` | Hero · Framework · The Work (with distribution chart) · People (Voices + Team) · PUF · Join · Brand stamp |
| `#the-transition` | Grid/Growth/Globe with load-forecast chart in the Growth section |
| `#research` | Unified library with component-labeled filter bar |
| `#publications` | PUF integration + architecture explained |
| `#for/utilities`, `#for/regulators`, `#for/providers`, `#for/buyers` | Role-based landings with named guide + case studies |
| `#membership` | Framed as ask-to-act |
| `#about` | Leadership cards with bios + focus areas + culture scene |

## Self-contained

Everything is inlined: React, ReactDOM, Tailwind utilities, custom CSS, compiled application code, and all SVG charts. The only external resource is Google Fonts, which falls back to Georgia and system-ui if the network is restricted.

Nothing to install. No build step. No CDN dependencies. Works from `file://` or any static host.

## Run locally

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .

# Or just double-click index.html
```

## Deploy to Vercel

**Option 1. Drag and drop** (fastest)
Drop `sepa-wireframe.zip` on `vercel.com/new`. Done.

**Option 2. Vercel CLI**
```bash
npm i -g vercel
cd sepa-wireframe
vercel
```

**Option 3. GitHub**
Push to a repo, click "Import Project" on Vercel.

## Editing

To change copy, find the string in `index.html` and edit in place.

- Hero copy, section headlines, and component-label text are plain strings in the compiled code.
- Voice cards, team members, case studies, and leadership are all in clearly structured arrays — edit directly.
- Design tokens are in `:root` CSS variables (bone, ink, accent, hairline).
- The brand stamp mission statement is in the `BrandStamp()` function.

For heavier structural edits (new page, new section), the JSX source is available on request.

## What's intentional (and what isn't)

**Intentional**
- Serif reserved for three moments: homepage hero, Fortnightly masthead, "ask to act" CTA, brand-stamp mission, case-study pull quotes. Everything else is sans.
- The warm rust accent (`#BE4B28`) is the only color doing work, plus its light variant (`#E9C9BE`) for fills and quiet moments.
- Monogram avatars in four variants (ink / accent / bone / dim) are a deliberate placeholder system, not a miss — they read as intentional while leaving room for real photography.
- Photo placeholder captions specify exactly what imagery would live in each slot so reviewers understand the imagery intent.
- Data visualizations use hand-coded SVG styled to match the editorial system — no charting library bloat.
- Every major component carries a mono label and a "Replaces / Consolidates / Resolves" metadata line so the wireframe is self-documenting.

**Not intentional (placeholder)**
- All names, roles, member organizations, quotes, and stats are plausible fictions for demonstration purposes.
- Photo placeholders are the opposite of production photography — they exist to show where imagery lives and what it would depict.
- The logomark is a circle.

## File

- `index.html` — the whole wireframe (~284 KB)
- `vercel.json` — minimal config

That's it.
