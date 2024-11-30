"use client";

import { useShoppingList } from "./shopping-list-context";
import { ShoppingListSheet } from "./shopping-list-sheet";

export function ShoppingListButton() {
  const { items } = useShoppingList();

  if (items.length === 0) return null;

  return <ShoppingListSheet />;
}