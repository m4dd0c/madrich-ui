"use client"

import React from "react";
import { useState } from "react";


interface CLI {
  pnpm: string;
  npm: string;
  bun: string;
  yarn: string;
}

const Installation = ({ cli, code }: { cli: CLI; code: string }) => {
  const [activeMain, setActiveMain] = useState<"cli" | "manual">("cli");
  const [activeCli, setActiveCli] = useState<keyof CLI>("pnpm");

  return (
    <div className="w-3xl mt-6 font-grotesk">
      <h2 className="text-2xl font-bold font-grotesk">Installation</h2>
      <div className="border-2 shadow-neo mt-6 border-foreground bg-background">
        <div className="flex border-b-2 border-foreground">
          <button
            onClick={() => setActiveMain("cli")}
            className={`w-1/2 py-3 font-bold border-r-2 border-foreground
          ${activeMain === "cli" ? "bg-hero" : "bg-background"}`}
          >
            CLI
          </button>
          <button
            onClick={() => setActiveMain("manual")}
            className={`w-1/2 py-3 font-bold
          ${activeMain === "manual" ? "bg-hero" : "bg-background"}`}
          >
            Manual
          </button>
        </div>


        {activeMain === "cli" && (
          <div className="w-full">
            <div className="grid grid-cols-4 border-b-2 border-foreground w-full">
              {Object.keys(cli).map((tool) => (
                <button
                  key={tool}
                  onClick={() => setActiveCli(tool as keyof CLI)}
                  className={`py-2 font-semibold border-r-2 border-foreground last:border-r-0
          ${activeCli === tool ? "bg-hero" : "bg-background"}`}
                >
                  {tool}
                </button>
              ))}
            </div>


            <div className="bg-black p-4 relative w-full">
              <button
                onClick={() => navigator.clipboard.writeText(cli[activeCli])}
                className="absolute right-3 top-3 bg-hero px-2 py-1 text-xs font-bold rounded"
              >
                Copy
              </button>
              <pre className="text-white text-sm w-full overflow-x-auto">
                {cli[activeCli]}
              </pre>
            </div>
          </div>
        )}

        {activeMain === "manual" && (
          <div className="h-[296px] bg-black overflow-y-auto scrollbar-hide p-6 relative">
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  code
                )
              }
              className="absolute right-3 top-3 bg-hero px-2 py-1 text-xs font-bold rounded"
            >
              Copy
            </button>

            <pre className="text-white text-sm ">
              {code}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
