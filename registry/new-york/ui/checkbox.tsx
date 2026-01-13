"use client"
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";


function Checkbox({
    className,
    ...props
}: React.ComponentProps<typeof Check>) {
    const [checked, setChecked] = React.useState(false);
    return (
        <div onClick={() => setChecked(!checked)} className={cn("flex items-center justify-center size-6 ring ring-black shadow-[3px_3px_0px_1px_#000]", className)}>
            {checked ? <Check className={cn("size-6 bg-blue-500 text-white", className)} {...props} /> : null}
        </div>
    )
}


export default Checkbox
