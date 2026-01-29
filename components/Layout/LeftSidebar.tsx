import React from "react";
import { componentsList } from "@/lib/constants";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <div className="font-grotesk w-[300px] h-full p-4 overflow-y-auto scrollbar-hide bg-foreground text-background">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">
          Madrich UI
        </h1>
        <small className="pt-2 text-muted/50">
          Components
        </small>
        <div className="flex flex-col space-y-2 mt-2">
          {componentsList.map((component) => (
            <Link
              className="text-xl px-3 py-1 hover:bg-[#161616] hover:text-hero transition-all duration-150 capitalize font-semibold"
              key={component.slug}
              href={`/components/${component.slug}`}
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
