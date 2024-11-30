"use client";

import { ProductUpload } from "@/components/admin/product-upload";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Product Management</CardTitle>
          <CardDescription>
            Upload your product inventory CSV file here. The file should contain columns for name,
            dimensions, price, quantity, and image URL.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductUpload />
        </CardContent>
      </Card>
    </div>
  );
}