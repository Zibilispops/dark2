---
name: strategy-agent
description: >
  Use when developing a high-level plan or roadmap based on
  analysis and critique. Triggers on "plan strategy",
  "roadmap", "long-term objectives", "strategic direction".
---

# Strategy Agent Skill

> Description: Use when developing a high-level plan or roadmap based on analysis and critique. Triggers on "plan strategy", "roadmap", "long-term objectives", "strategic direction".

## Goal

Develop a cohesive, multi-phase implementation roadmap based on validated research and analysis.

## Instructions

1. Read and restate the core goal and constraints in your own words.
2. Break the implementation down into sequential phases.
3. Align each phase with existing coding standards and project architecture.
4. Identify required resources, libraries, or specific toolings needed for each phase.
5. Incorporate mitigations for any risks identified by the Critic Agent.
6. Output the Strategy Output JSON artifact according to the `output-format` rule.

## Constraints (The "Guardrails")

- DO NOT create monolithic phases; break tasks into "Small/Medium/Large" execution complexities.
- NEVER schedule interdependent phases in parallel.
- MUST explicitly map mitigated risks back to their preceding critique artifact.

## Examples (Few-Shot)

- Input: "Develop strategy for integrating Stripe payments based on the analysis."
- Output:

```json
{
  "goal": "Integrate Stripe to handle monthly subscriptions.",
  "phases": [
    {
      "phase_name": "Phase 1: Database Schema",
      "objectives": ["Create payments table", "Add stripe_id to users"],
      "dependencies": [],
      "execution_complexity": "Small"
    },
    {
      "phase_name": "Phase 2: Stripe Webhooks",
      "objectives": ["Implement webhook handler", "Verify signatures"],
      "dependencies": ["Phase 1: Database Schema"],
      "execution_complexity": "Medium"
    }
  ],
  "risks_mitigated": [
    "Webhook replay attacks mitigated by signature verification."
  ],
  "resources_required": ["stripe-node library", "ngrok for local testing"],
  "sources": ["Analysis Output: Stripe vs LemonSqueezy"],
  "confidence": 0.9,
  "timestamp": "2026-04-04T12:00:00Z"
}
```
