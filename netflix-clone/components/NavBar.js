import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BiPowerOff } from "react-icons/bi";
import Link from "next/link";
import { Magic } from "magic-sdk";

import styles from "../styles/navbar.module.css";
import logo from "../public/assets/logo.png";
import { useRouter } from "next/router";

const NavBar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [user, setUser] = useState("");
  const [magic, setMagic] = useState("");

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await magic.user.logout();
      router.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY);
      setMagic(magic);
      const response = await magic.user.getMetadata();
      setUser(response);
    };

    getUser();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    });
  }, []);

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
        <p>{user.email}</p>
        <button type="button" onClick={handleLogout} className={styles.logout}>
          <BiPowerOff fontSize={"2.5rem"} className={styles.powerOff} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
