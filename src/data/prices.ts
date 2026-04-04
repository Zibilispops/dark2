// Price overrides keyed by slug.
// Applied on frontend display AND checkout route — overrides the Supabase base price.
// XL/XXL +¥500 surcharge from pricing.ts is applied on top of these values.

export const productPrices: Record<string, number> = {
  // ── Premium tier (+18% → ¥5,880) ──────────────────────
  'cyborg-girl':    5880,
  'ramenrider':     5880,
  'iceskull':       5880,

  // ── High tier (+15% → ¥5,780) ─────────────────────────
  'spacecoffe':     5780,
  'fibonacci':      5780,
  'digital-battle': 5780,
  'hit-girl':       5780,

  // ── Mid-high tier (+13% → ¥5,680) ─────────────────────
  'breaking-hearts':5680,
  'ramenmosnter':   5680,
  'self':           5680,
  'einstein1-frame':5680,
  'ramendrop':      5680,

  // ── Mid tier (+10% → ¥5,480) ──────────────────────────
  'coffeeoclock':   5480,
  'fast-food-racer':5480,
  'culture':        5480,
  'silly-devil':    5480,
  'mundane':        5480,
  'leisure':        5480,
  'boy':            5480,
  'lula-ramen':     5480,
  'ramen3':         5480,
  'ultraramen':     5480,

  // ── Base+ tier (+7% → ¥5,280) ─────────────────────────
  'bp-ramen':       5280,
  'chillout':       5280,
  'fight-to':       5280,
  'pie':            5280,
  'ice-scream1':    5280,
  'ice-scream2':    5280,
  'ice-scream3':    5280,
  'icescreamsoft':  5280,
  'super-cute':     5280,
};
