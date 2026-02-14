"use client";

import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import SearchCommand from "./SearchCommand";

const links = [
  {
    name: "Components",
    href: "/components/Accordion",
  },
  {
    name: "Docs",
    href: "#",
  },
  {
    name: "Templates",
    href: "#",
  },
  {
    name: "Showcase",
    href: "#",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ⌘K / Ctrl+K shortcut to open search
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed z-[100] w-full h-18 md:h-[85px] font-grotesk flex items-center justify-between px-4 md:px-8 bg-background border-b-[3px] border-foreground shadow-[0_4px_0_0_hsl(var(--foreground))]">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-md  md:text-lg lg:text-xl bg-background font-bold  cursor-pointer border-[3px] border-foreground p-1.5 px-3 shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150  tracking-wide">
              Madrich UI
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-bold text-base lg:text-lg text-foreground px-4 py-1 border-[3px] border-transparent hover:border-foreground hover:bg-hero transition-all duration-150 uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-4">
          <Social />
          <SearchBar
            className="hidden lg:flex w-[200px] xl:w-[280px]"
            onClick={() => setIsSearchOpen(true)}
          />
          <Mode />
        </div>

        {/* Mobile Right Section */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer border-[3px] border-foreground p-2 text-foreground bg-background shadow-neo size-[38px] flex items-center justify-center hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
            aria-label="Search"
          >
            <Search size={25} strokeWidth={3.5} />
          </button>
          <Mode />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "relative cursor-pointer border-[3px] border-foreground p-2 text-foreground size-[44px] flex items-center justify-center transition-all duration-150",
              isMenuOpen
                ? "bg-[#FF6B6B] shadow-neo"
                : "bg-[#FFE566] shadow-neo",
            )}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-5">
              <Menu
                className={cn(
                  "absolute inset-0 transition-all duration-200",
                  isMenuOpen
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100",
                )}
                size={20}
                strokeWidth={3}
              />
              <X
                className={cn(
                  "absolute inset-0 transition-all duration-200",
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0",
                )}
                size={20}
                strokeWidth={3}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/60 z-[90] md:hidden transition-opacity duration-300 backdrop-blur-sm",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <nav
        className={cn(
          "fixed top-16 right-0 w-[300px] sm:w-[340px] h-[calc(100vh-64px)] bg-background border-l-[3px] border-foreground z-[95] md:hidden transition-transform duration-300 ease-out overflow-y-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col p-6 space-y-4">
          <div className="space-y-3">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block py-3 px-5 bg-hero rounded-sm font-black text-lg text-foreground border-[3px] border-foreground shadow-neo hover:shadow-none  hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 uppercase tracking-wide",
                  "transform",
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0",
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 75 + 100}ms` : "0ms",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t-[3px] border-foreground mt-4">
            <p className="text-sm font-black text-foreground uppercase tracking-widest mb-4">
              Follow us
            </p>
            <Social />
          </div>

          <div className="mt-auto pt-8">
            <div className="w-full h-4 bg-[repeating-linear-gradient(90deg,hsl(var(--foreground)),hsl(var(--foreground))_10px,transparent_10px,transparent_20px)] opacity-20" />
          </div>
        </div>
      </nav>

      {/* Global Search Command Dialog */}
      <SearchCommand
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Header;

export const Mode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-hero border-[3px] border-foreground p-2 shadow-neo size-[38px] md:size-[42px]" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="transition-all relative cursor-pointer bg-hero border-[3px] border-foreground p-2 text-foreground shadow-neo size-[38px] md:size-[42px] flex items-center justify-center hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] duration-150"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <Sun
        className={cn(
          "absolute transition-all duration-200",
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0",
        )}
        width={20}
        height={20}
        strokeWidth={2.5}
      />
      <Moon
        className={cn(
          "absolute transition-all duration-200",
          theme === "dark"
            ? "opacity-0 -rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100",
        )}
        width={20}
        height={20}
        strokeWidth={2.5}
      />
    </button>
  );
};

export const Social = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link
        href="https://x.com/h4rich_"
        target="_blank"
        className="cursor-pointer border-[3px] bg-background border-foreground p-2 shadow-neo size-[38px] md:size-[42px] grid place-items-center hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
        aria-label="Twitter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-twitter-x fill-foreground"
          viewBox="0 0 16 16"
          id="Twitter-X--Streamline-Bootstrap"
          height="18"
          width="18"
        >
          <desc>Twitter X Streamline Icon: https://streamlinehq.com</desc>
          <path
            d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
            strokeWidth="1"
          ></path>
        </svg>
      </Link>
      <Link
        href="https://github.com/h4rich"
        target="_blank"
        className="cursor-pointer bg-background border-[3px] border-foreground p-2 shadow-neo size-[38px] md:size-[42px] grid place-items-center hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
        aria-label="GitHub"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="Github--Streamline-Simple-Icons"
          height="18"
          width="18"
        >
          <desc>Github Streamline Icon: https://streamlinehq.com</desc>
          <title>GitHub</title>
          <path
            className="fill-foreground"
            d="M12 0.297c-6.63 0 -12 5.373 -12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82 -0.258 0.82 -0.577 0 -0.285 -0.01 -1.04 -0.015 -2.04 -3.338 0.724 -4.042 -1.61 -4.042 -1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087 -0.744 0.084 -0.729 0.084 -0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495 0.998 0.108 -0.776 0.417 -1.305 0.76 -1.605 -2.665 -0.3 -5.466 -1.332 -5.466 -5.93 0 -1.31 0.465 -2.38 1.235 -3.22 -0.135 -0.303 -0.54 -1.523 0.105 -3.176 0 0 1.005 -0.322 3.3 1.23 0.96 -0.267 1.98 -0.399 3 -0.405 1.02 0.006 2.04 0.138 3 0.405 2.28 -1.552 3.285 -1.23 3.285 -1.23 0.645 1.653 0.24 2.873 0.12 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61 -2.805 5.625 -5.475 5.92 0.42 0.36 0.81 1.096 0.81 2.22 0 1.606 -0.015 2.896 -0.015 3.286 0 0.315 0.21 0.69 0.825 0.57C20.565 22.092 24 17.592 24 12.297c0 -6.627 -5.373 -12 -12 -12"
            strokeWidth="1"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export const SearchBar = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center justify-between bg-background space-x-2 border-[3px] border-foreground h-[38px] md:h-[42px] px-3 shadow-neo overflow-hidden hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 cursor-pointer",
        className,
      )}
    >
      <Search
        size={20}
        className="flex-shrink-0 text-foreground"
        strokeWidth={2.5}
      />
      <span className="w-full text-foreground/60 font-medium select-none">
        Search...
      </span>
      <kbd className="hidden xl:flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-foreground text-background border border-foreground">
        ⌘ K
      </kbd>
    </div>
  );
};
