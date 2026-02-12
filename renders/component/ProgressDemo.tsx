"use client";

import * as React from "react";
import { Progress } from "@/registry/new-york/ui/progress";

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(66);

  return (
    <>
      <Progress value={progress} onChange={setProgress} className="w-[400px]" />
    </>
  );
};

export default ProgressDemo;
