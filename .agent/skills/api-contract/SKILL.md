---
name: api-contract
description: Ensures strict API input validation by generating Zod schemas for all defined routes.
---
# Skill: api-contract

## Goal
Enforce strict Zod-based input validation for all API endpoints to guarantee type safety and prevent injection vulnerabilities.

## Instructions
1. Analyze the provided `route`, `method`, and `expected_inputs[]`.
2. Construct a comprehensive Zod schema covering all expected inputs.
3. Return the JSON object containing the `zod_schema`, `auth_required` boolean, `rate_limit` integer, and possible `error_codes[]`.

## Guardrails
- All API inputs MUST be validated with Zod.
- Never fallback to implicit any; always declare explicit Zod types.

## Few-Shot Example
**Input:** route: /api/checkout, method: POST, expected_inputs: ["cart_id"]
**Output:**
```json
{
  "zod_schema": "z.object({ cart_id: z.string().uuid() })",
  "auth_required": true,
  "rate_limit": 50,
  "error_codes": ["400_BAD_REQUEST", "401_UNAUTHORIZED"]
}
```
