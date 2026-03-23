import { products } from '../src/data/products';
import fs from 'fs';

function escapeString(str: string) {
  return str.replace(/'/g, "''");
}

function escapeArray(arr: string[]) {
  // PostgreSQL array literal format: '{"item 1","item 2"}'
  const items = arr.map((s: string) => `"${s.replace(/"/g, '\\"')}"`).join(',');
  return `'{${items}}'`;
}

const sqlLines = products.map(p => {
  return `  ('${p.id}', '${escapeString(p.name)}', '${p.slug}', ${p.price}, '${escapeString(p.description)}', ${escapeArray(p.features)}, '${p.image}', ${escapeArray(p.sizes)})`;
});

const sql = `
-- Optional: Clear existing data to prevent duplicate key errors if run multiple times
DELETE FROM public.products;

INSERT INTO public.products (id, name, slug, price, description, features, image, sizes) VALUES
${sqlLines.join(',\n')};
`;

try {
  fs.mkdirSync('supabase/migrations', { recursive: true });
  fs.writeFileSync('supabase/migrations/seed_products.sql', sql);
  console.log('Successfully generated supabase/migrations/seed_products.sql');
} catch (e) {
  console.error('Failed to generate sql:', e);
}
