import React from "react";

const Usage = ({ code }: { code: string[] }) => {
  return (
    <div className="w-3xl mt-6 font-grotesk">
      <h2 className="text-2xl font-bold">Usage</h2>
      <div className="flex flex-col gap-6 mt-6 ">
        <div className="bg-black overflow-y-auto shadow-neo border-2 border-foreground scrollbar-hide p-6 relative">
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                code[0]
              )
            }
            className="absolute right-3 top-3 bg-[#BC96D4] px-2 py-1 text-xs font-bold rounded"
          >
            Copy
          </button>

          <pre className="text-white text-sm ">
            {code[0]}
          </pre>
        </div>

         <div className="bg-black overflow-y-auto shadow-neo border-2 border-foreground scrollbar-hide p-6 relative">
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              code[1]
            )
          }
          className="absolute right-3 top-3 bg-[#BC96D4] px-2 py-1 text-xs font-bold rounded"
        >
          Copy
        </button>

        <pre className="text-white text-sm ">
          {code[1]}
        </pre>
      </div>
      </div>
    </div>
  );
};

export default Usage;
