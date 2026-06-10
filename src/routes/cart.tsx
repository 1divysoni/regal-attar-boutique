import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — AK Perfumes" }, { name: "description", content: "Your selected fragrances." }] }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, subtotal, count } = useCart();
  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">Your Selection</div>
        <h1 className="font-display text-5xl md:text-6xl mb-12">Shopping <span className="italic text-gradient-gold">Bag</span></h1>

        {items.length === 0 ? (
          <div className="glass rounded-2xl p-16 text-center">
            <p className="text-muted-foreground mb-6">Your bag is empty.</p>
            <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] rounded-full">
              Discover Fragrances <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {items.map(({ product, qty }) => (
                <div key={product.id} className="glass rounded-xl p-4 flex gap-4 items-center">
                  <img src={product.image} alt={product.name} className="w-24 h-28 object-cover rounded-lg" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{product.category}</div>
                    <div className="font-display text-xl">{product.name}</div>
                    <div className="text-sm text-gold mt-1">{formatINR(product.price)}</div>
                  </div>
                  <div className="flex items-center glass rounded-full">
                    <button onClick={() => setQty(product.id, qty - 1)} className="p-2"><Minus className="w-3 h-3" /></button>
                    <span className="w-8 text-center text-sm">{qty}</span>
                    <button onClick={() => setQty(product.id, qty + 1)} className="p-2"><Plus className="w-3 h-3" /></button>
                  </div>
                  <button onClick={() => remove(product.id)} className="p-2 text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
            <div className="glass rounded-xl p-8 h-fit shadow-luxe">
              <h2 className="font-display text-2xl mb-6">Order Summary</h2>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between"><span className="text-muted-foreground">Items</span><span>{count}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatINR(subtotal)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-gold">Free</span></div>
              </div>
              <div className="border-t border-border pt-4 mb-6 flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Total</span>
                <span className="font-display text-2xl text-gradient-gold">{formatINR(subtotal)}</span>
              </div>
              <Link to="/checkout" className="block text-center px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] rounded-full shadow-gold hover:shadow-luxe transition">
                Secure Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
