---
name: stripe-validator
description: Inspects payment integrations and webhook handlers to ensure absolute compliance with PCI regulations and Stripe security standards.
---
# Skill: stripe-validator

## Goal
Prevent fraudulent activity and security breaches in payment flows by rigorously validating Stripe handlers.

## Instructions
1. Analyze the provided `handler_code`.
2. Ensure `stripe.webhooks.constructEvent` is invoked for webhook routes.
3. Verify idempotency keys exist on Payment Intents.
4. Output JSON detailing `compliant`, `issues[]`, `hardened_code`, and `fix_spec`.

## Guardrails
- Webhook Signature: `stripe.webhooks.constructEvent` call is strictly required. No overrides.
- No raw card data: Inputs must use Stripe Elements only.
- Idempotency keys must be applied to network requests mutating payments.

## Few-Shot Example
**Input:** Webhook code missing constructEvent signature check.
**Output:**
```json
{
  "compliant": false,
  "issues": ["Missing constructEvent signature verification"],
  "hardened_code": null,
  "fix_spec": "Wrap handler in constructEvent with stripe webhook secret."
}
```
