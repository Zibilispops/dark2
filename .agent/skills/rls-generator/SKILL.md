---
name: rls-generator
description: Crafts PostgreSQL Row Level Security (RLS) policies for all new Supabase tables.
---
# Skill: rls-generator

## Goal
Fortify database access by ensuring every single new table enforces Row Level Security via explicit SQL policies.

## Instructions
1. Receive `table_name`, `columns[]`, and required `access_rules`.
2. Generate the exact raw SQL for enabling RLS on the table.
3. Provide the CREATE POLICY statement matching the access rules.
4. Output JSON containing `sql_policy`, `explanation`, and `risk_notes[]`.

## Guardrails
- New Supabase tables MUST include an RLS policy in the same PR.
- Never grant public write access unless explicitly requested specifically by the orchestrator for public non-sensitive tables.

## Few-Shot Example
**Input:** table: `profiles`, rules: "Users can update only their own row"
**Output:**
```json
{
  "sql_policy": "ALTER TABLE profiles ENABLE ROW LEVEL SECURITY; CREATE POLICY \"update_own\" ON profiles FOR UPDATE USING (auth.uid() = id);",
  "explanation": "Forces check against auth.uid()",
  "risk_notes": []
}
```
