import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatINR } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-card shadow-luxe">
          <div className="absolute inset-0 bg-gradient-royal opacity-40" />
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={1024}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
          {product.bestseller && (
            <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-primary-foreground bg-gradient-gold px-3 py-1 rounded-full">
              Bestseller
            </span>
          )}
          <button
            onClick={(e) => { e.preventDefault(); add(product.id); }}
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-gold text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition shadow-gold"
            aria-label="Add to cart"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="pt-5 text-center">
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-2">{product.category}</div>
          <h3 className="font-display text-2xl">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1 italic">{product.tagline}</p>
          <div className="mt-3 font-display text-xl text-gradient-gold">{formatINR(product.price)}</div>
        </div>
      </Link>
    </motion.div>
  );
}
