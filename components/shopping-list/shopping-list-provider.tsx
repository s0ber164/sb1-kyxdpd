"use client";

import { useState } from "react";
import { ShoppingListContext } from "./shopping-list-context";
import { ShoppingListItem } from "@/lib/types";

export function ShoppingListProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ShoppingListItem[]>([]);

  const addItem = (productName: string) => {
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        productName,
        addedAt: new Date().toISOString(),
      },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ShoppingListContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ShoppingListContext.Provider>
  );
}