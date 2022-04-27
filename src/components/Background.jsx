import React from "react";

const Background = ({ children }) => {
  return (
    <div className="bg-white dark:bg-[#404347] transition-all h-full w-full">
      {children}
    </div>
  );
};

export default Background;
