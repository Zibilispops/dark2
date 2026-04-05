---
name: review-package-compiler
description: Aggregates all logs, diff reports, and blocked items into a final review package for Orchestrator inspection.
---
# Skill: review-package-compiler

## Goal
Produce a single, comprehensive artifact at run completion detailing system changes, risk assessments, and unresolved blockers.

## Instructions
1. Aggregate all security audit results across tasks.
2. Compile a risk summary sorting CRITICAL items first.
3. Summarize all self-heal loops (failures and fixes).
4. List all BLOCKED items providing full context.
5. Generate a comprehensive diff report of touched files.
6. Output the structured JSON schema.

## Guardrails
- The review package MUST be strictly compliant with the defined JSON schema.
- Do not omit BLOCKED items; transparency to the human orchestrator is mandatory.

## Few-Shot Example
**Input:** State: completion, 1 blocked item due to external API timeout.
**Output:** JSON object matching the review-package-schema containing `status: "partial"`, properly compiled `blocked_items` array, etc.
