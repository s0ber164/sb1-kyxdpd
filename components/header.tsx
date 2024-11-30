import { Camera } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Camera className="h-6 w-6" />
          <span className="font-semibold text-xl">SiS Props</span>
        </div>
      </div>
    </header>
  );
}