"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { parse } from "csv-parse/browser/esm/sync";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Product } from "@/lib/types";

export function ProductUpload() {
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setIsProcessing(true);
    const file = acceptedFiles[0];

    try {
      const text = await file.text();
      const records = parse(text, {
        columns: true,
        skip_empty_lines: true,
      });

      // Validate and transform the data
      const products: Product[] = records.map((record: any) => ({
        name: record.name,
        dimensions: record.dimensions,
        price: Number(record.price),
        quantity: Number(record.quantity),
        image: record.image,
      }));

      // Here you would typically send the products to your backend
      console.log("Processed products:", products);
      toast.success(`Successfully processed ${products.length} products`);
    } catch (error) {
      console.error("Error processing CSV:", error);
      toast.error("Error processing CSV file. Please check the format and try again.");
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-2">
        <Upload className="h-8 w-8 text-muted-foreground" />
        {isDragActive ? (
          <p>Drop the CSV file here...</p>
        ) : (
          <>
            <p className="text-lg font-medium">Upload Product CSV</p>
            <p className="text-sm text-muted-foreground">
              Drag and drop your CSV file here, or click to select
            </p>
          </>
        )}
        <Button variant="outline" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Select File"}
        </Button>
      </div>
    </div>
  );
}