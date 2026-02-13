"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

interface ProgressProps {
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

function Progress({ className, value = 0, onChange, ...props }: ProgressProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = React.useState(false);

  const clamp = (val: number) => Math.max(0, Math.min(100, val));

  const getValueFromEvent = (clientX: number) => {
    if (!trackRef.current) return value;
    const rect = trackRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    return clamp(Math.round(percent));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setDragging(true);
    const newVal = getValueFromEvent(e.clientX);
    onChange?.(newVal);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const newVal = getValueFromEvent(e.clientX);
    onChange?.(newVal);
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  return (
    <div className={cn("relative", className)} {...props}>
      {/* Track */}
      <div
        ref={trackRef}
        data-slot="progress"
        className="relative h-4 w-full rounded-full border-2 border-foreground bg-secondary-background cursor-pointer"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Filled indicator */}
        <div
          data-slot="progress-indicator"
          className="h-full bg-hero rounded-full transition-[width]"
          style={{ width: `${value}%` }}
        />

        {/* Thumb with percentage inside */}
        <div
          className={cn(
            "absolute top-1/2 flex items-center justify-center w-8 h-8  rounded-full border-2 border-foreground bg-background cursor-grab select-none transition-all",
            dragging && "cursor-grabbing scale-110",
          )}
          style={{
            left: `${value}%`,
            transform: "translateX(-50%) translateY(-50%)",
          }}
        >
          <span className="text-[10px] font-bold text-foreground">
            {value}%
          </span>
        </div>
      </div>
    </div>
  );
}

export { Progress };
