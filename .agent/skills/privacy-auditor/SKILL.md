# Skill: privacy-auditor
## Dedicated Specialist: Sub-A3
## Domain: Privacy & Compliance (APPI, GDPR, PII)

### Inputs:
- workflow_description
- data_collected[]

### Output Specs:
```json
{ "compliant": true, "violations": [], "fix_spec": "" }
```

### Rule:
- **APPI consent UI required** before any PII collection.
- No PII in logs or automation pipelines.
