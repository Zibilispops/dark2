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
*   **Passed**: Perfect 8/8 score on full manual security audit (`/audit-security` workflow created).
*   **G1/G2**: 100% clean of `eval`, `innerHTML`, and `dangerouslySetInnerHTML`.
*   **G4 (PII)**: Customer emails are masked in server logs to prevent PII leakage.
*   **G6 (Auth Storage)**: No `localStorage` used. Supabase client architecture unified correctly (`@supabase/ssr` with separate cookie-aware instances for browser and server). 
*   **G7/G8 (Stripe Integrity)**: Webhooks successfully enforce `constructEvent` signature validation and database idempotency checks via `metadata.stripe_session_id`.

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
_Recent Updates:_ 
*   **Security Audit & Stripe Harden (Mar 2026)**: Fixed Stripe absolute image URL construction to prevent 400 Bad Requests. Added webhook idempotency and signature safety to prevent double-fulfillment. Fixed critical "zero-decimal" bug where JPY amounts were incorrectly divided by 100 in confirmation emails (¥4,980 displaying as ¥49.80). 
*   **Supabase Client Architecture (Mar 2026)**: Consolidated clients to prevent Auth Drift. Use `@/lib/supabase.ts` for server-safe backend API calls (no cookies), `@/lib/supabase/client.ts` for browser CSR auth, and `@/lib/supabase/server.ts` for SSR cookie auth.
*   **CI Build Fix (Mar 2026)**: Re-enabled green builds in GitHub Actions by injecting placeholder `NEXT_PUBLIC_*` and `STRIPE_*` variables during the build phase to prevent non-null assertions from crashing Next.js.
*   **Navbar Logo Fix (Mar 2026):** "DARK" and "FACTORY" were rendering at inconsistent visual weights during resize. Root cause: sub-pixel rendering drift caused by flex/gap layout. Fixed by: removing flex/gap in favour of inline flow with `&nbsp;`, explicitly inheriting font weights via style props, and moving hover brightness to the parent link.

**Focus for Next Run:**
*   Monitor Stripe test transactions and fulfillment logs in Supabase (fully hardened now).
*   Monitor layout integrity on any new pages, retaining the strict `text-balance break-normal` policy for heavy bold typographic headings.
*   All future content additions must use the `font-black text-white whitespace-nowrap` standard for brand name occurrences.
*   Check `src/lib/pricing.ts` for all JPY tier updates.
