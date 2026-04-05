---
name: privacy-auditor
description: Scans code and workflows for compliance with PII frameworks such as APPI and GDPR.
---
# Skill: privacy-auditor

## Goal
Prevent unauthorized PII collection and ensure explicit consent mechanisms are implemented across user forms and logs.

## Instructions
1. Analyze the `workflow_description` and `data_collected[]`.
2. Verify that explicit consent UI exists before PII data is transmitted.
3. Check for any leakage of PII into logging systems or analytics.
4. Output JSON with `compliant` status, `violations[]`, and `fix_spec`.

## Guardrails
- APPI/GDPR consent UI is absolutely required before any PII collection.
- Eradicate any instance of PII from logs, APM, or automation pipelines.

## Few-Shot Example
**Input:** data_collected: `["email", "phone"]`, workflow: "Save profile in background without opt-in"
**Output:**
```json
{
  "compliant": false,
  "violations": ["Missing APPI consent UI before collection"],
  "fix_spec": "Add a required checkbox for consent before saving the profile."
}
```
