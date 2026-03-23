---
description: Run a full security audit against Gates G1-G8
---

# Security Audit Workflow

Run this workflow to audit the Dark Factory codebase against all 8 security gates.

## Steps

// turbo-all

1. **G1/G2 — XSS Prevention**: Scan for `eval(`, `innerHTML`, and `dangerouslySetInnerHTML` in `src/`.
   ```bash
   rg -n "eval\(|innerHTML|dangerouslySetInnerHTML" src/ --include "*.ts" --include "*.tsx" || echo "✅ G1/G2 PASS"
   ```

2. **G3 — Input Validation**: Confirm all API route `POST` handlers use Zod (or equivalent) validation.
   ```bash
   rg -n "z\.object|z\.array|z\.string" src/app/api/ --include "*.ts" || echo "⚠️ G3: No Zod schemas found in API routes"
   ```

3. **G4 — PII in Logs**: Search for email addresses, names, or passwords being logged.
   ```bash
   rg -n "console\.(log|error|warn).*email|console\.(log|error|warn).*password|console\.(log|error|warn).*name" src/ --include "*.ts" --include "*.tsx"
   ```

4. **G5 — Secret Isolation**: Ensure no secret keys are exposed via `NEXT_PUBLIC_*`.
   ```bash
   rg -n "NEXT_PUBLIC_.*SECRET|NEXT_PUBLIC_.*PRIVATE|NEXT_PUBLIC_.*SERVICE_ROLE" src/ .env* || echo "✅ G5 PASS"
   ```

5. **G6 — No localStorage/sessionStorage for Auth**: Scan for storage-based token persistence.
   ```bash
   rg -n "localStorage|sessionStorage" src/ --include "*.ts" --include "*.tsx" || echo "✅ G6 PASS"
   ```

6. **G7 — Stripe Webhook Verification**: Confirm `constructEvent` is used in every webhook handler.
   ```bash
   rg -n "constructEvent" src/app/api/webhooks/ --include "*.ts" || echo "⚠️ G7: No constructEvent found"
   ```

7. **G8 — Idempotency**: Check for duplicate-prevention logic in webhook handlers.
   ```bash
   rg -n "idempotency|existingOrder|maybeSingle|23505|duplicate" src/app/api/webhooks/ --include "*.ts" -i || echo "⚠️ G8: No idempotency logic found"
   ```

8. **Rate Limiting Check**: Verify if any rate-limiting middleware exists.
   ```bash
   rg -rn "rate.?limit" src/ --include "*.ts" --include "*.tsx" -i || echo "⚠️ No rate limiting detected on API routes"
   ```

9. **JPY Currency Check**: Verify that JPY amounts are NOT divided by 100 (zero-decimal currency).
   ```bash
   rg -n "/ 100|/100" src/lib/email.ts src/app/api/ --include "*.ts" || echo "✅ No zero-decimal division found"
   ```

10. **Build verification**: Run a production build to catch type errors.
    ```bash
    npx next build 2>&1 | tail -10
    ```

## Output
Generate a markdown audit report with a table of gate results, findings, and recommendations. Save to the artifacts directory.
