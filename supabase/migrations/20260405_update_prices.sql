-- Migration: update product base prices to match productPrices overrides
-- XL/XXL surcharge (+¥500) is applied at checkout/display layer on top of these base prices
-- Run: supabase db push  OR execute directly in Supabase SQL editor

UPDATE products SET price = 5880 WHERE slug IN ('cyborg-girl', 'ramenrider', 'iceskull');
UPDATE products SET price = 5780 WHERE slug IN ('spacecoffe', 'fibonacci', 'digital-battle', 'hit-girl');
UPDATE products SET price = 5680 WHERE slug IN ('breaking-hearts', 'ramenmosnter', 'self', 'einstein1-frame', 'ramendrop');
UPDATE products SET price = 5480 WHERE slug IN ('coffeeoclock', 'fast-food-racer', 'culture', 'silly-devil', 'mundane', 'leisure', 'boy', 'lula-ramen', 'ramen3', 'ultraramen');
UPDATE products SET price = 5280 WHERE slug IN ('bp-ramen', 'chillout', 'fight-to', 'pie', 'ice-scream1', 'ice-scream2', 'ice-scream3', 'icescreamsoft', 'super-cute');
