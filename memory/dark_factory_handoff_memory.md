# Dark Factory — Project Handoff & Memory State

**Date:** 2026-04-05
**Environment:** Next.js, Tailwind CSS, Supabase, Stripe

## 1. Architectural & UX Refinements Implemented
*   **Mobile-First Product Pages:** 
    *   Moved product title *above* the image for immediate context (above the fold).
    *   Hidden non-essential metadata on mobile viewports.
    *   Unified `Size Selector` and `Add to Cart` CTA into a fixed, full-width sticky bottom bar for frictionless mobile conversions.
*   **Global Layout Nuclear Isolation:**
    *   Implemented `lightbox-active` class orchestration on the `<body>`.
    *   When the Product Zoom Portal is active, the entire `.layout-content-wrapper` uses `display: none !important` to permanently resolve persistent Safari rendering bleed-through bugs during zooming.
*   **Shop Grid Expansion:**
    *   Expanded "Staff Picks" section to show exactly 6 items in a 2x3 grid.
    *   Scaled up Staff Picks card and typography sizes for aggressive hierarchy.

## 2. Pricing Architecture
*   **Max-Price Anchor Strategy:** 
    *   Because Dark Factory upcharges +¥500 for `XL` and `XXL` sizes, the global `getMaxPrice()` utility was created.
    *   **Rule:** The Shop Grid UI and initial Product UI now anchor to the *highest* possible tier price. When a user selects down to `S`, `M`, or `L`, the price drops to baseline triggering a psychological "discount" response.
*   **Database Sync:** 
    *   The Supabase backend base prices were permanently synced up to match frontend `productPrices` overrides via a raw SQL migration.

## 3. Operations & CI Pipeline
*   **Green CI Verification:**
    *   Resolved `npm audit` vulnerable dependencies via lockfile generation.
    *   Resolved Next.js CI ESLint blockers (migrated `<a>` to `<Link>` for prefetching; refactored synchronous `setMounted` state-in-effect behavior in `ProductImage.tsx`).
    *   GitHub Actions CI is currently 100% green and deployable.

## 4. Security Audit Findings & Pending Debt
*   **Passed (G1-G8):** No XSS, strict Zod backend schema validation, PII is hashed in logs, no secret key leaks, Stripe `constructEvent` and Idempotency deduplication check (`23505` constraints) are intact.
*   **Pending Issue 1:** *Missing Rate Limiting.* There is currently no active protection layer over `/api/checkout`. Upstash Redis rate-limiter integration is highly advised before traffic scales.
*   **Pending Issue 2:** *JPY Format Bug.* Inside `/src/app/admin/page.tsx`, the logic runs `cents / 100`. JPY is a zero-decimal currency; this division will break the admin dashboard display integers. Requires immediate formatting patch.

---
**Status:** System stable, CI passing, Mobile conversion UI secured. Ready for the next development iteration.
