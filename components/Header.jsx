"use-client";
// import React, { useEffect, useState } from "react";

//components
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto"></div>
      <div className="flex justify-between items-center">
        <Logo />
        <div>
          {/* nav */}
          <Nav />
          <ThemeToggler />
          {/* mobile nav */}
          <div className="">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
