"use client";
// import React, { useEffect } from "react";
// import Prism from "prismjs";

// import "prismjs/components/prism-jsx";
// import "prismjs/plugins/line-numbers/prism-line-numbers.js";
// import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const RenderCode = ({ data }: { data: string }) => {
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, [data]);

  return (
    <div className="w-full">
      <pre className="language-jsx line-numbers">
        <code>{data}</code>
      </pre>
    </div>
  );
};

export default RenderCode;
