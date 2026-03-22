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

## 📍 5. Status: COMPLETED (Phase 1 Identity)
1.  **Studio Content**: 100% established with "Bad Printer Reseller" focus (Gifu-based).
2.  **Identity Relocation**: Gifu coordinates and brand copy fully integrated (Tokyo/S&D references removed).
3.  **Fluid UI System**: clamp-based fluid typography and spacing implemented sitewide.
4.  **Pillar Interaction**: Fully interactive "Reveal" system with ghostless grid-stacking.
5.  **Navbar Stability**: Fluid gaps with fixed font-size for logo and links.

---
**📍 Memory Note for Next Agent:**
Dark Factory is now a **Gifu-based studio**. All references to "Site & Design" or "Tokyo" have been purged. The current focus is a **Premium Streetwear Reseller** identity for **Bad Printer**. The UI uses a strictly **Fluid Design System** (typography-clamp and spacing-clamp in `globals.css`). The "Pillars" section on `/about` expects left-justified hover interactions. Everything is live at `sdjapan.jp`.
*Consult `src/lib/pricing.ts` for all price updates. Verify order persistence in the Supabase Dashboard after successful test payments. Complete the brand story on `/about`.*
