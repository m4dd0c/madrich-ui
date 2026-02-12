import React from "react";
import { TooltipCard } from "@/registry/new-york/ui/tooltip-card";

const TooltipCardDemo = () => {
  return (
    <TooltipCard
      title="Tooltip text"
      description="A tooltip shows additional information related to an element. It appears when the user hovers or focuses on the item. This helps explain actions, labels, or icons clearly."
      className="w-[400px]"
    />
  );
};

export default TooltipCardDemo;
