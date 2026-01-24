import React from "react";
import RenderCode from "./RenderCode";

interface CLI {
  pnpm: string;
  npm: string;
  bun: string;
  yarn: string;
}

const Installation = ({ cli, code }: { cli: CLI; code: string }) => {
  return (
    <div>
      Installation, <br /> {cli.bun}, <br />
      <RenderCode data={code} />
    </div>
  );
};

export default Installation;
