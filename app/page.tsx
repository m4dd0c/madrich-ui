import Checkbox from "@/registry/new-york/ui/checkbox";
import Switch from "@/registry/new-york/ui/switch";
import * as React from "react";

export default function Home() {
  return (
    <>
    <div className="h-screen w-full flex items-center flex-col gap-10 justify-center">
          <Checkbox />
          <Switch />
    </div>
    </>
  );
}
