# HostScale UI/UX Redesign — "Refined Brand" (Direction B)

## Context

HostScale (Next.js 14 App Router, live at `hostscalev0.vercel.app`) has a working concept but reads as a generic "v0 dark-SaaS scaffold." Two independent audits plus a firsthand visual review converged on the same root cause: the app leans on the exact aesthetic the `taste-skill` flags as the #1 AI tell — a deep-purple→cyan **glow + glassmorphism + Inter** look — and applies its design tokens inconsistently (hardcoded hex/spacing scattered across ~30 components, no type scale, weak contrast, a broken-looking map placeholder, missing interaction states, minimal accessibility).

The data layer is already 100% static seed data (no backend), so this is purely a presentation-layer redesign.

**Decision:** Direction B — keep HostScale's cyan-on-dark **brand identity** (so the existing logo and brand recognition survive), but execute it with senior-engineer discipline per `taste-skill`: neutral near-black base, cyan as the single accent, hairlines instead of glow, Geist typography, asymmetric hero, and a dense "cockpit" dashboard with monospace numbers. **Scope:** design-token foundation first, then both the landing page and the dashboard.

**Outcome:** A product that looks intentional and distinctive — not a template — backed by a real token system that keeps it consistent.

## Design Principles (taste-skill dials)

- `DESIGN_VARIANCE: 7` — asymmetric/offset layouts, no centered hero, no 3-equal-card rows.
- `MOTION_INTENSITY: 5` — fluid CSS + spring physics on interactions; `prefers-reduced-motion` respected; animate only `transform`/`opacity`.
- `VISUAL_DENSITY: 6` (dashboard trends to 7) — group data with borders/dividers + negative space, not boxes-everywhere; monospace tabular numbers.
- Hard bans enforced: no purple/indigo, no neon glow, no glassmorphism overuse, no Inter, no gradient text, no emoji, no generic names ("Sarah Johnson"), no round fake numbers, no `h-screen` (use `min-h-[100dvh]`), no Unsplash.

## 1. Foundation — Design Token System (highest leverage)

Single source of truth in `tailwind.config.js` (v3) + `src/styles/globals.css`. All components consume tokens; no raw hex.

**Color — neutral base + one accent**
- Surfaces (zinc): `bg` `#09090b` · `surface-1` `#131316` · `surface-2` `#18181b` · `elevated` `#27272a`.
- Borders: `border` `rgba(255,255,255,0.08)` (hairline) · `border-strong` `rgba(255,255,255,0.14)`.
- Text: `primary` `#fafafa` · `secondary` `#a1a1aa` · `muted` `#71717a`. (Fixes the low-contrast labels — secondary/muted are AA on the dark base.)
- Accent (single): cyan `#22b8cf` (brand cyan, slightly desaturated for elegance) + `accent-fg` for text-on-accent (`#06262c`). Used for primary CTAs, active states, key data — sparingly.
- Status only (never decoration): `success` `#34d399`, `warning` `#fbbf24`, `danger` `#f87171`.
- **Removed:** `#6366f1` indigo, the `#0f0a1e→#1a1035` purple gradient, all cyan outer-glows.

**Typography** — install `geist`; wire `GeistSans` + `GeistMono` in `app/layout.tsx` (replaces Manrope/Inter). Scale tokens (size / leading / tracking):
`display` 3.25rem/1.02/-0.03em · `h1` 2.25rem/1.1/-0.02em · `h2` 1.5rem/1.2/-0.01em · `h3` 1.125rem/1.3 · `body` 1rem/1.6 · `small` 0.875rem/1.5 · `caption` 0.75rem/1.4. All numeric/data uses `GeistMono` with `tabular-nums`.

**Spacing / radius / shadow / motion**
- Spacing: enforce Tailwind 4px scale; remove arbitrary `text-[...]`/`p-[...]` values.
- Radius: `sm` 6px · `md` 10px · `lg` 16px (cards) · `xl` 24px · `full`.
- Shadow: tinted, subtle elevation (`0 1px 2px rgba(0,0,0,.4)`, `0 8px 24px -8px rgba(0,0,0,.5)`). Glass, where used, gets a 1px inner refraction border (`shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`), no blur-glow.
- Motion tokens: `--ease-out: cubic-bezier(0.16,1,0.3,1)`; durations fast/normal/slow; framer spring `{stiffness:100,damping:20}`. Global `@media (prefers-reduced-motion: reduce)` disables non-essential motion.

**Primitives** — refactor `src/components/ui/Button.tsx` + `Card.tsx` to token-only, with full `hover/focus-visible/active(-translate-y-[1px])/disabled` states; one primary accent button per view, rest secondary/ghost. Install `@phosphor-icons/react`; replace all emoji (e.g. `TaskAssignmentPanel` avatars) and ad-hoc icons with Phosphor at a standard `weight`.

## 2. Landing Page (`app/page.tsx` + `src/components/marketing/*`)

- **Top nav bar** (currently missing): logo left, anchor links center, primary CTA right; sticky, hairline bottom border on scroll.
- **Asymmetric hero** (`min-h-[100dvh]`, no center): left column = concrete headline (e.g. "Run your whole short-stay portfolio from one screen"), a real subhead naming the operator audience, two CTAs with clear primary/secondary hierarchy; right column = a bright, large, real dashboard screenshot/preview (not the current dim mock). Remove gradient-text and the radial glow.
- **Problem → Solution** as a legible 2-column zig-zag (replaces the illegible tiny-label network/process diagrams, which fail completely on mobile). Keep concise concrete copy.
- **Property database**: keep the icon-grid section (the strongest one) — upgrade to Phosphor icons, richer copy, consistent card spacing.
- **Proof strip**: a row of portfolio stats with messy realistic numbers + a short testimonial. (New — B2B trust signal currently absent.)
- **CTA / contact**: form with label-above-input, helper/error slots in markup, real visual weight.
- **Footer**: proper multi-column (product / company / legal / social).
- Sections get consistent vertical rhythm and `max-w-[1400px] mx-auto` containment.

## 3. Dashboard (`app/dashboard/page.tsx` + `src/components/dashboard/*` + `src/components/bento/*`)

- **Neutral base + anti-card density**: separate data groups with `border`/`divide-y` + negative space rather than nesting boxes; reserve elevated cards for true hierarchy. All figures `GeistMono tabular-nums`.
- **Stat row**: 4 equal-weight tiles, high-contrast labels, mono values, delta indicators (success/danger + arrow).
- **Real charts** via Recharts (already a dep): revenue trend (area, single hue), occupancy trend (line), revenue-by-type (horizontal bar). Color = one hue + gray emphasis, never rainbow; axis/labels in muted ink.
- **Map panel fix**: replace the broken-looking dark box with an intentionally designed Thailand region panel — a clean styled SVG/region list with pins and per-region occupancy (no external map dependency).
- **Bento grid**: asymmetric responsive proportions on `lg`, collapsing to strict single column `< md`. Panels: overview, performance, tasks, map, guest messages, quick actions (+ analytics/guests/maintenance under tabs).
- **Tabs**: `role="tablist"`/`aria-selected`, active underline, arrow-key navigation.
- **Interaction states** (taste-skill mandatory): skeleton loaders matching panel layout; empty states written as invitations ("Add your first property"); inline error states; hover/focus-visible/active feedback on every interactive element.
- **Content cleanup**: replace generic names with varied believable ones; messy realistic numbers/phones; no emoji.

## Accessibility (parallel, throughout)

`focus-visible` rings on all interactive elements; `aria-label` on icon-only buttons and nav dots; `aria-expanded`/`aria-controls` on expandable panels; tab roles; AA contrast verified on the new tokens; `prefers-reduced-motion` honored; semantic landmarks (`header`/`main`/`nav`/`footer`).

## Tech / Sequencing

1. Tokens: `tailwind.config.js` + `globals.css`. Install `geist`, `@phosphor-icons/react`; wire fonts in `app/layout.tsx`.
2. Primitives: `Button`, `Card`, shared `Stat`, `Skeleton`, `EmptyState`, `Tabs` helpers.
3. Landing components → `app/page.tsx`.
4. Dashboard panels + bento + charts → `app/dashboard/page.tsx`.
5. A11y + reduced-motion pass.

## Out of Scope (this pass)

Real backend/Supabase, auth logic, live data, interactive Mapbox/Google map, the ScaleBot mascot illustrations, Storybook. Auth pages (`/login`, `/signup`) get token/typography updates only (kept as static demo forms).

## Verification

- `npm run build` exits 0; all routes prerender.
- `npm start` + visual check at desktop (1440) and mobile (390) for `/` and `/dashboard`: no purple/glow, Geist loaded, mono numbers, charts render, map panel intentional, contrast legible, states present, no horizontal scroll on mobile.
- Quick taste-skill pre-flight checklist (section 10): mobile collapse, `min-h-[100dvh]`, empty/loading/error states, cards-omitted-where-possible, isolated perpetual animations.
- Redeploy to `hostscalev0.vercel.app` and confirm HTTP 200.
