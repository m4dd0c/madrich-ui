import LeftSidebar from "@/components/Layout/LeftSidebar";
import RightSidebar from "@/components/Layout/RightSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen justify-between overflow-y-auto">
      <LeftSidebar />
      {children}
      <RightSidebar />
    </main>
  );
};

export default layout;
