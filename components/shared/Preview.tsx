"use client"

import React, { ComponentType } from "react";
import { useState } from "react";
import RenderCode from "./RenderCode";
import { Component } from "react";

const Preview = ({ render: RenderComponent, code }: { render: ComponentType; code: string }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="w-full shadow-neo font-grotesk mt-6 max-w-3xl h-[350px] border-2 border-foreground bg-background flex flex-col">

      <div className="flex border-b-2 border-foreground shrink-0">
        <button
          onClick={() => setActiveTab("preview")}
          className={`w-1/2 py-3 font-bold text-center border-r-2 border-foreground
      ${activeTab === "preview" ? "bg-[#BC96D4] text-black" : "bg-white text-black"}
      `}
        >
          Preview
        </button>

        <button
          onClick={() => setActiveTab("code")}
          className={`w-1/2 py-3 font-bold text-center
      ${activeTab === "code" ? "bg-[#BC96D4] text-black" : "bg-white text-black"}
      `}
        >
          Code
        </button>
      </div>


      <div className="flex-1 overflow-y-auto  scrollbar-hide bg-grid flex items-center justify-center relative">
        {activeTab === "preview" && (
          <div className="w-full flex items-center justify-center">
            <RenderComponent />
          </div>
        )}

        {activeTab === "code" && (
          <div className="relative w-full h-full">
            <button
              onClick={() => navigator.clipboard.writeText(code)}
              className="absolute top-3 right-3 bg-[#BC96D4] px-2 py-1 text-xs font-bold rounded"
            >
              Copy
            </button>

            <pre className="bg-black text-white p-6 text-sm w-full h-full overflow-x-auto scrollbar-hide">
              {code}
            </pre>
          </div>
        )}

      </div>
    </div>


  );
};

export default Preview;
