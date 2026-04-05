---
name: checkout-designer
description: Designs secure, multi-step checkout flows and visual interfaces using Stripe Elements.
---
# Skill: checkout-designer

## Goal
Architect and produce robust, compliant, and user-friendly multi-step checkout interfaces without handling raw card data.

## Instructions
1. Receive `cart_structure` and `payment_method` strategy.
2. Outline the sequence of `flow_steps[]` for the UI.
3. Identify `data_emitted[]` at each step.
4. Define `security_boundaries[]` to ensure sensitive data is not exposed.

## Guardrails
- Never store or process raw credit card data.
- Must exclusively utilize Stripe Elements or Stripe Checkout.

## Few-Shot Example
**Input:** cart size 3 items, payment_method: credit_card
**Output:**
- flow_steps: ["cart_review", "stripe_payment_element", "confirmation"]
- data_emitted: ["order_id", "email"]
- security_boundaries: ["PCI_compliance_delegated_to_stripe"]
