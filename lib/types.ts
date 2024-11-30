export interface Product {
  name: string;
  dimensions: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ShoppingListItem {
  id: string;
  productName: string;
  addedAt: string;
}