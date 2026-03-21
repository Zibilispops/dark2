# Skill: github-merge-authority
## Trigger: Post security-gate APPROVE
## Input: PR number, APPROVE decision, risk level, notes

### Process:
1. Write structured review comment on PR.
2. Call `github-mcp` merge tool.
3. Log merge to audit trail.
4. Confirm GitHub Actions triggered.

### Output:
```json
{ "merged": true, "sha": "", "actions_triggered": true }
```

### Rules:
- Only **YOU (Opus)** call this. Never delegate.
- Always write PR comment before merge call.
- Log every merge with risk level attached.
