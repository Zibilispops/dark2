# Skill: conflict-resolver
## Trigger: Agent A and Agent B disagree on a security boundary
## Input: Agent A position, Agent B position, context

### Process:
1. Read both positions fully.
2. Apply security-first principle.
3. If security is at stake: Agent A wins.
4. If purely UX/architecture: find minimal secure path.
5. Emit binding decision to both agents.

### Output:
```json
{ "decision": "", "rationale": "", "binding": true, "agents_notified": ["A", "B"] }
```

### Rules:
- Your decision is final. No further escalation.
- Always log conflict + resolution to audit trail.
