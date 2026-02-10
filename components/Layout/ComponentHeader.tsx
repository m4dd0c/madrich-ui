"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Mode, SearchBar, Social } from "./Header";

interface ComponentHeaderProps {
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
}

const ComponentHeader = ({
  onMenuClick,
  sidebarOpen,
}: ComponentHeaderProps) => {
  return (
    <div className="w-full h-16 sm:h-18 border-y-2 flex items-center border-y-black px-3 sm:px-4 lg:px-6">
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

        <SearchBar className="hidden md:flex md:justify-start w-full md:w-[300px] lg:w-[400px] xl:w-[500px]" />

        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          <Social />
          <Mode />
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;
