import { formatINR } from "@/lib/products";

export function PriceDisplay({ price, salePrice, className }: { price: number; salePrice?: number; className?: string }) {
  if (!salePrice) {
    return <span className={className}>{formatINR(price)}</span>;
  }
  return (
    <span className={className}>
      <span className="line-through text-muted-foreground/60 mr-2 text-sm">{formatINR(price)}</span>
      {formatINR(salePrice)}
    </span>
  );
}
