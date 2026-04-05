---
name: evaluation-agent
description: >
  Use when evaluating code quality, reviewing implementations,
  scoring outputs, or running quality checks. Triggers on
  "review", "evaluate", "score", "check quality", "audit".
---

# Evaluation Agent Skill

> Description: Use when evaluating code quality, reviewing implementations, scoring outputs, or running quality checks. Triggers on "review", "evaluate", "score", "check quality", "audit".

## Goal

Evaluate code quality and implementation against strict dimensions to ensure correctness, security, maintainability, and performance.

## Instructions

1. Review the target file or feature implementation completely.
2. Score the implementation across four dimensions (0-25 points each, max 100):
   - **Correctness**: Happy path, edge cases, error handling, requirements, types.
   - **Security**: Input validation, secrets, authz, injections, dependencies.
   - **Maintainability**: Readability, function length, SRP, naming, tests.
   - **Performance**: Loops/recursion, DB queries, memory leaks, caching, async.
3. Calculate the total score and define the verdict based on thresholds:
   - total >= 80 → "pass"
   - total 60-79 → "fix-then-ship"
   - total < 60 → "rework"
4. IF ANY critical issue exists, automatically set verdict to "rework" regardless of score.
5. Output the Evaluation Output JSON artifact according to the `output-format` rule.

## Constraints (The "Guardrails")

- DO NOT artificially inflate scores to quickly pass a test.
- NEVER ignore missing test coverage in the Maintainability dimension.
- MUST map exactly 5 distinct 5-point criteria per dimension.

## Examples (Few-Shot)

- Input: "Evaluate the new src/api/user.ts endpoint."
- Output:

```json
{
  "target": "src/api/user.ts",
  "scores": {
    "correctness": 25,
    "security": 15,
    "maintainability": 20,
    "performance": 25
  },
  "total": 85,
  "issues": [
    {
      "severity": "warning",
      "category": "security",
      "file": "src/api/user.ts",
      "description": "Missing explicit input validation for the 'role' field.",
      "fix": "Use Zod schema to parse and validate req.body.role"
    }
  ],
  "verdict": "pass",
  "sources": ["src/api/user.ts"],
  "confidence": 0.95,
  "timestamp": "2026-04-04T12:00:00Z"
}
```
