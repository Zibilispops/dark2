export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  backImage?: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    "id": "dtg-001",
    "name": "Vanguard Heavyweight Tee",
    "slug": "vanguard-heavyweight-tee",
    "price": 64,
    "description": "Premium oversized fit constructed from 300GSM heavyweight cotton. Features high-definition DTG chest print with cyber-minimalist detailing.",
    "features": [
      "100% GOTS Certified Organic Cotton",
      "Reinforced double-stitch seams",
      "Screen-accurate DTG printing",
      "Sustainable manufacturing in Tokyo"
    ],
    "image": "/products/vanguard_tee.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-002",
    "name": "Archive Series Hoodie",
    "slug": "archive-series-hoodie",
    "price": 120,
    "description": "French Terry construction with acid-wash finish. Minimalist branding on nape. Engineered for the digital vanguard.",
    "features": [
      "450GSM Organic French Terry",
      "Dropped shoulders",
      "Hidden side pockets",
      "Distressed hems"
    ],
    "image": "/products/archive_hoodie.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-003",
    "name": "Monolith Technical Tote",
    "slug": "monolith-technical-tote",
    "price": 45,
    "description": "Structured heavy canvas with reinforced webbing. Internal compartment for 16\" digital machinery.",
    "features": [
      "Water-resistant wax finish",
      "MIL-SPEC webbing",
      "Interior tech divider",
      "Embroidered signature logo"
    ],
    "image": "/products/monolith_tote.png",
    "sizes": [
      "ONE SIZE"
    ]
  },
  {
    "id": "dtg-004",
    "name": "Cyborg Girl Series",
    "slug": "cyborg-girl-series",
    "price": 68,
    "description": "Limited edition DTG print featuring the 'Cyborg Girl' archival artwork. Heavyweight 300GSM cotton tee with high-definition cybernetic details across the front and back.",
    "features": [
      "300GSM Heavyweight Jersey",
      "High-definition cybernetic DTG print",
      "Dual-sided 'Frente & Costa' layout",
      "Cyber-minimalist Tokyo aesthetic"
    ],
    "image": "/products/cyborg_girl_front.png",
    "backImage": "/products/cyborg_girl_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-005",
    "name": "Digital Battle Series",
    "slug": "digital-battle-series",
    "price": 72,
    "description": "The 'Digital Battle' series explores the intersection of kinetic movement and digital aesthetics. Premium oversized fit with high-fidelity front-to-back graphics.",
    "features": [
      "240GSM Organic Slub Cotton",
      "Kinetic glitch DTG printing",
      "Full torso graphic coverage",
      "Dropped shoulder silhouette"
    ],
    "image": "/products/digital_battle_front.png",
    "backImage": "/products/digital_battle_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-006",
    "name": "BP Ramen Concept",
    "slug": "bp-ramen-concept",
    "price": 58,
    "description": "A signature Dark Factory spin on street iconography. Featuring 'BP Ramen' high-res concept art in neon-digital tones.",
    "features": [
      "100% Combed Cotton",
      "Neon-digital print tech",
      "Signature Dark branding on nape",
      "Standard-cut streetwear fit"
    ],
    "image": "/products/bp_ramen_front.png",
    "backImage": "/products/bp_ramen_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-010",
    "name": "Alcoholdefense Edition",
    "slug": "alcoholdefense",
    "price": 64,
    "description": "A premium part of the Alcoholdefense series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/alcoholdefense_front.png",
    "backImage": "/products/alcoholdefense_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-011",
    "name": "Boy Edition",
    "slug": "boy",
    "price": 64,
    "description": "A premium part of the Boy series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/boy_front.png",
    "backImage": "/products/boy_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-012",
    "name": "Bp Ramen Edition",
    "slug": "bp-ramen",
    "price": 64,
    "description": "A premium part of the Bp Ramen series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/bp_ramen_front.png",
    "backImage": "/products/bp_ramen_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-013",
    "name": "Breaking Hearts Edition",
    "slug": "breaking-hearts",
    "price": 64,
    "description": "A premium part of the Breaking Hearts series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/breaking_hearts_front.png",
    "backImage": "/products/breaking_hearts_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-014",
    "name": "Cafésarcasmo Edition",
    "slug": "cafésarcasmo",
    "price": 64,
    "description": "A premium part of the Cafésarcasmo series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/cafésarcasmo_front.png",
    "backImage": "/products/cafésarcasmo_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-015",
    "name": "Chillout Edition",
    "slug": "chillout",
    "price": 64,
    "description": "A premium part of the Chillout series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/chillout_front.png",
    "backImage": "/products/chillout_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-016",
    "name": "Coffeeoclock Edition",
    "slug": "coffeeoclock",
    "price": 64,
    "description": "A premium part of the Coffeeoclock series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/coffeeoclock_front.png",
    "backImage": "/products/coffeeoclock_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-017",
    "name": "Culture Edition",
    "slug": "culture",
    "price": 64,
    "description": "A premium part of the Culture series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/culture_front.png",
    "backImage": "/products/culture_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-018",
    "name": "Cyborg Girl Edition",
    "slug": "cyborg-girl",
    "price": 64,
    "description": "A premium part of the Cyborg Girl series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/cyborg_girl_front.png",
    "backImage": "/products/cyborg_girl_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-019",
    "name": "Digital Battle Edition",
    "slug": "digital-battle",
    "price": 64,
    "description": "A premium part of the Digital Battle series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/digital_battle_front.png",
    "backImage": "/products/digital_battle_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-020",
    "name": "Digitalbattle Edition",
    "slug": "digitalbattle",
    "price": 64,
    "description": "A premium part of the Digitalbattle series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/digitalbattle_front.png",
    "backImage": "/products/digitalbattle_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-021",
    "name": "Einstein1 Frame Edition",
    "slug": "einstein1-frame",
    "price": 64,
    "description": "A premium part of the Einstein1 Frame series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/einstein1_frame_front.png",
    "backImage": "/products/einstein1_frame_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-022",
    "name": "Fast Food Racer Edition",
    "slug": "fast-food-racer",
    "price": 64,
    "description": "A premium part of the Fast Food Racer series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/fast_food_racer_front.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-023",
    "name": "Fibonacci Edition",
    "slug": "fibonacci",
    "price": 64,
    "description": "A premium part of the Fibonacci series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/fibonacci_front.png",
    "backImage": "/products/fibonacci_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-024",
    "name": "Fight To Edition",
    "slug": "fight-to",
    "price": 64,
    "description": "A premium part of the Fight To series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/fight_to_front.png",
    "backImage": "/products/fight_to_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-025",
    "name": "Hit Girl Edition",
    "slug": "hit-girl",
    "price": 64,
    "description": "A premium part of the Hit Girl series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/hit_girl_front.png",
    "backImage": "/products/hit_girl_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-026",
    "name": "Ice Scream1 Edition",
    "slug": "ice-scream1",
    "price": 64,
    "description": "A premium part of the Ice Scream1 series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/ice_scream1_front.png",
    "backImage": "/products/ice_scream1_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-027",
    "name": "Ice Scream2 Edition",
    "slug": "ice-scream2",
    "price": 64,
    "description": "A premium part of the Ice Scream2 series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/ice_scream2_front.png",
    "backImage": "/products/ice_scream2_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-028",
    "name": "Ice Scream3 Edition",
    "slug": "ice-scream3",
    "price": 64,
    "description": "A premium part of the Ice Scream3 series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/ice_scream3_front.png",
    "backImage": "/products/ice_scream3_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-029",
    "name": "Icecream1 Edition",
    "slug": "icecream1",
    "price": 64,
    "description": "A premium part of the Icecream1 series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/icecream1_front.png",
    "backImage": "/products/icecream1_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-030",
    "name": "Icecream2 Edition",
    "slug": "icecream2",
    "price": 64,
    "description": "A premium part of the Icecream2 series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/icecream2_front.png",
    "backImage": "/products/icecream2_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-031",
    "name": "Icescreamsoft Edition",
    "slug": "icescreamsoft",
    "price": 64,
    "description": "A premium part of the Icescreamsoft series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/icescreamsoft_front.png",
    "backImage": "/products/icescreamsoft_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-032",
    "name": "Iceskull Edition",
    "slug": "iceskull",
    "price": 64,
    "description": "A premium part of the Iceskull series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/iceskull_front.png",
    "backImage": "/products/iceskull_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-033",
    "name": "Leisure Edition",
    "slug": "leisure",
    "price": 64,
    "description": "A premium part of the Leisure series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/leisure_front.png",
    "backImage": "/products/leisure_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-034",
    "name": "Lula Ramen Edition",
    "slug": "lula-ramen",
    "price": 64,
    "description": "A premium part of the Lula Ramen series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/lula_ramen_front.png",
    "backImage": "/products/lula_ramen_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-035",
    "name": "Mundane Edition",
    "slug": "mundane",
    "price": 64,
    "description": "A premium part of the Mundane series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/mundane_front.png",
    "backImage": "/products/mundane_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-036",
    "name": "Pie Edition",
    "slug": "pie",
    "price": 64,
    "description": "A premium part of the Pie series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/pie_front.png",
    "backImage": "/products/pie_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-037",
    "name": "Ramen3 Edition",
    "slug": "ramen3",
    "price": 64,
    "description": "A premium part of the Ramen3 series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/ramen3_front.png",
    "backImage": "/products/ramen3_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-038",
    "name": "Ramendrop Edition",
    "slug": "ramendrop",
    "price": 64,
    "description": "A premium part of the Ramendrop series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/ramendrop_front.png",
    "backImage": "/products/ramendrop_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-039",
    "name": "Ramenmosnter Edition",
    "slug": "ramenmosnter",
    "price": 64,
    "description": "A premium part of the Ramenmosnter series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/ramenmosnter_front.png",
    "backImage": "/products/ramenmosnter_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-040",
    "name": "Ramenrider Edition",
    "slug": "ramenrider",
    "price": 64,
    "description": "A premium part of the Ramenrider series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/ramenrider_front.png",
    "backImage": "/products/ramenrider_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-041",
    "name": "Self Edition",
    "slug": "self",
    "price": 64,
    "description": "A premium part of the Self series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/self_front.png",
    "backImage": "/products/self_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-042",
    "name": "Silly Devil Edition",
    "slug": "silly-devil",
    "price": 64,
    "description": "A premium part of the Silly Devil series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/silly_devil_front.png",
    "backImage": "/products/silly_devil_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-043",
    "name": "Spacecoffe Edition",
    "slug": "spacecoffe",
    "price": 64,
    "description": "A premium part of the Spacecoffe series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/spacecoffe_front.png",
    "backImage": "/products/spacecoffe_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-044",
    "name": "Super Cute Edition",
    "slug": "super-cute",
    "price": 64,
    "description": "A premium part of the Super Cute series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/super_cute_front.png",
    "backImage": "/products/super_cute_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "dtg-045",
    "name": "Ultraramen Edition",
    "slug": "ultraramen",
    "price": 64,
    "description": "A premium part of the Ultraramen series. High-fidelity DTG print on heavyweight cotton, designed for the digital vanguard.",
    "features": [
      "Heavyweight 300GSM Cotton",
      "High-definition DTG graphics",
      "Reinforced neck & shoulder seams",
      "Sustainable production"
    ],
    "image": "/products/ultraramen_front.png",
    "backImage": "/products/ultraramen_back.png",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  }
];
