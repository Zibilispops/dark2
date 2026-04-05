-- Migration: Dark Factory v4.2 Production Hardening
-- Purpose: Standardize 6.6oz/225 GSM specifications globally across all products
-- Execution: Run this in the Supabase Dashboard -> SQL Editor

BEGIN;

-- 1. Update Product Descriptions
-- Replaces stale "7.4oz Super Heavyweight" with the accurate "6.6oz Heavyweight" text
UPDATE products
SET description = REPLACE(description, '7.4oz Super Heavyweight', '6.6oz Heavyweight')
WHERE description LIKE '%7.4oz Super Heavyweight%';

-- 2. Sync Features Array
-- Overwrites the 'features' array for all DTG tees to the official BAD_PRINTER_FEATURES array
UPDATE products
SET features = '["Heavyweight 6.6 oz (225 GSM)", "15/- Tenshiku Single Jersey · Open-end yarn", "100% Cotton (Solid) · 80/20 Cotton-Poly (Mokugray)", "Double-stitched neckline · Side-seam (Waki-shiyo)", "Zero transparency · Dry, crisp American texture"]'::jsonb
WHERE id LIKE 'dtg-%';

COMMIT;

-- Verification Check (Optional)
SELECT id, slug, description, features FROM products LIMIT 5;
