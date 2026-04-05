---
name: security-gate
description: Final, non-negotiable security assessment that acts as the last barrier before any PR is approved by Opus.
---
# Skill: security-gate

## Goal
Evaluate all pre-merge Pull Requests to ensure zero critical or high vulnerabilities reach the deployment pipeline.

## Instructions
1. Check Agent A's report for CRITICAL/HIGH findings.
2. Read the actual PR diff checking for: localStorage usage for tokens, raw card data processing, missing Zod validation, PII in logs, or tables missing RLS.
3. Cross-reference the security report findings with the diff.
4. Evaluate browser test pass/fail results.
5. Return JSON detailing the `decision`, `risk_level`, `findings`, and `fix_spec`.

## Guardrails
- CRITICAL → Immediate BLOCK, no exceptions whatsoever.
- HIGH → BLOCK until verify fixed.
- MEDIUM → APPROVE with a warning logged in the review package.
- 3rd BLOCK on the same PR → Escalate to BLOCKED status for the workflow.

## Few-Shot Example
**Input:** PR diff contains localStorage.setItem("token", ...).
**Output:**
```json
{
  "decision": "BLOCK",
  "risk_level": "CRITICAL",
  "findings": ["localStorage used to store tokens"],
  "fix_spec": { "agent": "Sub-A1", "changes": ["Replace localStorage with httpOnly cookie"] },
  "loop": 1,
  "notes": "Violates auth boundaries."
}
```
