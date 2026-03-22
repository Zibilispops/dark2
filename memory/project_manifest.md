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
*   **Payments (Stripe):** Currently in **BYPASS MODE**. 
    *   `src/components/Cart.tsx`: `handleCheckout` redirects directly to `/success`. 
    *   To re-enable, revert to the Stripe API call in the checkout handler.
*   **Email (Resend):** `src/lib/email.ts` is implemented. Requires `RESEND_API_KEY`.
*   **CI/CD:** GitHub Actions `.github/workflows/ci.yml`. Enforces **Gates G1-G8** (Linting, Security Scanning, Build check).

---

## ⚡ 2. Current Architecture Logic
*   **Cart Logic:** `src/context/CartContext.tsx` uses a `cartKey` (`productId-size`). Users can add the same product in multiple sizes as separate items.
*   **Custom Cursor:** `src/components/CustomCursor.tsx` provides a dual-element lerp cursor. It is injected in `layout.tsx`.
*   **Theme Tokens:** Colors defined in `globals.css`. Primary accent: `#cdff00`.
*   **Admin Access:** `/admin` dashboard exists. Authenticated via `ADMIN_SECRET` env var as a bearer token for `/api/admin/orders`.

---

## 📍 3. Current Live State
*   **Deployment:** [dark2-chi.vercel.app](https://dark2-chi.vercel.app)
*   **Branch Tracking:** Production deploys from `main`. 
*   **G4 Security Compliance:** No sensitive PII in logs or Supabase metadata.
*   **Gate Verification:** All 8 security gates are passed.

---

## ✅ 4. Immediate Next Steps / TODO
1.  **Stripe Production:** Re-enable Stripe in `Cart.tsx` and confirm `STRIPE_WEBHOOK_SECRET` is revealing in Vercel.
2.  **Product Assets:** Create real images for products `dtg-004` through `dtg-006` in `src/data/products.ts`.
3.  **About Page:** Flush out `/about` (Studio) with the "Dark Factory" vision.
4.  **Auth:** Implement Supabase Auth for persistent accounts (linked via email in `orders` table).

---
**Instruction for the next Agent:** 
*Begin by verifying the current env vars in Vercel and check `src/components/Cart.tsx` to understand the checkout bypass logic.*
