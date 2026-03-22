export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "dtg-001",
    name: "Vanguard Heavyweight Tee",
    slug: "vanguard-heavyweight-tee",
    price: 64,
    description: "Premium oversized fit constructed from 300GSM heavyweight cotton. Features high-definition DTG chest print with cyber-minimalist detailing.",
    features: [
      "100% GOTS Certified Organic Cotton",
      "Reinforced double-stitch seams",
      "Screen-accurate DTG printing",
      "Sustainable manufacturing in Tokyo"
    ],
    image: "/products/vanguard_tee.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "dtg-002",
    name: "Archive Series Hoodie",
    slug: "archive-series-hoodie",
    price: 120,
    description: "French Terrie construction with acid-wash finish. Minimalist branding on nape. Engineered for the digital vanguard.",
    features: [
      "450GSM Organic French Terry",
      "Dropped shoulders",
      "Hidden side pockets",
      "Distressed hems"
    ],
    image: "/products/archive_hoodie.png",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: "dtg-003",
    name: "Monolith Technical Tote",
    slug: "monolith-technical-tote",
    price: 45,
    description: "Structured heavy canvas with reinforced webbing. Internal compartment for 16\" digital machinery.",
    features: [
      "Water-resistant wax finish",
      "MIL-SPEC webbing",
      "Interior tech divider",
      "Embroidered signature logo"
    ],
    image: "/products/monolith_tote.png",
    sizes: ["ONE SIZE"]
  }
];
