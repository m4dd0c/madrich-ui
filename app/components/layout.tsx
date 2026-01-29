import ComponentHeader from "@/components/Layout/ComponentHeader";
import Footer from "@/components/Layout/Footer";
import LeftSidebar from "@/components/Layout/LeftSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex h-screen w-full overflow-hidden bg-[#F4F4F0]">
        <LeftSidebar />
        <div className="flex flex-col w-full">
          <ComponentHeader />
          {/* center div */}
          <article className="flex-1 h-full overflow-y-auto">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default layout;
