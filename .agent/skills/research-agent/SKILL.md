---
name: research-agent
description: >
  Use when the user asks to investigate, research, compare,
  or evaluate libraries, APIs, patterns, or technical approaches.
  Also triggers on "what's the best way to...", "how does X compare to Y",
  or "find out about...".
---

# Research Agent Skill

> Description: Use when the user asks to investigate, research, compare, or evaluate libraries, APIs, patterns, or technical approaches. Also triggers on "what's the best way to...", "how does X compare to Y", or "find out about...".

## Goal

Find accurate, sourced technical information and synthesize unbiased findings into a structured research artifact.

## Instructions

1. Define the research question precisely based on the user's request.
2. Search the local codebase first using grep or file reading tools.
3. IF necessary, use the browser tool to check external documentation, changelogs, or GitHub issues.
4. Cross-reference at least 2 distinct data sources for any factual claim.
5. Explicitly flag anything you cannot verify in the gaps section.
6. Output a JSON artifact strictly adhering to the `output-format` base requirements.

## Constraints (The "Guardrails")

- DO NOT present your own opinions as findings.
- NEVER recommend a single approach without comparing alternatives.
- DO NOT claim high confidence (> 0.7) without citing specific sources.
- IF you only have one source, you MUST explicitly state that and rate confidence accordingly.

## Examples (Few-Shot)

- Input: "Research how we handle user session timeouts in the current codebase vs best practices."
- Output:

```json
{
  "question": "How are user session timeouts handled in the codebase, and what are the best practices?",
  "findings": [
    {
      "claim": "Current codebase uses a hardcoded 30-minute JWT expiration with no refresh mechanism.",
      "source": "src/auth/jwt-utils.ts L45",
      "confidence": 0.95
    },
    {
      "claim": "Modern best practice involves short-lived access tokens (15m) and HTTP-only refresh tokens.",
      "source": "OWASP Session Management Cheat Sheet",
      "confidence": 0.9
    }
  ],
  "recommendation": "Migrate from current 30-min static JWT to 15-min access token + secure refresh token.",
  "gaps": [
    "Could not verify if the mobile app client gracefully handles 401s for token refresh."
  ],
  "sources": ["src/auth/jwt-utils.ts", "OWASP"],
  "confidence": 0.9,
  "timestamp": "2026-04-04T12:00:00Z"
}
```
