"use client"

import { cn } from "@/lib/utils"
import React from "react"



function Switch({
    className,
    ...props

}: React.ComponentProps<"button">) {
    const [enabled, setEnabled] = React.useState(false);
    return (
        <button onClick={() => setEnabled(!enabled)} className={cn("h-5 w-10 cursor-pointer rounded-full transition-all ring ring-black ring-[1px] flex items-center p-[4px]", enabled ? "bg-blue-500" : "bg-white", className)} {...props}>
            <span className={cn("h-3 w-3 transition-all rounded-full ring-1 bg-white", enabled ? "translate-x-5" : "translate-x-0", className)}>
            </span>
        </button>
    )
}

export default Switch