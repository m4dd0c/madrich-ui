"use client";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Mode, SearchBar, Social } from "./Header";
import SearchCommand from "./SearchCommand";

interface ComponentHeaderProps {
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
}

const ComponentHeader = ({
  onMenuClick,
  sidebarOpen,
}: ComponentHeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="w-full h-20 border-y-3 flex items-center border-y-foreground px-3 sm:px-4 lg:px-6">
        <div className="w-full max-w-[95rem] mx-auto flex justify-between items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile menu button */}
            {onMenuClick && (
              <button
                onClick={onMenuClick}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                aria-label="Toggle menu"
              >
                {sidebarOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5 " size={20} strokeWidth={3} />
                )}
              </button>
            )}
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
              <span className="lg:inline-block hidden">Components</span>
              <Link href="/" className="lg:hidden inline-block">
                Madrich UI
              </Link>
            </h1>
          </div>

          <SearchBar
            className="hidden md:flex md:justify-start w-full md:w-[300px] lg:w-[400px] xl:w-[500px]"
            onClick={() => setIsSearchOpen(true)}
          />

          <div className="flex items-center space-x-4">
            {/* Mobile search icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden cursor-pointer border-[3px] border-foreground p-2 text-foreground bg-background shadow-neo size-[38px] flex items-center justify-center hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={2.5} />
            </button>
            <div className="hidden sm:flex">
              <Social />
            </div>
            <Mode />
          </div>
        </div>
      </div>

      {/* Global Search Command Dialog */}
      <SearchCommand
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default ComponentHeader;
