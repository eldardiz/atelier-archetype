# Atelier Archetype — Template Brain

This is the **Atelier archetype** for the Axamo productized website system. It is a *template*, not a live client site. It is the third archetype after Editorial and Fresh, designed for natural-wine producers, third-wave bakeries, and designer-led restaurants.

Atelier was cloned from the Editorial skeleton and re-skinned to a paper-white + forest-green identity inspired by [leawinery.com](https://leawinery.com/). The structural shell is shared with Editorial, the visual layer is bespoke.

## When this archetype is used

- A new lead site is cloned from `vibe-coding/projects/archetypes/atelier/` into `vibe-coding/mockups/[lead-slug]/` (mockup) or `vibe-coding/projects/[client-slug]/` (signed client).
- The cloning happens via the `/new-mockup` slash command or manually.
- After cloning, the new project edits `lib/brand.ts` and swaps `public/images/` to make the site lead-specific.

## What must stay generic in this archetype

- `lib/brand.ts` — placeholders only, no real business data
- All section component `FALLBACK` constants — English, generic, neutral
- `public/images/` — placeholder paths only; the actual placeholder JPGs are added per-lead

## The Axamo archetype lineup

This is template 04 (Atelier). The full lineup:

1. **Editorial · Warm** — dark, atmospheric, serif-led, photography-led, dark olive + cream palette descended from Le Passage Saint-Honoré. Premium restaurants, established wineries, heritage brands.
2. **Editorial · Light** — same skeleton + tokens as Warm, opt-in via `brand.theme = 'light'`. Brighter canvas, red accent. Bakeries that want serif elegance with a bright canvas.
3. **Editorial · Blue** — Warm skeleton with peacock-blue palette swap. Modern European wineries, design-forward restaurants.
4. **Fresh** — white surface + lime accent, modular bento, sidebar nav, parallax footer. Modern bakeries, juice bars, brunch.
5. **Atelier** (this) — paper-white + forest-green, restrained Inter sans + Fraunces italic stress. Natural-wine, designer-led restaurants, third-wave bakeries.

Editorial Warm/Light/Blue share a skeleton. Fresh and Atelier are structurally different templates. All five surfaces share the `lib/brand.ts` interface as the single per-lead swap surface.

## Atelier design identity

Reference: [leawinery.com](https://leawinery.com/). The signature moves:

- **Paper-white dominant surface** (`#FFFDF5`) with a soft cream rhythm surface (`#F0EEE6`)
- **Forest green as the single accent** (`#264C41`) — only on hover states, link underlines, button surfaces, small dot dividers. Never floods.
- **Terracotta as the warm tertiary** (`#864928`) — used very sparingly: eyebrow labels, section number prefixes, hover halos
- **Restrained type system** — Inter for everything (body, UI, nav, headlines) at weights 300/400/500/600. Fraunces (italic only) for stress moments inside headlines, see the `.stress` class
- **Italic-stress pattern** — wrap a single word in a headline with `<span class="stress">word</span>` and it swaps from Inter to Fraunces Italic. Use 1–2 words per headline at most. LEA's signature move.
- **No noise overlay** — the heritage `.noise` filter is suppressed (`opacity: 0`). Atelier is quiet.
- **Photography-led** — full-bleed hero photos and section showcase images, gradients are neutral black not maroon

## Stack

- Next.js 16.2.4, TypeScript, Tailwind CSS v4
- Inter + Fraunces via next/font/google (free)
- GSAP + Lenis for motion (inherited from Editorial)
- yet-another-react-lightbox for the Philosophy gallery
- **No CMS by default.** All content lives in `lib/brand.ts` + per-component `FALLBACK` constants. Sanity is available as an opt-in add-on at `../_addons/sanity-cms-editorial/` (Editorial schema graph works for Atelier too — sections are the same shape).
- Vercel deploy
- **Scope: lead-gen homepage only.** No /privatisation, no /recrutement, no forms, no Resend.

## Files of structural importance

```
lib/brand.ts                      ← single source of business data — components read from this
lib/utils.ts                      ← cn() helper
components/sections/              ← one section per file, content lives in inline FALLBACK constants
components/sections/HeroSection.tsx           ← hero with EST/coords stamps from brand.identity
components/sections/AboutSection.tsx          ← about/origin story
components/sections/PhilosophySection.tsx     ← philosophy/approach gallery
components/sections/FeaturedOfferingSection.tsx ← brunch / wines / pastries — business-agnostic
components/sections/LocationShowcaseSection.tsx ← terrace / tasting room / café
components/sections/ContactSection.tsx
components/sections/FinalCTA.tsx
components/sections/InstagramSection.tsx
components/sections/TestimonialsSection.tsx
components/sections/PlaylistSection.tsx       ← off by default for wineries/bakeries
components/sections/MenuShowcaseSection.tsx   ← 3-panel horizontal scroll
components/sections/InfiniteScrollBanner.tsx  ← word marquee
components/sections/GallerySection.tsx        ← Flip lightbox grid
app/page.tsx                      ← homepage composition
app/layout.tsx                    ← root layout — binds Inter + Fraunces next/font variables
styles/figma-tokens.css           ← CSS variables — palette / type / spacing
styles/claude-design.css          ← application styles. Top section: Atelier tokens + .stress class.
                                    Bottom section (after the heritage Editorial CSS): the
                                    "ATELIER OVERRIDES" block — paper-white surfaces, restyled
                                    eyebrow, forest-green buttons, killed noise overlay.
```

## When spawning a new mockup or client site from this archetype

1. Clone the entire archetype directory.
2. Edit `lib/brand.ts`:
   - Set `identity.name`, `identity.tagline`, `identity.description`
   - Set `businessType` (`restaurant` / `winery` / `bakery`)
   - Keep `archetype: 'atelier'`
   - Set `contact.*`, `hours.*`, `booking.*`, `social.*`
3. Swap `public/images/` — drop in lead's photos using the existing directory structure (same layout as Editorial).
4. Swap `styles/figma-tokens.css` if a different accent is needed. Atelier holds up well with:
   - Forest green `#264C41` (default — natural wine vibe)
   - Oxblood `#5A2A2A` (darker, heritage)
   - Midnight `#1B2845` (modern, oceanic)
   - Burnt orange `#A45242` (third-wave coffee)
   - Olive `#3F4A2A` (rustic, agricultural)
   Don't introduce a dark theme. Atelier's identity is the bright canvas.
5. Optional: install the Sanity CMS add-on if the client wants self-serve editing. Source at `../_addons/sanity-cms-editorial/`.

## How the italic-stress pattern is wired

```tsx
<h2 className="display">
  Innovative to be <span className="stress">natural</span>
</h2>
```

The `.stress` class in `styles/claude-design.css` (top section, right after `:root`) swaps:
- font-family from `var(--font-inter)` to `var(--font-fraunces)`
- font-style to italic
- font-weight to 400
- enables Fraunces stylistic set 01 for the more characterful italic cut

Use sparingly — 1 word per headline, 2 max. The contrast against the surrounding Inter only reads as deliberate when it's rare.

## Critical pitfalls

- **Lenis**: must use dynamic `import('lenis')` inside useEffect — ESM-only
- **Vercel build**: `tailwindcss` + `@tailwindcss/postcss` must be in `dependencies`
- **SSR/hydration**: no `new Date()` / `Math.random()` in render body — defer to useEffect
- **Em dashes in user-facing copy**: never use `—` in copy spawned from this archetype (workspace rule)
- **Sanity OOM trap**: do NOT reinstall Sanity into the archetype without the env-gating pattern at `../_addons/sanity-cms-editorial/README.md`. The Sanity Studio module graph (~73MB of code) is the reason the archetype was kept CMS-free.
- **Don't introduce dark theme**: Atelier's identity is the paper canvas. If a lead wants dark, route them to Editorial Warm instead.

## Known carry-overs

- `mentions-legales` page contains French legal copy. Translate per-locale during the polish pass.
- `Navbar` has French strings ("Suivez-nous", "Adresse") in the menu bottom. Translate per-lead.
- Placeholder images in `public/images/` are not yet bundled — running dev without project-specific images will 404 on hero/feature/etc. Per-lead workflow swaps these.

## Git rules

This archetype has its own GitHub repo and Vercel project (parity with Fresh and Editorial). Commit prefix: `atelier: …`.
