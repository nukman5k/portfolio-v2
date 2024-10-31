"use client";

import Link from "next/link";
import { RiLinkedinFill, RiGithubFill, RiSpotifyFill } from "react-icons/ri";


const icons = [
  {
    path: "https://www.linkedin.com/in/ndakunene/",
    icon: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/ndakunene",
    icon: <RiGithubFill />,
  },
  {
    path: "https://open.spotify.com/user/ndakunene",
    icon: <RiSpotifyFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.icon}</div>
          </Link>
        );
      })}

    </div>
  );
}

export default Socials;