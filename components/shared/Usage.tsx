import RenderCode from "./RenderCode";

const Usage = ({ code }: { code: string[] }) => {
  return (
    <div className="w-4xl mt-6 font-grotesk">
      <h2 className="text-2xl font-bold">Usage</h2>
      <div className="flex flex-col gap-6 mt-6 ">
        <RenderCode data={code[0]} className="shadow-neo border-2 border-foreground" />
        <RenderCode data={code[1]} className="shadow-neo border-2 border-foreground" />
        {code[2] && (
          <RenderCode
            data={code[2]}
            className="shadow-neo border-2 border-foreground"
          />
        )}
      </div>
    </div>
  );
};

export default Usage;
