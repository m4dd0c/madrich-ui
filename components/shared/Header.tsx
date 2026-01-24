import React from "react";

const Header = ({ title, excerpt }: { title: string; excerpt: string }) => {
  return (
    <div>
      {title}
      <br /> {excerpt}
    </div>
  );
};

export default Header;
