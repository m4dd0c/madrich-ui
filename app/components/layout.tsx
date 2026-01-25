import LeftSidebar from "@/components/Layout/LeftSidebar";
import RightSidebar from "@/components/Layout/RightSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex pt-18 min-h-screen justify-between">
      <LeftSidebar />
      {children}
      <RightSidebar />
    </main>
  );
};

export default layout;