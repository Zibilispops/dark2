---
name: nextjs-architect
description: Guides the generation of clean, production-ready React components using Next.js 14+ App Router and Tailwind CSS.
---
# Skill: nextjs-architect

## Goal
Ensure all frontend code adheres to robust architectural patterns, utilizing modern Next.js paradigms and Tailwind CSS for scalable UIs.

## Instructions
1. Analyze the requested `component`, `requirements[]`, and `constraints[]`.
2. Generate TypeScript JSX (`tsx_code`) adhering to Next.js App Router rules (e.g. valid 'use client' directives where necessary).
3. Extract and list `metadata` including `pii_fields[]`, `auth_required`, and `security_boundaries[]`.

## Guardrails
- Obey Server and Client component boundaries.
- No direct database fetches in Client components.

## Few-Shot Example
**Input:** component: `Button`
**Output:** tsx_code for a tailwind-styled generic Button, metadata: `{ pii_fields: [], auth_required: false, security_boundaries: [] }`
