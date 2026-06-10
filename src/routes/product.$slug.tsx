import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, products, formatINR } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — AK Perfumes` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — AK Perfumes` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="py-40 text-center">
        <h1 className="font-display text-4xl mb-4">Fragrance not found</h1>
        <Link to="/shop" className="text-gold underline">Back to collection</Link>
      </div>
    </SiteLayout>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-gold mb-8">
          <ArrowLeft className="w-3 h-3" /> Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-accent/30 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden shadow-luxe aspect-[4/5] bg-card">
              <img src={product.image} alt={product.name} width={1024} height={1280} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">{product.category}</div>
            <h1 className="font-display text-5xl md:text-6xl mb-3">{product.name}</h1>
            <p className="italic text-lg text-muted-foreground mb-6">{product.tagline}</p>
            <div className="font-display text-3xl text-gradient-gold mb-8">{formatINR(product.price)}</div>
            <div className="gold-divider w-24 mb-8" />
            <p className="text-base text-foreground/85 leading-relaxed mb-10">{product.description}</p>

            <div className="space-y-4 mb-10">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Fragrance Notes</div>
              {(["top", "heart", "base"] as const).map((k) => (
                <div key={k} className="flex gap-4">
                  <span className="font-display text-lg capitalize w-20 text-muted-foreground">{k}</span>
                  <span className="text-sm">{product.notes[k].join(" · ")}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center glass rounded-full">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 hover:text-gold"><Minus className="w-4 h-4" /></button>
                <span className="w-10 text-center font-display text-lg">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="p-3 hover:text-gold"><Plus className="w-4 h-4" /></button>
              </div>
              <button
                onClick={() => add(product.id, qty)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] rounded-full shadow-gold hover:shadow-luxe transition"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>
            </div>
            <p className="text-xs text-muted-foreground">Free shipping across India · Cash on delivery available</p>
          </motion.div>
        </div>

        <section className="mt-32">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12">You May Also <span className="italic text-gradient-gold">Love</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
