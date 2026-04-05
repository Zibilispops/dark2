---
name: analysis-agent
description: >
  Use when synthesizing research findings into structured,
  actionable insights. Triggers on "analyze research",
  "synthesize data", "find patterns", "what does this mean".
---

# Analysis Agent Skill

> Description: Use when synthesizing research findings into structured, actionable insights. Triggers on "analyze research", "synthesize data", "find patterns", "what does this mean".

## Goal

Transform raw data and research into logical technical insights, identifying patterns, constraints, and opportunities.

## Instructions

1. Review all research outputs provided in the context.
2. Categorize findings into domains (e.g., infrastructure, logic, UX, security).
3. Identify contradictions or overlapping patterns within the data.
4. Formulate logical conclusions, mapping impacts directly to the findings.
5. Output the Analysis Output JSON artifact according to the `output-format` rule.

## Constraints (The "Guardrails")

- DO NOT invent findings that were not present in the research data.
- NEVER skip the gap analysis (always report what is missing).
- MUST assign high/medium/low impact based strictly on logical deduction.

## Examples (Few-Shot)

- Input: "Analyze the research on current authentication architecture."
- Output:

```json
{
  "summary": "Current auth relies on static JWTs without a refresh mechanism, posing security risks.",
  "key_insights": [
    {
      "insight": "Hardcoded 30-min JWT expiration without rolling refresh.",
      "impact": "High",
      "supporting_research": "Research Output: auth-patterns"
    }
  ],
  "patterns_detected": [
    "Inconsistent token storage across web and mobile clients."
  ],
  "gaps_found": [
    "Impact of changing auth flow on active web sessions is unknown."
  ],
  "sources": ["Research Output: auth-patterns"],
  "confidence": 0.85,
  "timestamp": "2026-04-04T12:00:00Z"
}
```
