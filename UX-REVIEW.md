# SEPA Prototype — UX Review

An honest audit of the current state against layout, CTA, and progressive disclosure best practices. Written to be shared internally at Antenna or used as a working agenda for the next iteration.

---

## TL;DR

The IA and brand logic are sound. The aesthetic holds. The gaps worth fixing are in three places: **information density on the homepage** (too many sections for a single scroll), **CTA specificity in a handful of hero moments** (still some vague primary actions), and **the audience selector effect is too subtle** (promises personalization, delivers only reordering). Everything else in this doc is either already fixed in this iteration or flagged as a deliberate next-step decision.

---

## Fixed in this iteration

**Login is now a real access gate.** Next.js middleware redirects every unauthenticated request to `/login`. The login page itself is Antenna-branded (not SEPA) and matches the Toyota sustainability preview pattern. Password: `antennagroup`. Auth cookie lasts two weeks.

**Mobile navigation works.** The desktop nav collapses at 900px to a hamburger button that opens a full-screen menu. Previously, mobile users had no way to navigate between routes once the desktop nav hid.

**Arena switcher no longer dead-ends.** Growth and Globe previously linked to `/shape/grid`. They now have their own pages, each built from the same arena template, so Grid → Growth → Globe is a real one-click flow. ArenaSwitcher is a reusable component used across all three.

**Fortnightly has a return path.** A small top bar at `/fortnightly` shows `← SEPA` on the left and the publication name on the right, so users who land on Fortnightly via a direct link or search have a visible way back.

**Proto banner is hidden on login.** The gate is a clean experience with no dev-mode artifacts visible.

---

## Still worth doing, prioritized

### 1. Homepage information density (HIGH)

The home route currently contains ten sections: Hero + Arenas, Proof strip, Current POV, Research spotlight, Voices, Convening, Fortnightly, Paths, FooterMission, Footer. On a 13-inch laptop that's roughly 8 scroll-screens of content. The user has to scan a lot before they decide what to do.

**Fix:** Cut two sections. Strong candidates: merge Convening and the bottom Paths section (both are "what to do next"), and move Voices into the About page where human stories are more contextually relevant. Net result is a homepage that reads in five or six scroll-screens instead of eight.

### 2. Audience selector effect is too subtle (HIGH)

Setting the audience in the nav currently only reorders one section of the homepage (Paths). A user who sets "Regulator" probably expects the research list to filter, the convening list to prioritize regulator-relevant events, and the arena pages to foreground regulator-facing content.

**Fix in the next iteration:** extend `useAudience()` into the Research page to auto-apply the audience filter chip, into the Grid page to reorder the topics grid, and into Convening to tag events by audience relevance. A selection should feel like a personalization, not a cosmetic change.

### 3. Primary hero CTA is still vague in two places (MEDIUM)

- Homepage: "Explore the work" doesn't tell the user what happens when they click. Candidates: "See this quarter's campaign," "Start with the Grid," or remove the button entirely and let the three arena cells be the path in.
- Research page: no primary CTA at all above the fold. The DELTa and Carbon-Reduction Tracker cards carry the page but lack a single "where do I start" action for a new visitor.

**Fix:** Make the homepage hero button specific to the current campaign ("Read our rate design position"). Add a single secondary line on Research like "New here? Start with the DELTa database →" that routes first-timers to the flagship asset.

### 4. Filter bar on Research shows everything at once (MEDIUM)

12 filter chips across three categories (Arena, Audience, Type) are all visible simultaneously. Reviewers who know what they want can scan, but a first-time visitor sees a wall of options before they see content.

**Fix:** Collapse the filter bar behind a single "Filter" button on mobile. On desktop, default to showing only the Arena filters with "+ more filters" revealing the rest. Progressive disclosure: show content first, let filters narrow only when requested.

### 5. Search and Audience selector crowd the top-right (MEDIUM)

At desktop widths, the top-right has: Search field, Audience selector, Sign in link. That's three separate controls, two of which are net-new. On tight widths (around 1100-1200px) this starts competing with the six nav links.

**Fix:** Tuck Search behind an icon that expands on click, same pattern as Google Docs. Reduces default visual weight of the top bar and lets the primary navigation breathe. The AudienceSelector stays visible because it actually changes the experience — Search doesn't, until used.

### 6. Events list column density (LOW)

The events list has five columns: Date, Type, Title, Topic, Arrow. On tighter screens, "Topic" truncates and the row loses its detail value.

**Fix:** At widths below ~1100px, drop the Topic column and absorb its content into a second line under the Title. Current CSS collapses the whole row to a stack on mobile, but the mid-desktop range benefits from an intermediate layout.

---

## What's working (keep doing this)

**The organizing idea is operationalized, not decorated.** "Let's shape energy's transition" appears in the persistent tagline strip, is the literal hero of the homepage, and gets reinforced on every arena page ("Let's shape the grid," "Let's shape demand"). That's the brief from the deck executed properly.

**Proof strip does the work of 500 words.** Four numbers at the top of the homepage — 74% of US MWh, 80% of carbon-free goals, 1,000+ members, zero dollars lobbied — cover the credibility, scale, and differentiation claims that used to require a full "About" scroll. This is the assessment's "substance without a stage" problem solved structurally.

**Annotation markers let the prototype carry its own rationale.** Per the Vercel best practices doc, "reasoning travels with the work." Reviewers hover to see why a decision was made. Toggle off for client walkthroughs. This pattern should stay.

**Arena switcher is the right elevation of Grid/Growth/Globe.** The framework is now the skeleton of the Shape experience, not a video hidden on the homepage. Persistent, dark, always visible. Addresses the assessment's core finding that SEPA's best strategic thinking was locked in a media file.

**Fortnightly editorial design is disciplined.** One lead feature, six features in a tight 3-column grid, four Voices. That's an order of magnitude more restrained than the current fortnightly.com, which shows ~40 items on the homepage with no hierarchy. The dark surface commits to PUF's editorial independence while the "A SEPA publication" endorsement in the masthead keeps the brand architecture visible.

**FooterMission closes every page on the mission.** A user doesn't have to land on About to learn what SEPA stands for. The mission + four proof points are the closing frame of every journey. This is the "brand and mission ever-present" principle from the brief, executed.

---

## Best-practice notes for the next reviewer

### Layout

- **8-point grid is loosely followed** via the 24px gutter and consistent padding multiples (16/24/32/40/48/60/64/72/88). There's no enforced design system — a next step would be to lift these into CSS variables (`--gutter-sm`, `--gutter-md`, `--gutter-lg`) so a designer can tune the whole system from one place.
- **Max width is 1280px** on all sections, applied via `.container-site` or inline `.max-w-site` in Tailwind. No section currently breaks this. If a future section does (for visual drama, say), make it a deliberate exception.
- **Vertical rhythm** is strong between sections but not within them. Some section headers sit 40px from the first content row, others sit 32px. Worth standardizing.

### CTAs

- **One primary action per section** is mostly honored. The exceptions are the homepage hero (two buttons) and a couple of arena pages. For a proposal prototype, two is defensible. For a live site, strip to one.
- **CTA verbs are specific** in most places: "Read the position paper," "Join the working group," "Subscribe to the brief." The weak ones are "Explore the work" and "See open roles." Both would benefit from a noun ("Read the Large Load Playbook," "See the three open research roles").
- **No "Learn More."** Good. The assessment flagged this as an anti-pattern; we avoided it.
- **Tertiary links use the arrow-underline pattern** consistently (`.link-arrow`). That's a good visual grammar — primary (blue button), secondary (ghost button), tertiary (underline with arrow).

### Progressive disclosure

- **The homepage follows an inverted-pyramid pattern:** the most important thing (the organizing idea + arenas) is at the top, then the proof, then the current campaign, then research, then voices, then convenings, then paths. That's correct for a landing page.
- **Arena pages use tabs-as-anchors pattern** via the `.arena-subnav` (Overview, Our position, Research, Working groups, Events, Tools & data). Each tab reveals more detail without the user having to leave the page. Good.
- **Research listings lead with abstract + audience tag** before the reader clicks through. This directly fixes the old "title + date + type" listing the assessment critiqued. Decision information before detail pages. Correct progressive disclosure.
- **The audience selector is a progressive disclosure hint** but doesn't yet disclose much that's actually different. Section 2 above addresses this.

---

## The principles this prototype is trying to embody

Per the Antenna deck, the prototype is operationalizing a specific strategic mandate:

1. **Stop inviting, start leading.** Replace the recruitment line with a positioning line. ✓
2. **Do not just publish. Influence.** Research that leads with decisions it helps you make. ✓
3. **Embrace neutrality. Do not apologize for it.** About page frames neutrality as leverage. ✓
4. **Compound, do not reset.** Each arena is a compounding campaign thread, not a one-off. ✓
5. **Be the center of gravity, not the library next to it.** The persistent mission block at the foot of every page, the dark-Ink-1 proof strip, the arena-as-skeleton structure. ✓

Where the prototype still feels like a library is in the sheer length of the homepage and the flatness of the Research list. Both are addressable without structural changes.

---

## Next iteration — suggested priority order

1. **Thin the homepage.** Cut Voices (move to About), merge Convening and Paths. Target: 6 scroll-screens or fewer.
2. **Extend the audience selector.** Make it filter Research, reorder arena topics, and tag events. Selection should feel like personalization.
3. **Sharpen two CTAs.** Homepage hero primary action, Research page first-action.
4. **Collapse the Research filter bar** on smaller screens.
5. **Tuck search behind an icon** in the nav.

After that, the prototype is ready to hand to the client with confidence. Everything before that is polish — the structural decisions hold.
