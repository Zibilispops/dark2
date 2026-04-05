---
name: auth-hardening
description: Validates and hardens authentication boundaries including RLS, JWT, and Session management.
---
# Skill: auth-hardening

## Goal
Verify that all authentication flows and database access mechanisms follow strict security isolation rules and do not leak sensible tokens.

## Instructions
1. Review the `component_code` and `flow_description`.
2. Inspect for JWT/token storage practices.
3. Validate Supabase row-level security (RLS) enforcement.
4. Output a JSON containing `approved` boolean, `risk_level`, `vulnerabilities[]` array, and a `fix_spec` string if applicable.

## Guardrails
- JWT in httpOnly cookies only. localStorage = auto FAIL.
- Supabase RLS MUST be enforced on ALL tables.
- No PII in logs or analytics.

## Few-Shot Example
**Input:** Session save flow using localStorage.
**Output:**
```json
{
  "approved": false,
  "risk_level": "CRITICAL",
  "vulnerabilities": ["JWT stored in localStorage"],
  "fix_spec": "Migrate token storage to httpOnly cookies and remove localStorage calls."
}
```
