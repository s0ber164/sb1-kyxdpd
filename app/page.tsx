import { ProductGrid } from "@/components/product-grid";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { ShoppingListProvider } from "@/components/shopping-list/shopping-list-provider";
import { ShoppingListButton } from "@/components/shopping-list/shopping-list-button";

export default function Home() {
  return (
    <ShoppingListProvider>
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <ProductGrid />
        <ShoppingListButton />
      </main>
    </ShoppingListProvider>
  );
}