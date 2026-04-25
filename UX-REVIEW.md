# SEPA Prototype — UX Review

## Status (v1.1.x)

All five priority items from the v1.0 review are now implemented. The prototype is structurally complete.

---

## Completed in v1.1

### 1. Homepage thinned ✓

Cut from 10 sections to 6:

1. Hero with elevated Grid/Growth/Globe
2. Proof strip
3. Current campaign POV
4. Research spotlight
5. **Where to start** — merged previous Convening list + Audience Paths into one decisive section
6. Fortnightly

Voices moved off the homepage to About (where institutional trust signals belong with leadership and culture content). Total scroll length down by roughly 40%.

### 2. Audience selector now drives real personalization ✓

Selecting an audience in the nav (Utility / Regulator / Provider / Buyer) now changes:

- **Homepage** — "Where to start" reorders with the selected audience leading and visually highlighted
- **Research page** — auto-applies an audience filter; a black banner appears at the top showing "Filtered for [audience]. Showing N of 7 reports relevant to your role." with a "Clear filter" action
- **Grid arena page** — Topics grid reorders so primary topics for the selected role surface first, with the lead topic visually highlighted
- **Annotation appears** when the audience is set, explaining the reordering on Grid

Selection still persists via localStorage. Effect now feels like personalization, not a cosmetic change.

### 3. Hero CTAs sharpened ✓

- Homepage hero: "Explore the work" → **"Read this quarter's position paper"** (specific, tied to the active campaign)
- Research page: added a primary action above the fold — **"Open the DELTa database"** with a tertiary "New here? Start with our flagship report →" for first-time visitors

### 4. Research filter bar uses progressive disclosure ✓

Arena filters are visible by default (All / Grid / Growth / Globe). Type filters (Report / Brief / Data / Blog) are tucked behind a "+ More filters" toggle. Audience filter no longer appears as a chip row — it's controlled by the global selector and shown as an active-state banner when set. Net: ~70% reduction in default filter UI weight.

### 5. Search tucked behind an icon ✓

Nav search is now a 32px icon button by default. Click to expand to a 280px input with auto-focus, click-outside or Esc to close. Frees up the top-right for what actually changes the experience (the audience selector). Pattern lifted from Google Docs / Notion.

---

## Other things that landed in v1.1

- Voices section added to About between Culture and Impact
- Audience-active banner on Research is dismissible (Clear filter button writes back to global selector)
- Empty-state message on Research when filters return zero results, with a "Clear all filters" action
- Annotation #19 added on Grid explaining the topic reorder behavior
- Version bumped to 1.1.0

---

## What's working — keep doing this

**The organizing idea is everywhere it should be.** Tagline strip on every page, hero on homepage, headline on every arena page, About leads with positioning, Login leads with it.

**Proof strip carries the trust burden.** Four numbers do the work of a 500-word About scroll: 74% / 80% / 1,000+ / Zero.

**Annotation system is the right call.** Hover for rationale on any decision marker. Toggle off for client walkthroughs. Reasoning travels with the work.

**Arena switcher is the framework made architectural.** Grid/Growth/Globe always one click apart on Shape pages.

**Footer mission closes every page on mission + proof.** Brand-and-mission-everywhere principle from the brief.

**Login gate is real.** Middleware enforces it. Antenna-branded with the actual logo. Light theme reads against the black logo cleanly.

---

## What's NOT a bug — deliberate trade-offs

- **The Research filter still doesn't persist filter state in URL.** Refreshing resets to default. For a wireframe testing the IA hypothesis, that's acceptable. For a live build, add `?arena=grid&audience=utility` as URL state.
- **Empty filter results don't suggest alternatives.** They show "No reports match" with a clear action. A real CMS would surface "Closest matches" — out of scope here.
- **Voices on About are still placeholder bracketed names.** Names get filled when SEPA shares real ones.
- **Growth and Globe arena pages don't have the audience-aware topic reorder yet.** Grid demonstrates the pattern; Growth and Globe have the structure but not the wiring. Trivial copy-extension if useful.

---

## What I'd test with SEPA

The prototype is now testing one thing cleanly. Watch for:

1. **Do they click an audience role?** That's the signal that role-targeted IA resonates over generic browsing.
2. **Do they read the campaign block?** "Let's shape rate design" is the proof that the organizing idea operationalizes into compounding campaigns.
3. **Where do they bounce off?** If it's the Research page, the filter design needs work. If it's the homepage, the inverted-pyramid order is wrong.

Per Vercel best practices: the prototype has succeeded when SEPA's next question is better than their first one.
