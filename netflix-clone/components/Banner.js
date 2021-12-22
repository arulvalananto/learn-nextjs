import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

import styles from "../styles/banner.module.css";

const Banner = ({ title, subtitle, imageUrl }) => {
  return (
    <div
      style={{
        background: `url(${imageUrl})`,
        width: "100vw",
        height: "95vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3rem",
        boxShadow: "20px 20px 80px #333333 inset",
      }}
    >
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <button type="button" className={styles.button}>
        <BsFillPlayFill fontSize={"2em"} />
        <span>Play</span>
      </button>
    </div>
  );
};

export default Banner;
