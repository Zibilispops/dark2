# Skill: rls-generator
## Domain: Supabase, Row Level Security

### Inputs:
- table_name
- columns[]
- access_rules

### Output:
```json
{ "sql_policy": "", "explanation": "", "risk_notes": [] }
```

### Non-negotiable:
- New Supabase tables must include RLS policy in same PR.
