"use client";

import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "my projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
  {
    path: "/about",
    name: "about",
  },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {/* {link.path === pathname && <span className={`${underlineStyles}`} />} */}
            {link.path === path && <motion.span initial={{ y: "-100%" }} />}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
