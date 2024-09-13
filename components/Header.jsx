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
        <div className="flex items-center gap-x-6">
          {/* nav */}
          <Nav containerStyles="hidden lg:flex xl:flex gap-x-8 items-center" />
          <ThemeToggler />
          {/* mobile nav */}
          <div className="lg:hidden xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
