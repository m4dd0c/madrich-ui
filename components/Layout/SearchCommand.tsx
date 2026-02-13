"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Search, X } from "lucide-react";
import { componentsList } from "@/lib/ui-components";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SearchCommandProps {
  open: boolean;
  onClose: () => void;
}

const SearchCommand = ({ open, onClose }: SearchCommandProps) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Filter components based on query
  const filtered = componentsList.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()),
  );

  // Reset on open/close
  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Navigate to component
  const navigateTo = useCallback(
    (slug: string) => {
      router.push(`/components/${slug}`);
      onClose();
    },
    [router, onClose],
  );

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
      } else if (e.key === "Enter" && filtered.length > 0) {
        e.preventDefault();
        navigateTo(filtered[selectedIndex].slug);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filtered, selectedIndex, navigateTo, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200] bg-foreground/60 backdrop-blur-sm animate-in fade-in-0 duration-200"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-[201] flex items-start justify-center pt-[20vh]">
        <div className="w-[90vw] max-w-[520px] bg-background border-3 border-foreground shadow-neo-lg animate-in fade-in-0 zoom-in-95 slide-in-from-top-4 duration-200">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 border-b-3 border-foreground">
            <Search
              className="size-5 shrink-0 text-foreground"
              strokeWidth={2.5}
            />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 h-14 bg-transparent outline-none font-bold text-lg placeholder:text-foreground/40"
            />
            <button
              onClick={onClose}
              className="p-1 hover:bg-foreground/10 transition-colors"
            >
              <X className=" size-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[300px] overflow-y-auto scrollbar-hide p-2">
            {filtered.length === 0 ? (
              <div className="py-8 text-center font-bold text-foreground/50">
                No components found.
              </div>
            ) : (
              filtered.map((component, index) => (
                <button
                  key={component.slug}
                  onClick={() => navigateTo(component.slug)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-100 font-bold text-base capitalize",
                    selectedIndex === index
                      ? "bg-hero border-2 border-foreground shadow-neo-sm"
                      : "border-2 border-transparent hover:bg-hero/20",
                  )}
                >
                  <div className="size-8 bg-foreground/10 border-2 border-foreground flex items-center justify-center text-sm font-black uppercase">
                    {component.title.charAt(0)}
                  </div>
                  {component.title}
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-2 border-t-3 border-foreground bg-foreground/5">
            <div className="flex gap-2">
              <kbd className="px-2 py-0.5 text-xs font-black bg-foreground text-background border border-foreground">
                ↑↓
              </kbd>
              <span className="text-xs font-bold text-foreground/60">
                Navigate
              </span>
            </div>
            <div className="flex gap-2">
              <kbd className="px-2 py-0.5 text-xs font-black bg-foreground text-background border border-foreground">
                ↵
              </kbd>
              <span className="text-xs font-bold text-foreground/60">Open</span>
            </div>
            <div className="flex gap-2">
              <kbd className="px-2 py-0.5 text-xs font-black bg-foreground text-background border border-foreground">
                Esc
              </kbd>
              <span className="text-xs font-bold text-foreground/60">
                Close
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCommand;
