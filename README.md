# SEPA Wireframe · v0.2

Unbranded clickable wireframe for a proposed SEPA site repositioning. Built for the Antenna × SEPA RFP response.

## What this is

A single-file React SPA that demonstrates:

- The new organizing idea, **"Let's shape energy's transition,"** heroing the homepage
- A revised information architecture that consolidates the sprawl of sepapower.org
- Role-based entry points for the four audiences in the strategy deck (utility leaders, regulators, solution providers, large energy buyers)
- The Grid / Growth / Globe framework rendered in indexable text, not buried in a video
- A proposed SEPA × Public Utilities Fortnightly brand architecture, made explicit
- An editorial "working document" visual language that pairs with the measured-not-muted tone from the deck

"Unbranded" means the wireframe deliberately avoids SEPA's current blue/green palette. The aesthetic is a neutral editorial system: warm bone background, ink black, one warm rust accent, monospace metadata labels, numbered sections, hairline rules. Intentional enough to feel designed, neutral enough to stand in for "what a SEPA site could look like" without pre-empting a visual identity exercise.

## What changed from v0.1

- **Typography now reads as structural**, not editorial. Instrument Serif is reserved for three moments only: the homepage hero, the Fortnightly masthead, and the "ask to act" CTA. Every other section header uses Geist sans at a heavier weight, so structural hierarchy is legible at a glance.
- **Every major section carries an explicit component label** showing what it is and what it replaces or consolidates from the current sepapower.org site. The wireframe now reads as a documented proposal, not a generic mockup.
- **Homepage is down from 7 sections to 5**. The standalone stats section is gone (stats live in the hero ticker). The standalone "Roles" section is gone (role pills live in the hero). A new "The Work" section consolidates the old "Latest" with a new Tools spotlight that elevates DELTa, Carbon Tracker, and Snapshots out of the scattered footnotes where they currently live.
- **The Tools spotlight has distinct visual treatment** (dark solid cards) so it reads as a different kind of component from research cards. Component types are now visually differentiated.

## Consolidation from sepapower.org, at a glance

| Current site | Wireframe proposal | Why |
|---|---|---|
| "Our Focus" (6 flat focus areas) + Grid/Growth/Globe (video-only) | **The Transition** section with G/G/G as primary framework and focus areas nested under it | Surfaces the strategic framework in indexable text; ends the six-silo flatness |
| "Knowledge" submenu (5 subpages: Research, Technical Reference, Blog, RAC, Working Groups) | **Research** — one unified library with audience / force / kind filters | Ends the type-vs-topic browsing split; one place for all published output |
| DELTa, Carbon Tracker, Snapshots (scattered across nav and footer) | **Tools spotlight** on the homepage + surfaced inside Research | Elevates proprietary tools, which are the strongest differentiation |
| PUF orphaned in footer with no explanation | **Publications** section with a dedicated page explaining the SEPA × PUF architecture | Resolves the brand architecture ambiguity; commits to the Option A sub-brand model from the deck |
| Events / Working Groups / Academy / Awards / Advisory Council (scattered) | **Convening** — single nav slot for gatherings of all kinds | One home for the "where the sector comes together" experience |
| "Our Capabilities" (ambiguous label) | Removed / absorbed into About | The label was never working |
| "Join SEPA" recruitment CTA | **Ask to act** — membership framed as participation in the work | Matches the deck's positioning shift from "ask to join" to "ask to act" |
| "See Yourself with SEPA" hero | **"Let's shape energy's transition"** | The organizing idea from the deck, heroed |

## Pages included

| Route | What it demonstrates |
|---|---|
| `#home` | Hero, Framework, The Work, PUF, Join |
| `#the-transition` | Grid/Growth/Globe deep page, replaces "Our Focus" |
| `#research` | Unified library with component-labeled filter bar |
| `#publications` | PUF integration + architecture explained |
| `#for/utilities`, `#for/regulators`, `#for/providers`, `#for/buyers` | Role-based landings |
| `#membership` | Framed as ask-to-act, not ask-to-join |
| `#about` | Institutional page, neutrality as principle |

## Self-contained

Everything is inlined: React, ReactDOM, Tailwind utilities, custom CSS, and the compiled application code. The only external resource is Google Fonts (Instrument Serif, Geist, Geist Mono), which falls back to Georgia and system-ui if the network is restricted.

Nothing to install. No build step. No CDN dependencies. Works from `file://` or any static host. Works behind corporate proxies that block unpkg or jsdelivr.

## Run locally

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .

# Or just double-click index.html — it works from the filesystem too
```

## Deploy to Vercel

Three options:

**Option 1. Drag and drop** (fastest)
Go to `vercel.com/new`, drop the `sepa-wireframe.zip` file on it. Done.

**Option 2. Vercel CLI**
```bash
npm i -g vercel
cd sepa-wireframe
vercel
```

**Option 3. GitHub**
Push to a repo, click "Import Project" on Vercel. It auto-detects as static.

## Editing

The whole wireframe is one file. To change copy, nav labels, or audience descriptions, find the string in `index.html` and edit in place.

- Hero copy, section headlines, and component-label text are plain strings in the compiled code — search for them, change them, refresh.
- Design tokens live in the `:root` CSS variables near the top of the file (bone, ink, accent, hairline).
- The custom CSS block below Tailwind governs editorial details: eyebrow labels, the component-label pill, the structural sans headers (`.sh2`, `.sh3`), hairlines, and the dark tool-card treatment.
- Component labels are rendered by the `ComponentLabel` primitive near the top of the JSX section — swap them in or out on any section as needed.

For heavier structural edits (new page, new section, new component), the JSX source is available on request.

## What's intentional (and what isn't)

**Intentional**
- Serif reserved for three moments only: homepage hero, Fortnightly masthead, "ask to act" CTA. Everything else is sans, so structural hierarchy is clear.
- The warm rust accent (`#BE4B28`) is the only color doing work.
- Numbered sections, mono labels, hairline rules, visible dates, and component tags: the "working document" brief from the deck, executed.
- Proof points (74%, 80%, 1,000+, Zero lobbying) moved to the hero ticker, per the assessment's "headline-level credibility signals" note.
- The acronym-vs-full-name issue is resolved with a top meta strip pairing "SEPA" with "Smart Electric Power Alliance" on every page.
- PUF gets its own nav slot, its own page, and a dedicated architecture diagram.
- Tools get a distinct visual treatment (dark cards) so DELTa, Carbon Tracker, and Snapshots don't disappear into the research library.

**Not intentional (placeholder)**
- The logomark is a circle. Any real mark replaces it.
- Leadership photos are gray blocks.
- Research titles, author names, dates are plausible placeholders.
- Some quoted figures ("96% renewal rate," "230+ providers," "642 utilities," etc.) are illustrative and would be verified with SEPA before a real build.

## File

- `index.html` — the whole wireframe
- `vercel.json` — minimal config (clean URLs, basic security headers)

That's it.
