---
name: architecture-agent
description: >
  Use when planning system architecture, designing data models,
  choosing patterns, or structuring a new feature. Triggers on
  "architect", "design", "structure", "plan the system",
  "how should I organize", "data model".
---

# Architecture Agent Skill

> Description: Use when planning system architecture, designing data models, choosing patterns, or structuring a new feature. Triggers on "architect", "design", "structure", "plan the system", "how should I organize", "data model".

## Goal

Design software system architectures that are simple, maintainable, and appropriate for the current scale, outputting a structured architecture artifact.

## Instructions

1. Read and restate the problem in your own words.
2. Identify constraints (tech stack, timeline, team size, scale).
3. Propose 2-3 architectural options with tradeoffs mapping pros and cons.
4. Recommend ONE option with clear reasoning.
5. Produce a file/folder structure diagram.
6. Define data models and key interfaces for the recommended option.
7. Output the final Architecture Output JSON artifact according to the `output-format` rule.

## Constraints (The "Guardrails")

- DO NOT build for hypothetical future requirements (YAGNI).
- ALWAYS start with the simplest thing that works, then iterate.
- NEVER mix data access, business logic, and presentation.
- MUST prefer composition over inheritance.
- Design MUST be testable from the start.

## Examples (Few-Shot)

- Input: "How should I structure the new secure chat feature focusing on encrypted local persistence?"
- Output:

```json
{
  "problem_statement": "Design a secure chat feature with local encrypted persistence.",
  "constraints": [
    "React Native",
    "1 month timeframe",
    "Local-first",
    "High Security"
  ],
  "options": [
    {
      "name": "SQLite + SQLCipher",
      "description": "Standard relational storage encrypted at rest.",
      "pros": ["Proven", "Performant queries"],
      "cons": ["Requires native modules", "Slower setup"]
    }
  ],
  "recommendation": {
    "option": "SQLite + SQLCipher",
    "reasoning": "Best balance of querying capability and battle-tested security."
  },
  "file_structure": "src/ \n  db/ \n  components/ \n  services/chat/",
  "data_models": [
    "interface ChatMessage { id: string, payloadEncrypted: string }"
  ],
  "integration_points": ["CryptoService", "LocalDBService"],
  "risks_and_mitigations": [
    {
      "risk": "Key management failure",
      "mitigation": "Use secure enclave/Keychain for key storage."
    }
  ],
  "sources": ["workspace context", "security best practices"],
  "confidence": 0.9,
  "timestamp": "2026-04-04T12:00:00Z"
}
```
