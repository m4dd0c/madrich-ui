import React from "react";
import { componentsList } from "@/lib/ui-components";
import Link from "next/link";
import { X } from "lucide-react";

const LeftSidebar = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="font-grotesk w-[280px] sm:w-[300px] h-full p-4 overflow-y-auto scrollbar-hide bg-foreground text-background">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <Link href="/" className="text-2xl sm:text-3xl font-bold">
            Madrich UI
          </Link>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-[#161616] rounded transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <small className="pt-2 text-muted/50">Components</small>
        <div className="flex flex-col space-y-2 mt-2">
          {componentsList.map((component) => (
            <Link
              className="text-lg sm:text-xl px-3 py-1 hover:bg-[#161616] hover:text-hero transition-all duration-150 capitalize font-semibold"
              key={component.slug}
              href={`/components/${component.slug}`}
              onClick={onClose}
            >
              {component.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
