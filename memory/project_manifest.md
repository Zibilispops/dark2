# 🚀 Project Protocol: Dark Factory v5 [Consolidated]

## 🛠 1. Architecture Specs
*   **Framework**: Next.js 16+ (App Router).
*   **Aesthetic**: Cyber-minimalist / Gifu-based Digital Vanguard.
*   **Styling**: Tailwind CSS V4 (`globals.css` @import).
*   **DB**: Supabase (Auth/SSR + CRUD).
    *   `orders` table: `id`, `user_id`, `total_cents`, `currency`, `status`, `metadata`, `created_at`.
*   **Auth**: Full cookie-based session management (`@supabase/ssr`). **Gate G6 Compliant** (No localStorage found in auth logic).
*   **UI Layout**: Fixed **50px** Navbar. Global page padding starts at **pt-12** (plus layout-level 50px top offset).

## 💎 2. Collection & Pricing Logic
*   **Catalog**: 43 High-fidelity single-view DTG designs (Removed "Costa" back assets).
*   **Dynamic JPY Protocol** (`src/lib/pricing.ts`):
    *   **Tier 1**: ¥4,980 (XS, S, M, L).
    *   **Tier 2**: ¥5,480 (XL, XXL).
*   **Logic**: Cart frozen at addition time with size-specific JPY pricing.

## 💳 3. Checkout & Payment
*   **Stripe Status**: **ACTIVATED** (Test Mode).
*   **Internal Flow**: `Cart.tsx` → `POST /api/checkout` → Stripe Hosted Redirect.
*   **Fulfillment**: `api/webhooks/stripe/route.ts` handles `checkout.session.completed`, logs to Supabase, and triggers Resend email.
*   **Security**: Signature validation enforced (Gate G7).

## 🚦 4. Security Gates [G1-G8]
*   **Passed**: All CI/CD checks fixed in GitHub Actions.
    *   Fixed G6 false positives (UI labels like "No localStorage" removed).
    *   Fixed G7 scan false positives (.next type files excluded from Stripe audit).
*   **Audit**: `src/` directory is the only source of truth for security scans.

## 📍 5. Status: COMPLETED (Phase 1 Identity Polish)
1.  **Studio Content**: 100% established with **Bad Printer** focus (Gifu-based).
2.  **Identity Relocation**: Gifu coordinates and brand story fully integrated.
3.  **The Pillars (Final Manifest)**:
    1.  **Comfort** (DTG print for Zero touch feeling)
    2.  **Quality** (7.4oz premium heavyweight focus)
    3.  **Authenticity** (Authorized Bad Printer reseller)
    4.  **Identity** (Small-studio, hand-dispatched craft)
    5.  **Archive** (Downloaded from digital to physical)
4.  **Responsive UI Protocol**:
    *   Pillars use a **"Jump" Breakpoint** at `lg` (1024px).
    *   Above 1024px: High-fidelity row interaction (right-justified).
    *   Below 1024px: Stable stack interaction (left-aligned) to prevent text clipping.
5.  **Branding Standard**: **Bad Printer** is always formatted as `font-black text-white whitespace-nowrap` for maximum visual contrast.

---
**📍 Memory Note for Next Agent:**
Dark Factory is a **Gifu-based studio**. All references to "Site & Design" or "Tokyo" are purged. The current identity is a **Premium Streetwear Reseller** center for **Bad Printer**.
_Recent Updates:_ Product page typography has been optimized. Fluid typography on product titles now uses `h2` with `text-balance break-normal` rather than `break-words` to prevent midline hyphenation on narrow mobile views. Column-breaking threshold was delayed from `md` to `lg` (1024px) to avoid unreadable layout squeezing on standard tablets. The Navbar spacing was properly bounded to prevent horizontal scrollbars on 375px screens.

**Focus for Next Run:**
*   Monitor Stripe test transactions and fulfillment logs in Supabase.
*   Monitor layout integrity on any new pages, retaining the strict `text-balance break-normal` policy for heavy bold typographic headings.
*   All future content additions must use the `font-black text-white whitespace-nowrap` standard for brand name occurrences.
*   Check `src/lib/pricing.ts` for all JPY tier updates.
