import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

export type CartItem = { product: Product; qty: number };
type CartCtx = {
  items: CartItem[];
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "ak-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (!raw) return;
      const parsed: { id: string; qty: number }[] = JSON.parse(raw);
      setItems(
        parsed
          .map(({ id, qty }) => {
            const product = products.find((p) => p.id === id);
            return product ? { product, qty } : null;
          })
          .filter(Boolean) as CartItem[],
      );
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(KEY, JSON.stringify(items.map(({ product, qty }) => ({ id: product.id, qty }))));
  }, [items]);

  const value = useMemo<CartCtx>(() => ({
    items,
    add: (id, qty = 1) =>
      setItems((cur) => {
        const exists = cur.find((i) => i.product.id === id);
        if (exists) return cur.map((i) => (i.product.id === id ? { ...i, qty: i.qty + qty } : i));
        const product = products.find((p) => p.id === id);
        return product ? [...cur, { product, qty }] : cur;
      }),
    remove: (id) => setItems((cur) => cur.filter((i) => i.product.id !== id)),
    setQty: (id, qty) =>
      setItems((cur) => (qty <= 0 ? cur.filter((i) => i.product.id !== id) : cur.map((i) => (i.product.id === id ? { ...i, qty } : i)))),
    clear: () => setItems([]),
    count: items.reduce((s, i) => s + i.qty, 0),
    subtotal: items.reduce((s, i) => s + i.qty * i.product.price, 0),
  }), [items]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart outside provider");
  return ctx;
};
