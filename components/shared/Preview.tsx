"use client"

import React, { ComponentType } from "react";
import { useState } from "react";
import RenderCode from "./RenderCode";

const Preview = ({ render: RenderComponent, code }: { render: ComponentType; code: string }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="w-full shadow-neo font-grotesk mt-4 max-w-4xl h-[350px] border-2 border-foreground bg-background flex flex-col">

      <div className="flex border-b-2 border-foreground shrink-0">
        <button
          onClick={() => setActiveTab("preview")}
          className={`w-1/2 py-3 font-bold text-center border-r-2 border-foreground
      ${activeTab === "preview" ? "bg-hero text-black" : "bg-white text-black"}
      `}
        >
          Preview
        </button>

        <button
          onClick={() => setActiveTab("code")}
          className={`w-1/2 py-3 font-bold text-center
      ${activeTab === "code" ? "bg-hero text-black" : "bg-white text-black"}
      `}
        >
          Code
        </button>
      </div>


      <div className={`flex-1 overflow-y-auto scrollbar-hide bg-grid flex relative ${activeTab === 'preview' ? 'items-center justify-center' : ''}`}>
        {activeTab === "preview" && (
          <div className="w-full flex items-center justify-center">
            <RenderComponent />
          </div>
        )}  

        {activeTab === "code" && (
          <RenderCode data={code} />
        )}

      </div>
    </div>


  );
};

export default Preview;
