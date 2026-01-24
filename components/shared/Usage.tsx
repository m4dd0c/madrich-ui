import React from "react";

const Usage = ({ code }: { code: string[] }) => {
  return (
    <div>
      Usage,
      <code>{code[0]}</code>
    </div>
  );
};

export default Usage;
