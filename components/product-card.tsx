"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Product } from "@/lib/types";
import { useShoppingList } from "./shopping-list/shopping-list-context";

export function ProductCard({
  name,
  dimensions,
  price,
  quantity,
  image,
}: Product) {
  const { addItem } = useShoppingList();

  return (
    <Card className="overflow-hidden">
      <div className="aspect-[3/4]">
        <div className="relative w-full pt-[100%]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{dimensions}</p>
          <div className="flex justify-between items-center">
            <span className="font-medium">${price}/week</span>
            <span className="text-sm text-muted-foreground">
              {quantity} available
            </span>
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addItem(name)}
          className="w-full"
          variant="outline"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to List
        </Button>
      </CardFooter>
    </Card>
  );
}