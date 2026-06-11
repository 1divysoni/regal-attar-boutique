import p1 from "@/assets/product-1.png";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.png";
import p4 from "@/assets/product-4.png";
import p5 from "@/assets/product-5.png";
import p6 from "@/assets/product-6.png";
import p7 from "@/assets/product-7.png";
import p8 from "@/assets/product-8.jpg";
import p9 from "@/assets/product-9.jpg";
import p10 from "@/assets/product-10.jpg";
import p11 from "@/assets/product-11.jpg";
import p12 from "@/assets/product-12.jpg";
import p13 from "@/assets/product-13.jpg";
import p14 from "@/assets/product-14.jpg";
import p15 from "@/assets/product-15.jpg";
import p16 from "@/assets/product-16.png";
import p17 from "@/assets/product-17.jpg";

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
    slug: "hawaii_blue",
    name: "HAWAII BLUE",
    tagline: "Freshness of the Ocean, Captured in a Bottle",
    notes: { top: ["Sea Water", "Mint", "Lavender"], heart: ["Jasmine", "Geranium", "Neroli"], base: ["Oakmoss", "Musk", "Sandalwood"] },
    price: 2199,
    salePrice: 439,
    image: p1,
    category: "Attar",
    description: "Experience a fresh, aquatic premium fragrance oil roll-on crafted for both men and women. This alcohol-free, concentrated formulation blends crisp ocean notes with subtle sweet undertones to deliver a long-lasting, refreshing scent that stays active all day.",
    bestseller: false,
  },
  {
    id: "2",
    slug: "purple_oud",
    name: "PURPLE OUD",
    tagline: "The Essence of Royal Luxury",
    notes: { top: ["Agarwood (Oud)", "Rose", "Saffron"], heart: ["Amber", "Amberwood", "Jasmine"], base: ["Woody Notes", "Musk", "Sandalwood"] },
    price: 2199,
    salePrice: 439,
    image: p2,
    category: "Oud",
    description: "Indulge in a rich, deeply captivating premium oud fragrance oil roll-on tailored for both men and women. This alcohol-free, grade-1 concentrated formula harmonizes precious woody depth with exotic floral nuances for an ultra-premium, long-lasting aroma.",
    bestseller: false,
  },
  {
    id: "3",
    slug: "cold_water",
    name: "COLD WATER",
    tagline: "Pure Freshness and Vitality",
    notes: { top: ["Mint", "Green Nuances", "Lavender", "Coriander", "Rosemary"], heart: ["Geranium", "Neroli", "Jasmine", "Sandalwood"], base: ["Cedarwood", "Musk", "Amber", "Tobacco"] },
    price: 2199,
    salePrice: 439,
    image: p3,
    category: "Attar",
    description: "An invigorating, alcohol-free premium aquatic fragrance oil designed to replicate a crisp ocean breeze and cool marine energy, providing long-lasting freshness on warm days.",
    bestseller: false,
  },
  {
    id: "4",
    slug: "aventus",
    name: "AVENTUS",
    tagline: "Power, Success, and Modern Elegance",
    notes: { top: ["Pineapple", "Bergamot", "Blackcurrant", "Apple"], heart: ["Birch", "Patchouli", "Moroccan Jasmine", "Rose"], base: ["Musk", "Oakmoss", "Ambergris", "Vanilla"] },
    price: 2199,
    salePrice: 439,
    image: p4,
    category: "Attar",
    description: "A sophisticated, alcohol-free premium fragrance oil inspired by strength and heritage, blending rich fruity layers with a deeply masculine, smoky, and woody base.",
    bestseller: false,
  },
  {
    id: "5",
    slug: "musk_rizali",
    name: "MUSK RIZALI",
    tagline: "Pure, Silky, and Timeless Sophistication",
    notes: { top: ["Sweet White Musk", "Fresh Bergamot"], heart: ["Floral Jasmine", "Delicate Rose", "Soft Powdery Accord"], base: ["Creamy Musk", "Sandalwood", "Warm Amber"] },
    price: 2199,
    salePrice: 439,
    image: p5,
    category: "Attar",
    description: "A luxurious, alcohol-free premium fragrance oil showcasing a soft, velvety white musk profile blended with subtle floral undertones and rich oriental warmth for an elegant, skin-friendly experience.",
    bestseller: false,
  },
  {
    id: "6",
    slug: "khamrah",
    name: "KHAMRAH",
    tagline: "Warm, Opulent, and Indulgent Splendor",
    notes: { top: ["Cinnamon", "Nutmeg", "Bergamot"], heart: ["Dates Accord", "Creamy Praline", "Tuberose", "Mahonial"], base: ["Vanilla", "Roasted Tonka Bean", "Amberwood", "Myrrh", "Benzoin"] },
    price: 2199,
    salePrice: 439,
    image: p6,
    category: "Attar",
    description: "A rich, alcohol-free premium fragrance oil inspired by luxurious Middle Eastern warmth, weaving sweet gourmand accents and deep vanilla together with exotic woods for a royal, long-lasting aroma.",
    bestseller: false,
  },
  {
    id: "7",
    slug: "dehnal_oud",
    name: "DEHNAL OUD",
    tagline: "Earthy Majesty, Depth, and Royal Aura",
    notes: { top: ["Sweet Aged Wood", "Hints of Leather"], heart: ["Balsamic Accords", "Deep Smoky Oud"], base: ["Warm Amber", "Earthy Patchouli", "Sandalwood"] },
    price: 2199,
    salePrice: 439,
    image: p7,
    category: "Attar",
    description: "A profoundly rich, alcohol-free premium fragrance oil showcasing traditional Arabian agarwood, masterfully blending intense woody depth with warm leathery and balsamic undertones.",
    bestseller: false,
  },
  {
    id: "8",
    slug: "amir_al_oud",
    name: "AMIR AL OUD",
    tagline: "Sovereign Elegance and Oriental Warmth",
    notes: { top: ["Woody Oud", "Sweet Saffron"], heart: ["Creamy Vanilla", "Sugar Candy Accords", "Geranium"], base: ["Sandalwood", "Deep Amber", "Roasted Labdanum"] },
    price: 2199,
    salePrice: 439,
    image: p8,
    category: "Attar",
    description: "A majestic, alcohol-free premium fragrance oil inspired by classic Arabian royalty, combining sweet, woody oud notes with rich vanilla and sugary accents for a deep, intoxicating trail.",
    bestseller: true,
  },
  {
    id: "9",
    slug: "firdaus",
    name: "FIRDAUS",
    tagline: "Heavenly Freshness and Pristine Nature",
    notes: { top: ["Fresh Green Nuances", "Aldehydes", "Citrus zest"], heart: ["Lily of the Valley", "Jasmine", "Spicy Accords"], base: ["Oakmoss", "Sandalwood", "Musk", "Patchouli"] },
    price: 2199,
    salePrice: 439,
    image: p9,
    category: "Attar",
    description: "A timeless, alcohol-free premium fragrance oil embodying a peaceful garden paradise, beautifully blending vibrant green elements with deep, traditional mossy and woody undertones.",
    bestseller: false,
  },
  {
    id: "10",
    slug: "white_oud",
    name: "WHITE OUD",
    tagline: "Pure Elegance in Every Drop",
    notes: { top: ["Artemisia", "Mandarin Orange", "Lemon", "Orange"], heart: ["Black Currant", "Freesia", "Patchouli"], base: ["Amber", "Musk", "Tobacco", "White Oud"] },
    price: 2199,
    salePrice: 439,
    image: p10,
    category: "Attar",
    description: "Experience a rich, alcohol-free fragrance oil crafted for long-lasting freshness. It provides a clean, sophisticated, and soothing oriental-woody profile suitable for both men and women.",
    bestseller: false,
  },
  {
    id: "11",
    slug: "ruh_gulab",
    name: "RUH GULAB",
    tagline: "The Royal Touch of Pure Roses",
    notes: { top: ["Morning Rose Petals", "Geranium", "Soft Citrus Zest"], heart: ["Pure Rose Absolute", "Crushed Petals", "Honey Nectar"], base: ["Creamy Sandalwood", "White Musk", "Transparent Rose"] },
    price: 2199,
    salePrice: 439,
    image: p11,
    category: "Attar",
    description: "Experience the essence of fresh distilled roses captured in a rich, non-alcoholic perfume oil. This traditional floral fragrance delivers a soothing, luxurious, and highly authentic cooling aroma that lingers beautifully all day long.",
    bestseller: false,
  },
  {
    id: "12",
    slug: "imagination",
    name: "IMAGINATION",
    tagline: "A Dreamlike Escape in Every Drop",
    notes: { top: ["Calabrian Bergamot", "Sicilian Orange", "Citron"], heart: ["Ceylon Cinnamon", "Nigerian Ginger", "Neroli"], base: ["Black Tea", "Guaiac Wood", "Ambroxan", "Olibanum"] },
    price: 2199,
    salePrice: 439,
    image: p12,
    category: "Attar",
    description: "Dive into a mesmerizing blend crafted to inspire creativity and confidence. This long-lasting, alcohol-free perfume oil delivers a vibrant, uplifting, and modern scent profile that shifts seamlessly from day to night.",
    bestseller: false,
  },
  {
    id: "13",
    slug: "royal_mirage",
    name: "ROYAL MIRAGE",
    tagline: "Unleash the Majesty Within",
    notes: { top: ["Bergamot", "Green Notes", "Jasmine", "Orange Blossom"], heart: ["Rose", "Iris", "Patchouli", "Sandalwood"], base: ["Leather", "Oakmoss", "Amber", "Musk"] },
    price: 2199,
    salePrice: 439,
    image: p13,
    category: "Attar",
    description: "Indulge in a majestic, non-alcoholic fragrance oil that exudes confidence and sophistication. This long-lasting blend features a classic fresh chypre and rich woody character, creating a powerful, aromatic presence.",
    bestseller: false,
  },
  {
    id: "14",
    slug: "ombre_nomade",
    name: "OMBRE NOMADE",
    tagline: "A Journey Into the Mystic Desert",
    notes: { top: ["Saffron", "Geranium", "Raspberry"], heart: ["Rose", "Incense", "Birch Wood"], base: ["Agarwood (Oud)", "Amberwood", "Benzoin"] },
    price: 2199,
    salePrice: 439,
    image: p14,
    category: "Attar",
    description: "Discover a deeply mysterious and luxurious alcohol-free fragrance oil that captures the essence of changing desert sands. This intense, long-lasting scent blends rare smoky wood elements with soft floral highlights for an untamed, sophisticated aura.",
    bestseller: false,
  },
  {
    id: "15",
    slug: "gucci_flora",
    name: "GUCCI FLORA",
    tagline: "A Blossom of Pure Joy",
    notes: { top: ["Pear Blossom", "Red Berries", "Italian Mandarin"], heart: ["White Gardenia", "Frangipani", "Jasmine Absolute"], base: ["Brown Sugar", "Patchouli", "Soft Musk"] },
    price: 2199,
    salePrice: 439,
    image: p15,
    category: "Attar",
    description: "Indulge in an enchanting, alcohol-free fragrance oil inspired by a lush, blooming garden. This long-lasting formulation delivers a deeply feminine, elegant, and uplifting floral aroma perfect for daily wear.",
    bestseller: false,
  },
  {
    id: "16",
    slug: "cr_7",
    name: "CR-7",
    tagline: "Power, Passion, and Performance",
    notes: { top: ["Lavender", "Cardamom", "Artemisia", "Bergamot"], heart: ["Tobacco", "Cinnamon", "Cedarwood", "Iris"], base: ["Vanilla", "Musk", "Sandalwood", "Amber"] },
    price: 2199,
    salePrice: 439,
    image: p16,
    category: "Attar",
    description: "Fuel your day with an energetic, alcohol-free fragrance oil designed for the modern, active man. This vibrant, long-lasting formulation strikes a perfect balance between bold spices, fresh herbs, and a grounding woody trail.",
    bestseller: false,
  },
  {
    id: "17",
    slug: "hawas_ice",
    name: "HAWAS ICE",
    tagline: "Ultimate Frozen Freshness",
    notes: { top: ["Frozen Apple", "Italian Bergamot", "Lemon", "Star Anise"], heart: ["Orange Blossom", "Plum", "Cardamom"], base: ["Ambergris", "Musk", "Driftwood", "Moss"] },
    price: 2199,
    salePrice: 439,
    image: p17,
    category: "Attar",
    description: "Experience an icy, refreshing twist on a classic aquatic blend with this premium, alcohol-free fragrance oil. This long-lasting formula infuses crisp, frosted citrus notes with a vibrant, magnetic aromatic core designed to keep you feeling revitalized all day.",
    bestseller: false,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
