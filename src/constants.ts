export type Category = 'Hoodies' | 'T-Shirts' | 'Pants' | 'Jackets' | 'Sweatpants' | 'Sweaters' | 'Accessories' | 'Art';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  images: string[];
  sizes: string[];
  details: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Oversized Weighted Hoodie',
    price: 2499,
    category: 'Hoodies',
    description: 'A premium heavyweight cotton hoodie designed with a boxy, oversized silhouette. Featuring dropped shoulders and a double-layered hood for structural integrity.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['100% Organic Cotton', '450GSM French Terry', 'Made in Portugal', 'Garment Dyed']
  },
  {
    id: 'p2',
    name: 'Boxy Essential T-Shirt',
    price: 899,
    category: 'T-Shirts',
    description: 'The definitive base layer. Constructed from 300GSM mercerized cotton for a subtle sheen and structured drape.',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['100% Mercerized Cotton', 'High-ribbed neckline', 'Reinforced seams', 'Minimal silicon branding']
  },
  {
    id: 'p5',
    name: 'Heavyweight Fleece Sweatpants',
    price: 1599,
    category: 'Sweatpants',
    description: 'Relaxed fit sweatpants crafted from high-density fleece. Elasticated waistband with internal drawstrings and elastic cuffs.',
    images: [
      'https://images.unsplash.com/photo-1552063071-709de24128f1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['400GSM Cotton Fleece', 'Deep side pockets', 'Brushed interior', 'Tonal logo embroidery']
  },
  {
    id: 'p6',
    name: 'Ribbed Mohair Sweater',
    price: 2899,
    category: 'Sweaters',
    description: 'An oversized, textured sweater knitted from a luxury mohair-wool blend. Features a dropped shoulder and chunky ribbed trims.',
    images: [
      'https://images.unsplash.com/photo-1608234808654-2a8875fab7b9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Mohair & Merino Blend', 'Hand-knitted texture', 'Extra long sleeves', 'Soft-touch finish']
  },
  {
    id: 'p7',
    name: 'Tactical Buckle Belt',
    price: 699,
    category: 'Accessories',
    description: 'Industrial-grade nylon webbing belt featuring a quick-release metal cobra buckle and engraved branding.',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb8ec5522?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['One Size'],
    details: ['Reinforced Nylon', 'Zinc Alloy Buckle', 'Adjustable length', 'Matte black finish']
  },
  {
    id: 'p8',
    name: 'Fragment 01: Abstract Canvas',
    price: 5499,
    category: 'Art',
    description: 'A custom, one-of-one abstract expressionist piece. Layered textures and monochromatic tones explore the concept of visual perception.',
    images: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['60cm x 90cm'],
    details: ['Acrylic on Canvas', 'Mixed Media texture', 'Signed by the collective', 'Includes authenticity certificate']
  },
  {
    id: 'p3',
    name: 'Utility Cargo Trousers',
    price: 1899,
    category: 'Pants',
    description: 'Modern technical pants featuring a straight-leg cut with adjustable cuffs and hidden side-seam utility pockets.',
    images: [
      'https://images.unsplash.com/photo-1624371414361-e6e0aa58733b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    details: ['Japanese Twill Fabric', 'Weather-resistant finish', 'Articulated knee design', 'Custom hardware']
  },
  {
    id: 'p4',
    name: 'Layered Shell Jacket',
    price: 3299,
    category: 'Jackets',
    description: 'A versatile technical outer-layer designed for protection and silhouette. Features modular layering capability.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Ripstop Nylon Shell', 'Internal storm-flap', 'Waterproof zippers', 'Reflective micro-print']
  }
];
