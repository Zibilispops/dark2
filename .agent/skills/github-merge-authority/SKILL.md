---
name: github-merge-authority
description: Executes PR merge operations strictly after successful security-gate approvals.
---
# Skill: github-merge-authority

## Goal
Automate the safe merging of pull requests only after completing all mandatory security validations and obtaining an APPROVE status.

## Instructions
1. Receive `PR number`, `APPROVE decision`, `risk level`, and `notes`.
2. Write a structured review comment on the PR detailing the approval and exact risk level.
3. Call the `github-mcp` merge tool to merge the branch.
4. Log this merge event to the audit trail.
5. Return JSON indicating `merged`, `sha`, and `actions_triggered`.

## Guardrails
- Only YOU (Opus) call this skill. Never delegate.
- Always write a PR comment before triggering the merge call.
- Log every merge with the risk level explicitly attached.

## Few-Shot Example
**Input:** PR #42, APPROVE, LOW risk
**Output:**
```json
{
  "merged": true,
  "sha": "a1b2c3d4",
  "actions_triggered": true
}
```
