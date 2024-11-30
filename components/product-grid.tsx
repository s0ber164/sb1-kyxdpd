import { ProductCard } from "./product-card";
import { products } from "@/lib/data";

export function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}