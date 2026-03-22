export const getPriceBySize = (size: string): number => {
  const upperSize = size.toUpperCase();
  if (upperSize === 'XL' || upperSize === 'XXL') {
    return 5480;
  }
  return 4980;
};
