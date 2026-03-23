export const getPriceBySize = (basePrice: number, size: string): number => {
  const upperSize = size.toUpperCase();
  const base = Number(basePrice) || 0;
  if (upperSize === 'XL' || upperSize === 'XXL') {
    return base + 500;
  }
  return base;
};
