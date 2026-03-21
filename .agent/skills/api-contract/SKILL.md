# Skill: api-contract
## Domain: Zod, API Input Validation

### Inputs:
- route
- method
- expected_inputs[]

### Output Specs:
```json
{ "zod_schema": "", "auth_required": true, "rate_limit": 0, "error_codes": [] }
```

### Rule:
- All API inputs MUST be validated with Zod.
