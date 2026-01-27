import React from "react";

const Header = ({ title, excerpt }: { title: string; excerpt: string }) => {
  return (
    <div className="flex flex-col font-grotesk gap-4 w-3xl">
      <h1 className="text-3xl font-bold ">{title}</h1>
       <p className="text-lg font-semibold">{excerpt}</p>
    </div>
  );
};

export default Header;
