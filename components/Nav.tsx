import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [actualPage, setActualPage] = useState("/");
  const [refeshLogo, setRefeshLogo] = useState<Boolean>(false);
  const pages = [
    {
      page: "/",
      logo_1: "Swap",
      logo_2: "Experiences",
      logo_3: "Contact",
    },
    {
      page: "experiences",
      logo_1: "Swap",
      logo_2: "Home",
      logo_3: "Contact",
    },
    {
      page: "swap",
      logo_1: "Experiences",
      logo_2: "Home",
      logo_3: "Contact",
    },
    {
      page: "contact",
      logo_1: "Swap",
      logo_2: "Home",
      logo_3: "Experiences",
    },
  ];
  const Router = useRouter();

  useEffect(() => {
    if (Router.pathname == "/") setActualPage("/");
    if (Router.pathname == "/Contact") setActualPage("contact");
    if (Router.pathname == "/Experiences") setActualPage("experiences");
    if (Router.pathname == "/Swap") setActualPage("swap");
  }, [Router]);

  const DisplayLogo = () => {
    const toLoad = pages.filter((n) => n.page === actualPage)[0];
    return (
      <>
        <li className="logo_nav">
          <Link href={`${toLoad.logo_1}`}>
            <Image
              src={`/images/${toLoad.logo_1}.png`}
              alt={`${toLoad.logo_1}_logo`}
              width={actualPage == "swap" ? 52 : 34}
              height={actualPage == "swap" ? 51 : 56}
            />
          </Link>
        </li>
        <li className="logo_nav">
          <Link href={`${toLoad.logo_2 == "Home" ? "/" : toLoad.logo_2}`}>
            <Image
              src={`/images/${toLoad.logo_2}.png`}
              alt={`${toLoad.logo_2}_logo`}
              width={52}
              height={51}
            />
          </Link>
        </li>
        <li className="logo_nav">
          <Link href={`${toLoad.logo_3}`}>
            <Image
              src={`/images/${toLoad.logo_3}.png`}
              alt={`${toLoad.logo_3}_logo`}
              width={52}
              height={51}
            />
          </Link>
        </li>
      </>
    );
  };

  return (
    <motion.div
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="navbar">
        <ul className="navbar_logo_list">
          <DisplayLogo />
        </ul>
      </div>
    </motion.div>
  );
};

export default Nav;
