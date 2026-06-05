/**
 * Stock Unsplash photos for the Sesta Laioles archetype template.
 * Vibe: warm Mediterranean / golden-hour vineyard / stone / oak barrel.
 *
 * Per-lead workflow: replace these URLs with `/images/...` local files when
 * the lead's photo folder is ready. The Atelier archetype expects 7 distinct
 * image slots across the homepage.
 */

const u = (id: string, w = 1800, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const PHOTOS = {
  // Hero — full-bleed vineyard with hillside / golden hour
  hero: u('1474722883634-bcefb1a92f6f', 2400),

  // Finca intro — small square (stone wall texture / interior detail)
  fincaSm: u('1568213816046-0ee1c42bd559', 800),
  // Finca intro — wide vineyard or estate photo
  fincaWide: u('1506377247377-2a5b3b417ebb', 1800),

  // Image strip — 3 photos
  strip1: u('1547595858-d4dcfa9cd8c8', 800),
  strip2: u('1518972559570-7cc1309f3229', 1800),
  strip3: u('1496318447583-f524534e9ce1', 800),

  // Terroir — full-bleed sunset vineyard / Mediterranean landscape
  terroir: u('1559672266-ec0bd2cbf8a8', 2400),

  // Bodega — wine cellar / oak barrels
  bodega: u('1568213816046-0ee1c42bd559', 1600),

  // Winemaker quote — harvest scene / hands at work in the vines
  winemaker: u('1547595858-d4dcfa9cd8c8', 1400),
} as const
