import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.png";

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  price: number;
  salePrice?: number;
  image: string;
  category: "Attar" | "Perfume" | "Oud";
  description: string;
  bestseller?: boolean;
};

export const getEffectivePrice = (p: Product) => p.salePrice ?? p.price;

export const products: Product[] = [
  {
    id: "1",
    slug: "purple-oud",
    name: "Purple Oud",
    tagline: "The signature. Royal, smoky, unforgettable.",
    notes: { top: ["Saffron", "Bergamot"], heart: ["Bulgarian Rose", "Iris"], base: ["Aged Oud", "Amber", "Musk"] },
    price: 4999,
    salePrice: 3999,
    image: p1,
    category: "Oud",
    description: "A bold composition of aged Cambodian oud, Bulgarian rose, and warm amber. Purple Oud is the soul of AK Perfumes — opulent, mysterious, and built to linger long after you leave the room.",
    bestseller: true,
  },
  {
    id: "2",
    slug: "midnight-attar",
    name: "Midnight Attar",
    tagline: "Alcohol-free attar of velvet nights.",
    notes: { top: ["Cardamom", "Pink Pepper"], heart: ["Jasmine", "Tuberose"], base: ["Sandalwood", "Vanilla"] },
    price: 3499,
    salePrice: 2799,
    image: p2,
    category: "Attar",
    description: "Hand-blended in Indore from precious sandalwood and white florals. A pure, alcohol-free attar that warms with your skin.",
    bestseller: true,
  },
  {
    id: "3",
    slug: "lavender-noir",
    name: "Lavender Noir",
    tagline: "A modern eau de parfum with old-world soul.",
    notes: { top: ["Lavender", "Lemon Zest"], heart: ["Violet", "Orris"], base: ["Patchouli", "Tonka"] },
    price: 3899,
    image: p3,
    category: "Perfume",
    description: "Crisp French lavender meets dark patchouli and creamy tonka — refined, contemporary, addictive.",
  },
  {
    id: "4",
    slug: "royal-imperial",
    name: "Royal Imperial",
    tagline: "Ceremonial oud reserved for the few.",
    notes: { top: ["Cinnamon", "Clove"], heart: ["Damask Rose", "Saffron"], base: ["Hindi Oud", "Leather", "Oakmoss"] },
    price: 7499,
    image: p4,
    category: "Oud",
    description: "Our most precious composition. Aged Hindi oud layered with leather and Damask rose — a fragrance that announces its presence.",
    bestseller: true,
  },
  {
    id: "5",
    slug: "amber-nights",
    name: "Amber Nights",
    tagline: "Warm amber kissed with saffron and rose.",
    notes: { top: ["Saffron", "Bergamot"], heart: ["Damask Rose", "Honey"], base: ["Amber", "Vanilla", "Musk"] },
    price: 4299,
    image: p5,
    category: "Attar",
    description: "A warm, enveloping attar that unfolds like a desert evening — saffron and bergamot opening into honeyed rose, settling into a rich amber-vanilla base.",
    bestseller: false,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
