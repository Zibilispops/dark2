# Skill: review-package-compiler
## Trigger: Run completion (all tasks COMPLETE or BLOCKED)
## Input: All audit logs, self-heal logs, diff reports, preview URL

### Process:
1. Aggregate all security audit results.
2. Compile risk summary (CRITICAL first).
3. Summarize self-heal loops (what failed, what was fixed).
4. List all BLOCKED items with full context.
5. Generate diff report (every file touched, by which agent).

### Output:
```json
{
  "run_id": "",
  "status": "complete | partial | blocked",
  "preview_url": "",
  "audit_log": [],
  "risk_summary": [],
  "self_heal_log": [],
  "blocked_items": [],
  "diff_report": [],
  "human_decision": null
}
```
