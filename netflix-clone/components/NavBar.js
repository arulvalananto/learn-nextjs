import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BiPowerOff } from "react-icons/bi";
import Link from "next/link";

import styles from "../styles/navbar.module.css";
import logo from "../public/assets/logo.png";

const NavBar = ({ email }) => {
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    });
  }, []);

  console.log(changeColor);

  return (
    <div className={changeColor ? styles.container1 : styles.container}>
      <div className={styles.left}>
        <Image
          src={logo}
          alt="Netflix"
          width={150}
          height={40}
          objectFit="contain"
        />
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/my-list">My List</Link>
        </div>
      </div>
      <div className={styles.right}>
        <p>{email}</p>
        <Link href="/signin">
          <a>
            <BiPowerOff fontSize={"2.5rem"} className={styles.powerOff} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
