import React from "react";
import About from "./About";
import Events from "./Events";

const Body = () => {
  return (
    <div className="px-16 md:px-32 lg:px-48 py-8 h-auto">
      <About />
      <Events />
    </div>
  );
};

export default Body;
