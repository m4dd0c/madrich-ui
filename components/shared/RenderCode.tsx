"use client";

import { useEffect, useState, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const RenderCode = ({ data, className }: { data: string; className?: string }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [data]);

  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("group relative w-full overflow-hidden pl-4 bg-[#2d2d2d]", className)}>
      <button
        onClick={handleCopy}
        className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-zinc-400 opacity-0 transition-opacity hover:bg-zinc-800 hover:text-zinc-50 focus:opacity-100 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <pre className="language-jsx scrollbar-hide max-h-[350px] overflow-y-auto w-full overflow-auto p-4 text-sm">
        <code ref={codeRef} className="language-jsx">{data}</code>
      </pre>
    </div>
  );
};

export default RenderCode;
