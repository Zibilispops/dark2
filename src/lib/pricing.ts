export const getPriceBySize = (basePrice: number, size: string): number => {
  const upperSize = size.toUpperCase();
  const base = Number(basePrice) || 0;
  if (upperSize === 'XL' || upperSize === 'XXL') {
    return base + 500;
  }
  return base;
};

// Returns the highest price for a product (used as the anchor/default display price)
// so smaller sizes feel like a pleasant surprise when selected.
export const getMaxPrice = (basePrice: number, sizes: string[]): number => {
  const base = Number(basePrice) || 0;
  const hasLarge = sizes.some(s => s.toUpperCase() === 'XL' || s.toUpperCase() === 'XXL');
  return hasLarge ? base + 500 : base;
};
