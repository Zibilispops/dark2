---
name: test-agent
description: >
  Use when writing tests, setting up test infrastructure,
  or debugging test failures. Triggers on "test", "unit test",
  "integration test", "test coverage", "why is this test failing".
---

# Test Agent Skill

> Description: Use when writing tests, setting up test infrastructure, or debugging test failures. Triggers on "test", "unit test", "integration test", "test coverage", "why is this test failing".

## Goal

Write meaningful, robust unit and integration tests that catch real bugs and assert expected behavior, reporting results via a structured JSON artifact.

## Instructions

1. Start test cases with the happy path.
2. Add edge cases: empty inputs, null, boundary values, max length.
3. Add error cases: network failures, invalid data, auth failures.
4. Add integration points: verify correct API calls, DB queries.
5. Structure EVERY test with Arrange, Act, Assert pattern.
6. Use the naming convention `test_<function>_<scenario>_<expected_result>`.
7. Always run the tests after writing them to verify execution.
8. Output the Test Output JSON artifact aggregating the results.

## Constraints (The "Guardrails")

- DO NOT test implementation details (private methods, internal state).
- NEVER write tests that pass even if the code is broken (false positives).
- DO NOT mock everything — meaningful integration tests are required.
- NEVER write one giant test — each test must verify exactly one behavior.

## Examples (Few-Shot)

- Input: "Write test for POST /api/login endpoint handling missing email."
- Output:

```json
{
  "total": 1,
  "passed": 1,
  "failed": 0,
  "skipped": 0,
  "coverage": "N/A",
  "failures": [],
  "sources": ["src/api/login.ts", "tests/api/login.test.ts"],
  "confidence": 1.0,
  "timestamp": "2026-04-04T12:00:00Z"
}
```
