import React from "react";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="h-12 bg-p-1 w-full fixed top-0 z-[999]">
      <div className="h-full flex text-center items-center justify-center">
        <div
          className="box-border bg-slate-100 p-1 text-p-1 font-semibold rounded-sm cursor-pointer"
          onClick={scrollToTop}
        >
          Hanlon Labs Events
        </div>
      </div>
    </header>
  );
};

export default Header;
