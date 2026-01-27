import LeftSidebar from "@/components/Layout/LeftSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      <LeftSidebar />
      {/* center div */}
      <article className="flex-1 h-full overflow-y-auto pt-18">{children}</article>
    </main>
  );
};

export default layout;
