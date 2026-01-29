"use client";

import React from "react";
import Preview from "./Preview";

const Example = ({
  examples,
}: {
  examples?: Record<string, { render: React.ComponentType; code: string }>;
}) => {
  if (!examples) return null;

  return (
    <div className="w-full max-w-4xl font-grotesk gap-2 mt-6 flex flex-col">
      <h1 className="text-2xl font-bold">Examples</h1>
      {Object.entries(examples).map(([key, example]) => (
        <div key={key} className="flex flex-col mt-6">
          {key !== "default" && (
            <h3 className="text-xl mb-2 font-bold capitalize">{key}</h3>
          )}
          <Preview render={example.render} code={example.code} />
        </div>
      ))}
    </div>
  );
};

export default Example;
