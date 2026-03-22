# 🚀 Handover Protocol: Dark Factory v4

**Context for the next Assistant:**
This is a high-fidelity e-commerce platform ("Dark Factory") built with a cyber-minimalist aesthetic. We have completed the core infrastructure, CI/CD pipeline, and a polished frontend. 

---

## 🛠 1. Tech Stack & Integration Specs
*   **Framework:** Next.js 16+ (App Router). See `src/app`.
*   **Styling:** Tailwind CSS V4. See `globals.css` (Scanline overlay, Custom Cursor).
*   **DB (Supabase):** 
    *   Table: `orders` (Columns: `id`, `user_id`, `total_cents`, `currency`, `status`, `metadata`, `created_at`).
    *   Policy: RLS enabled. Users can view their own; service role can insert.
*   **Collection Cleanup:** Removed "Alcoholdefense Edition" and original legacy items. Total collection size: **43 high-fidelity designs**.
*   **Currency & Dynamic Pricing**: 
    *   Primary Currency: **JPY (¥)**.
    *   **Dynamic Tier Protocol**: Set prices to **¥4,980** (XS, S, M, L) and **¥5,480** (XL, XXL). 
    *   `src/lib/pricing.ts` is the central source of truth for these tiers.
*   **Payments (Stripe):** Currently in **BYPASS MODE**. 
    *   `src/components/Cart.tsx`: `handleCheckout` redirects directly to `/success`. 
    *   To re-enable, revert to the Stripe API call in the checkout handler.
    *   `api/checkout/route.ts` is fully updated for size-aware JPY pricing.
*   **UI Features:** Added `ProductImage` component supporting front/back image toggle.
*   **Auth (Supabase):**
    *   `@supabase/ssr` for cookie-based sessions (Gate G6 compliant — no localStorage).
    *   Middleware at `src/middleware.ts` refreshes sessions on every request.
    *   Login (`/login`), Register (`/register`), Account (`/account`) pages.
    *   Auth callback at `/auth/callback` handles email verification.
    *   `AuthContext` provides `user`, `loading`, `signOut` globally.
    *   Navbar is auth-aware: shows "Account" when logged in, "Login" when logged out.
*   **Email (Resend):** `src/lib/email.ts` is implemented. Requires `RESEND_API_KEY`.
*   **CI/CD:** GitHub Actions `.github/workflows/ci.yml`. Enforces **Gates G1-G8**.

---

## ⚡ 2. Current Architecture Logic
*   **Cart Logic:** `src/context/CartContext.tsx` uses a `cartKey` (`productId-size`). Users can add the same product in multiple sizes as separate items.
*   **Product Gallery:** `src/components/ProductImage.tsx` handles front/back transitions on hover/click.
*   **Auth Flow:** `src/lib/supabase/client.ts` (browser), `src/lib/supabase/server.ts` (server), `src/lib/supabase/middleware.ts` (session refresh). `AuthContext` wraps the app in `layout.tsx`.
*   **Custom Cursor:** `src/components/CustomCursor.tsx` provides a dual-element lerp cursor. It is injected in `layout.tsx`.
*   **Theme Tokens:** Colors defined in `globals.css`. Primary accent: `#cdff00`.

---

## 📍 3. Current Live State
*   **Deployment:** [dark2-chi.vercel.app](https://dark2-chi.vercel.app) (Automatic deploy from `main` via GH Actions).
*   **Branch Tracking:** Production deploys from `main`. 
*   **G4 Security Compliance:** No sensitive PII in logs or Supabase metadata.
*   **G6 Compliance:** Auth tokens stored in httpOnly cookies via `@supabase/ssr`. Zero localStorage usage.
*   **Gate Verification:** G1-G8 gates passed.

---

## ✅ 4. Immediate Next Steps / TODO
1.  **Stripe Production:** Re-enable Stripe in `Cart.tsx` and confirm `STRIPE_WEBHOOK_SECRET` is set in Vercel.
2.  **Supabase Config:** Set the Site URL and redirect URLs in Supabase Auth settings for production email verification.
3.  **About Page:** Flush out `/about` (Studio) with the "Dark Factory" vision.

---
**Instruction for the next Agent:** 
*Verify Supabase Auth config (Site URL, Redirect URLs). Test `/login` → `/register` → email confirmation → `/account` flow. Then proceed to Stripe re-activation.*
