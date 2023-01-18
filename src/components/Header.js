import React from "react";

const Header = () => {
  return (
    <header className="h-12 bg-p-1 w-full fixed top-0 z-[999]">
      <div className="h-full flex text-center items-center justify-center">
        <div className="box-border bg-slate-100 p-1 text-p-1 font-semibold rounded-sm">
          Hanlon Labs Events
        </div>
      </div>
    </header>
  );
};

export default Header;
