import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — AK Perfumes" }] }),
  component: Checkout,
});

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  if (items.length === 0 && !done) {
    return (
      <SiteLayout>
        <div className="py-40 text-center">
          <h1 className="font-display text-4xl mb-4">Your bag is empty</h1>
          <Link to="/shop" className="text-gold underline">Browse the collection</Link>
        </div>
      </SiteLayout>
    );
  }

  if (done) {
    return (
      <SiteLayout>
        <div className="py-32 max-w-xl mx-auto text-center px-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
            <Check className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Order <span className="italic text-gradient-gold">Confirmed</span></h1>
          <p className="text-muted-foreground mb-8">
            Thank you for choosing AK Perfumes. Your fragrances are being prepared with care in Indore. A confirmation will reach your inbox shortly.
          </p>
          <Link to="/" className="px-8 py-4 inline-block bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] rounded-full">
            Return Home
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-display text-5xl md:text-6xl mb-12">Secure <span className="italic text-gradient-gold">Checkout</span></h1>
        <form
          onSubmit={(e) => { e.preventDefault(); clear(); setDone(true); window.scrollTo(0, 0); }}
          className="grid lg:grid-cols-3 gap-10"
        >
          <div className="lg:col-span-2 space-y-8">
            <Section title="Contact">
              <Field label="Full Name" name="name" />
              <Field label="Email" type="email" name="email" />
              <Field label="Phone" type="tel" name="phone" />
            </Section>
            <Section title="Shipping Address">
              <Field label="Address" name="address" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="City" name="city" />
                <Field label="State" name="state" defaultValue="Madhya Pradesh" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Pincode" name="pin" />
                <Field label="Country" name="country" defaultValue="India" />
              </div>
            </Section>
            <Section title="Payment">
              <div className="glass rounded-lg p-4 flex items-center gap-3 text-sm">
                <Lock className="w-4 h-4 text-gold" />
                <span className="text-muted-foreground">Encrypted demo checkout — no real card needed.</span>
              </div>
              <Field label="Card Number" name="card" defaultValue="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Expiry" name="exp" defaultValue="12/28" />
                <Field label="CVC" name="cvc" defaultValue="123" />
              </div>
            </Section>
          </div>

          <div className="glass rounded-xl p-8 h-fit shadow-luxe">
            <h2 className="font-display text-2xl mb-6">Your Order</h2>
            <div className="space-y-3 mb-6 max-h-80 overflow-y-auto">
              {items.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center gap-3 text-sm">
                  <img src={product.image} className="w-12 h-14 object-cover rounded" alt="" />
                  <div className="flex-1 min-w-0">
                    <div className="truncate">{product.name}</div>
                    <div className="text-xs text-muted-foreground">Qty {qty}</div>
                  </div>
                  <div className="text-gold">{formatINR(product.price * qty)}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 flex justify-between items-baseline mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Total</span>
              <span className="font-display text-2xl text-gradient-gold">{formatINR(subtotal)}</span>
            </div>
            <button className="w-full px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] rounded-full shadow-gold hover:shadow-luxe transition">
              Place Order
            </button>
            <button type="button" onClick={() => navigate({ to: "/cart" })} className="w-full mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-gold">
              ← Edit Cart
            </button>
          </div>
        </form>
      </div>
    </SiteLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <h2 className="font-display text-2xl">{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, name, type = "text", defaultValue }: { label: string; name: string; type?: string; defaultValue?: string }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      <input
        required name={name} type={type} defaultValue={defaultValue}
        className="mt-1 w-full px-4 py-3 bg-input/40 rounded-lg border border-border focus:border-gold outline-none text-sm"
      />
    </label>
  );
}
