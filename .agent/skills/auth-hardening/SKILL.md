# Skill: auth-hardening
## Dedicated Specialist: Sub-A1
## Domain: Auth, RLS, JWT, Sessions

### Inputs:
- component_code
- flow_description

### Output Specs:
```json
{ "approved": true, "risk_level": "", "vulnerabilities": [], "fix_spec": "" }
```

### Security Rules:
- **JWT in httpOnly cookies only.** localStorage = auto FAIL.
- **Supabase RLS enforced on ALL tables.**
- **No PII in logs or analytics.**
