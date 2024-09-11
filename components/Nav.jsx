'use client';

import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "my projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact"
  },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.path} className={`capitalize ${linkStyles}`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav