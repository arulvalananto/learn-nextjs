import React from "react";

import styles from "../styles/card.module.css";

const sizes = {
  small: {
    width: "250px",
    height: "150px",
    minWidth: "250px",
  },
  medium: {
    width: "200px",
    minWidth: "200px",
    height: "250px",
  },
  large: {
    width: "200px",
    minWidth: "200px",
    height: "350px",
  },
};

const Card = ({ size, imageUrl }) => {
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundClip: "border-box",
        ...sizes[size],
      }}
    ></div>
  );
};

export default Card;
