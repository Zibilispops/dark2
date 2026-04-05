---
name: github-pr-creator
description: Automates the creation of GitHub Pull Requests, associating them with the appropriate security reports required by the pipeline.
---
# Skill: github-pr-creator

## Goal
Standardize and automate pulling feature branches into PRs while ensuring all necessary security reports and CI markers are attached.

## Instructions
1. Take the current feature branch and the target branch.
2. Draft a PR description including references to security reports and browser test results.
3. Open the PR using GitHub MCP.

## Guardrails
- Never push directly to `main`.
- All PRs must contain a placeholder or an attached Agent A security report.

## Few-Shot Example
**Input:** branch: `feat/checkout-ui`
**Output:** PR created with description "Feat: Checkout UI updates. Attached: Agent A Security Report."
