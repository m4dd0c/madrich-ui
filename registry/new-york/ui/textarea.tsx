import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-[500px] rounded-base border-2 hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150 border-foreground bg-secondary-background selection:bg-main selection:text-main-foreground px-3 py-2 text-sm font-base text-foreground placeholder:text-foreground/50 focus-visible:outline-none shadow-neo disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
