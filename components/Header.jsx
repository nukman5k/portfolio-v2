"use-client";
// import React, { useEffect, useState } from "react";

//components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto"></div>
      <ThemeToggler />
    </header>
  );
};

export default Header;
