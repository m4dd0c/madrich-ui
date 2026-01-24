import React, { ComponentType } from "react";
import RenderCode from "./RenderCode";

const Preview = ({ render, code }: { render: ComponentType; code: string }) => {
  return (
    <div>
      <RenderCode data={code} />
    </div>
  );
};

export default Preview;
