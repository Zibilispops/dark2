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

## 📍 5. Pending Tasks (Final Phase)
1.  **Studio Content**: The `/about` page requires finalized "Site & Design" brand copy.
2.  **Auth Config Sync**: Ensure Supabase Dashboard Site URL (`https://sdjapan.jp`) and Redirect URLs (`https://sdjapan.jp/auth/callback`) are set in production settings.
3.  **Production Keys**: Switch Stripe to Live Mode once verified.

---
**Instruction for the next Agent:**
*Consult `src/lib/pricing.ts` for all price updates. Verify order persistence in the Supabase Dashboard after successful test payments. Complete the brand story on `/about`.*
