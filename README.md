# SEPA Prototype

A working prototype for the proposed SEPA information architecture and brand direction. Built on the stack defined in the Vercel best practices doc: Next.js on Vercel, Tailwind, shadcn/ui-ready.

## What this is

Working prototype for a proposed SEPA experience. Seven screens that test a single hypothesis: **utility leaders, regulators, and other sector actors will engage more deeply with SEPA if the site is organized around shaping the transition rather than describing SEPA's activities.**

- `/` Home — Grid/Growth/Globe elevated into the hero, audience-aware path reordering
- `/shape/grid` Shape / Grid arena with persistent arena switcher for Growth/Globe
- `/research` Research hub — DELTa + Carbon-Reduction Tracker surfaced as branded assets
- `/for/utility` Utility leaders audience hub
- `/fortnightly` Public Utilities Fortnightly — sub-brand treatment, magazine-quality layout
- `/about` About SEPA — positioning-led, neutrality as principle, leadership visible
- `/login` Access-gated preview (access code: `sepa2026`)

The organizing idea "Let's shape energy's transition" appears persistently in the tagline strip. Every main-site page closes on the mission. Fortnightly and login have their own identities.

**Features worth clicking:**
- **Audience selector** in the nav: self-identify as Utility / Regulator / Provider / Buyer to personalize the home experience. Selection persists across pages via localStorage.
- **Search field** in nav: stubbed to an alert, ready to wire to a real `/search` route.
- **Arena switcher** on Shape pages: Grid, Growth, Globe always one click apart.
- **Annotations toggle** in the proto banner: blue numbered markers explain structural decisions. Hover to read. Toggle off before a client walkthrough.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Geist font via `geist` package
- Node 18.18+ required

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

**The critical setting most people get wrong on first deploy: the root directory.**

If you are pushing this project to a GitHub repo, the `sepa-prototype/` folder needs to be either:
- At the repo root (so `package.json` is directly in the repo root), OR
- A subfolder, in which case you must tell Vercel to use that subfolder as the root

### If `package.json` is at the repo root

1. Push to GitHub
2. Go to https://vercel.com/new
3. Import the repo
4. Framework: Next.js (auto-detected)
5. Click Deploy

### If `sepa-prototype/` is a subfolder

1. Push to GitHub
2. Go to https://vercel.com/new
3. Import the repo
4. Expand **"Build and Output Settings"** or **"Root Directory"**
5. Set Root Directory to `sepa-prototype`
6. Framework: Next.js (auto-detected)
7. Click Deploy

### Vercel CLI alternative (skips GitHub entirely)

```bash
cd sepa-prototype
npm i -g vercel
vercel
```

Follow prompts. When it asks "In which directory is your code located?", answer `./`.

## Troubleshooting deploy failures

### "No Framework Detected" or build command not found

Root directory is wrong. See above. The folder with `package.json` must be the root.

### Build fails on `npm install`

Stale lockfile. Delete `package-lock.json`, re-commit, push.

### Build fails on TypeScript or ESLint errors

Run `npm run build` locally first to see the same errors Vercel sees. Fix, commit, push.

### Node version errors

Vercel defaults to Node 22 LTS as of 2026. This project requires Node 18.18+ and works on 18, 20, or 22. If you see a Node version error, check Project Settings → General → Node.js Version and set to 20.x or 22.x.

### Security vulnerability warnings blocking deploy

This project is already on patched versions of Next.js 15 and React 19 as of April 2026. If Vercel still flags vulnerabilities:

```bash
npm update
npm audit fix
```

Commit and push.

### Preview URL deploys but routes 404

Clear the Vercel build cache: Project Settings → General → Build & Development Settings → "Clear Cache". Redeploy.

### Still failing

Copy the exact error message from the Vercel build log (Deployments → click the failed deploy → Build Logs). The log will tell you what file and line is failing.

## Clean URL

Per best practice #8 in the Vercel best practices doc, swap the hashed preview URL for something cleaner before sending to SEPA:

- Buy a cheap domain like `sepa-proto.com`
- Use a subdomain of an existing Antenna domain: `sepa.antennagroup.com`
- Configure in Vercel Project Settings → Domains

## File structure

```
sepa-prototype/
├── app/
│   ├── layout.tsx              Root layout with persistent shell
│   ├── globals.css             Design tokens + wireframe styles
│   ├── page.tsx                Home
│   ├── shape/grid/page.tsx     Shape / Grid arena
│   ├── research/page.tsx       Research hub
│   └── for/utility/page.tsx    Utility leaders hub
├── components/
│   ├── Nav.tsx                 Primary navigation
│   ├── TaglineStrip.tsx        Persistent tagline strip
│   ├── ProtoBanner.tsx         Dev banner with view switcher + annotation toggle
│   ├── FooterMission.tsx       Persistent mission block (every page)
│   ├── Footer.tsx              Footer nav
│   └── Annotation.tsx          Hoverable annotation marker
├── package.json
├── vercel.json                 Explicit Vercel config
├── tailwind.config.ts
└── tsconfig.json
```

## Design tokens

Four-step grayscale plus one accent, defined in `app/globals.css`:

```css
--paper: #FFFFFF      /* page background */
--bg:    #F4F6F8      /* section alternates */
--box:   #D8DFE5      /* wireframe placeholders */
--line:  #B8C2CC      /* dividers */
--ink-3: #8B96A3      /* tertiary text */
--ink-2: #5B6872      /* secondary text */
--ink-1: #1A1F24      /* primary text + dark surfaces */
--accent: #2E5AAC     /* interactive elements only */
```

Single accent reserved for interactive elements per best practice #4.

## Next steps (hypothesis-testable)

1. **Remove the proto banner** for client share. Comment out `<ProtoBanner />` in `app/layout.tsx` or gate on `process.env.NODE_ENV`.
2. **Add the Fortnightly variant toggle.** Per best practice #6, use a query param like `?variant=sub-brand` vs `?variant=endorsed`. Same deploy, two hypotheses.
3. **Real images.** Currently using grey boxes as wireframe placeholders.
4. **Instrumentation.** Add Vercel Analytics before sharing with SEPA.
5. **Password protection.** In Vercel project settings → Deployment Protection.

## The hypothesis, written down

Per best practice #1, this prototype exists to test one sentence:

> We believe utility leaders and regulators will engage more deeply with SEPA if the site is organized around shaping the transition rather than describing SEPA's activities.

Success = SEPA's next question is better than their first one.
