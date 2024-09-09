"use-client";
import React, { useEffect, useState } from "react";

//components

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header>
      <ThemeToggler />
    </header>
  );
};

export default Header;
