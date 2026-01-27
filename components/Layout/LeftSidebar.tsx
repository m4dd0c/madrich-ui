import React from "react";
import { componentsList } from "@/lib/constants";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <div className="font-grotesk w-[300px] h-full overflow-y-auto border-r-3 border-foreground scrollbar-hide">
      <div className="text-center flex flex-col">
        <h1 className="text-3xl p-2 font-bold border-b-3 border-foreground bg-[#BC96D4]">
          Components
        </h1>
        <div className="flex flex-col  divide-y-3 divide-foreground">
          {componentsList.map((component) => (
            <Link
              className="text-xl p-2 font-bold"
              key={component}
              href={`/components/${component}`}
            >
              {component}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
