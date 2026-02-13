import * as React from "react";

import { cn } from "@/lib/utils";

interface TooltipCardProps {
  title?: string;
  description?: string;
  className?: string;
}

function TooltipCard({
  title = "Tooltip text",
  description = "A tooltip shows additional information related to an element. It appears when the user hovers or focuses on the item.",
  className,
}: TooltipCardProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div
        data-slot="tooltip-card"
        className="border-2 p-3  border-foreground bg-background shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150"
      >
        <h2 className="text-sm font-semibold pb-1">{title}</h2>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

export { TooltipCard };
