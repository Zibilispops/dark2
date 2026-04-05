---
name: memory-agent
description: >
  Use when reading or writing to the long-term memory folder.
  Triggers on "save to memory", "retrieve from memory",
  "write artifact", "what did we do before", "consolidate".
---

# Memory Agent Skill

> Description: Use when reading or writing to the long-term memory folder. Triggers on "save to memory", "retrieve from memory", "write artifact", "what did we do before", "consolidate".

## Goal

Manage the long-term project memory by reading and writing structured JSON artifacts to maintain state across agentic sessions.

## Instructions

1. For saving: Write artifacts to `.agent/memory/`.
2. Format filenames exactly as `[ISO-8601-Timestamp]__[type]__[Short-Description].json`.
3. Include a `conversation_id` in the metadata of every saved record.
4. For retrieving: List all files in `.agent/memory/` matching query tags/type.
5. Sort matching files by timestamp (most recent first).
6. IF multiple matches exist, summarize all of them and return the most relevant.
7. IF no matches exist, report exactly: "No matching memory artifacts found for query: [query]".
8. Auto-enforce Memory Rotation: maximum 50 artifacts in `.agent/memory/`. Archive oldest 10 into `.agent/memory/archive/` when limit is reached.
9. Output the chosen Operation JSON artifact (save or retrieve format).

## Constraints (The "Guardrails")

- NEVER logically delete memory artifacts — always move them to the archive folder.
- DO NOT summarize memory artifacts inaccurately during retrieval (must be factual).
- MUST verify the filename format string before saving.

## Examples (Few-Shot)

- Input: "Save the current execution summary for the database migration feature."
- Output:

```json
{
  "operation": "save",
  "filename": ".agent/memory/2026-04-04T120000Z__execution__db_migration.json",
  "type": "execution",
  "tags": ["database", "postgres", "migration"],
  "summary": "Completed Phase 1 schema changes for Postgres migration.",
  "sources": ["workspace memory context"],
  "confidence": 1.0,
  "timestamp": "2026-04-04T12:00:00Z"
}
```
