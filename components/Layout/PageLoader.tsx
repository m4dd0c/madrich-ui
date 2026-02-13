"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  // When pathname changes, navigation is complete
  useEffect(() => {
    setIsLoading(false);
    setProgress(100);

    const timeout = setTimeout(() => setProgress(0), 300);
    return () => clearTimeout(timeout);
  }, [pathname]);

  // Intercept all <a> clicks to detect navigation start
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        anchor.target === "_blank"
      )
        return;

      // Only trigger for internal navigation to a different page
      if (href !== pathname) {
        setIsLoading(true);
        setProgress(0);
      }
    },
    [pathname],
  );

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handleClick]);

  // Animate progress while loading
  useEffect(() => {
    if (!isLoading) return;

    // Quick initial jump
    setProgress(30);

    const timer1 = setTimeout(() => setProgress(55), 200);
    const timer2 = setTimeout(() => setProgress(70), 500);
    const timer3 = setTimeout(() => setProgress(85), 1200);
    const timer4 = setTimeout(() => setProgress(92), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isLoading]);

  if (progress === 0 && !isLoading) return null;

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-1.5 bg-transparent">
        <div
          className="h-full bg-hero relative"
          style={{
            width: `${progress}%`,
            transition:
              progress === 100
                ? "width 200ms ease-out, opacity 300ms ease-out 200ms"
                : "width 400ms cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: progress === 100 ? 0 : 1,
          }}
        >
          {/* Glowing tip */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-r from-transparent to-white/60" />
          {/* Pulsing dot at the end */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-hero border-2 border-foreground rounded-full shadow-[0_0_8px_rgba(174,122,255,0.8)] animate-pulse" />
        </div>
      </div>

      {/* Neo-brutalist block spinner (shows on longer loads) */}
      {isLoading && progress < 90 && (
        <div className="fixed inset-0 z-[9998] pointer-events-none flex items-center justify-center">
          <div className="flex gap-2 animate-bounce">
            <div
              className="w-4 h-4 bg-hero border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)]"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-4 h-4 bg-[#FFC900] border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)] animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-4 h-4 bg-[#80C551] border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)] animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PageLoader;
