# Skill: security-gate
## Trigger: Every PR before merge decision
## Input: PR diff, Agent A report, browser test results

### Process:
1. Check Agent A report for CRITICAL/HIGH findings.
2. Read diff for: localStorage, raw card data, missing Zod, PII in logs, tables without RLS.
3. Cross-reference findings with diff.
4. Evaluate browser test pass/fail.

### Output:
```json
{
  "decision": "APPROVE | BLOCK",
  "risk_level": "LOW | MEDIUM | HIGH | CRITICAL",
  "findings": [],
  "fix_spec": { "agent": "", "changes": [] } | null,
  "loop": n,
  "notes": ""
}
```

### Rules:
- **CRITICAL** → immediate BLOCK, no exceptions.
- **HIGH** → BLOCK until fix verified.
- **MEDIUM** → APPROVE with warning in review package.
- **3rd BLOCK** on same PR → escalate to BLOCKED status.
