"use client";

import { createContext, useContext } from "react";
import { ShoppingListItem } from "@/lib/types";

interface ShoppingListContextType {
  items: ShoppingListItem[];
  addItem: (productName: string) => void;
  removeItem: (id: string) => void;
}

export const ShoppingListContext = createContext<ShoppingListContextType | undefined>(undefined);

export function useShoppingList() {
  const context = useContext(ShoppingListContext);
  if (context === undefined) {
    throw new Error("useShoppingList must be used within a ShoppingListProvider");
  }
  return context;
}