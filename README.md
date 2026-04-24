# SEPA Prototype

A working prototype for the proposed SEPA information architecture and brand direction. Built on the stack defined in the Vercel best practices doc: Next.js on Vercel, Tailwind, shadcn/ui-ready.

## What this is

Four screens that test the hypothesis: **utility leaders and regulators will engage more deeply with SEPA if the site is organized around shaping the transition rather than describing SEPA's activities.**

- `/` Home
- `/shape/grid` Shape / Grid arena
- `/research` Research hub
- `/for/utility` Utility leaders audience hub

The organizing idea "Let's shape energy's transition" appears persistently in the tagline strip. Every page closes on the mission.

Annotations are baked into the prototype (hover the blue numbered markers). Toggle them off in the top banner before a client walkthrough if you want to talk them through live.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS (with SEPA design tokens)
- Geist font (via `next/font`)

No shadcn/ui components used yet. Add them when the prototype grows interactive components that need accessibility primitives.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

**Option 1: GitHub + Vercel dashboard (recommended)**

1. Push this folder to a new GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Framework preset: Next.js (auto-detected)
5. Deploy

Vercel creates preview URLs for every branch and PR, which is the workflow the best practices doc assumes.

**Option 2: Vercel CLI**

```bash
npm i -g vercel
vercel
```

Follow the prompts. First deploy creates the project, subsequent deploys update it.

## Clean URL

Per best practice #8 in the reference doc, swap the hashed preview URL for something clean before sending to SEPA. Options:

- Buy a cheap domain like `sepa-proto.com`
- Use a subdomain of an existing Antenna domain: `sepa.antennagroup.com`
- Configure in Vercel project settings → Domains

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
│   ├── TaglineStrip.tsx        "Let's shape energy's transition" strip
│   ├── ProtoBanner.tsx         Dev banner with view switcher + annotation toggle
│   ├── FooterMission.tsx       Persistent mission block (every page)
│   ├── Footer.tsx              Footer nav
│   └── Annotation.tsx          Hoverable annotation marker
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Design tokens

Four-step grayscale ramp plus one accent, defined in `app/globals.css`:

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

Single accent reserved for interactive elements per best practice #4. Do not use for decoration.

## Next steps (hypothesis-testable)

1. **Remove the proto banner** for client share. Comment out `<ProtoBanner />` in `app/layout.tsx` or gate on `process.env.NODE_ENV`.
2. **Add the Fortnightly variant toggle.** Per best practice #6, use a query param like `?variant=sub-brand` or `?variant=endorsed` to toggle the Fortnightly treatment. Same deploy, two hypotheses.
3. **Real images.** Currently using grey boxes as wireframe placeholders. Swap in real photography where the design direction supports it.
4. **Instrumentation.** Add Vercel Analytics before sharing with SEPA so you know what they clicked.
5. **Password protection.** In Vercel project settings → Deployment Protection, if the content is sensitive.

## The hypothesis, written down

Per best practice #1, this prototype exists to test one sentence:

> We believe utility leaders and regulators will engage more deeply with SEPA if the site is organized around shaping the transition rather than describing SEPA's activities.

Success = SEPA's next question is better than their first one.
