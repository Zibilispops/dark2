# Skill: stripe-validator
## Dedicated Specialist: Sub-A2
## Domain: Payments, Stripe, Fraud, Idempotency

### Inputs:
- handler_code

### Output Specs:
```json
{ "compliant": true, "issues": [], "hardened_code": "", "fix_spec": "" }
```

### Non-negotiable:
- **Webhook Signature:** stripe.webhooks.constructEvent call required.
- **No raw card data:** Stripe Elements only.
- **Idempotency keys** must be used for payment intents.
