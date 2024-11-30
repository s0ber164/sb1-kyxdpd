"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ListChecks, X } from "lucide-react";
import { useShoppingList } from "./shopping-list-context";

export function ShoppingListSheet() {
  const { items, removeItem } = useShoppingList();

  return (
    <div className="fixed bottom-4 left-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full h-14 px-4">
            <ListChecks className="h-5 w-5 mr-2" />
            <span>{items.length} items</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[50vh]">
          <SheetHeader>
            <SheetTitle>Your Rental List</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className="p-2 bg-secondary rounded-md flex justify-between items-center">
                  <span>{item.productName}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-6">Request Quote</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}