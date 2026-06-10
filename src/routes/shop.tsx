import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

const categories = ["All", "Oud", "Attar", "Perfume"] as const;

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Collection — AK Perfumes" },
      { name: "description", content: "Browse our full collection of luxury attars, oud and signature perfumes." },
      { property: "og:title", content: "Collection — AK Perfumes" },
      { property: "og:description", content: "Browse our full luxury fragrance collection." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <SiteLayout>
      <section className="py-20 text-center">
        <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">The Collection</div>
        <h1 className="font-display text-5xl md:text-7xl mb-4">Our <span className="italic text-gradient-gold">Fragrances</span></h1>
        <p className="text-muted-foreground max-w-xl mx-auto px-6">
          Each composition is hand-blended in Indore — a tribute to the art of perfumery.
        </p>
        <div className="gold-divider w-32 mx-auto mt-8" />
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-[0.3em] transition ${
                  cat === c ? "bg-gradient-gold text-primary-foreground shadow-gold" : "glass hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
