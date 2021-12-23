import React, { useEffect, useRef, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import Card from "./Card";
import styles from "../styles/showcase.module.css";

const Showcase = ({ title, size, data }) => {
  const showcaseRef = useRef();

  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);

  useEffect(() => {
    setHideLeft(showcaseRef.current.scrollLeft > 0);
  }, []);

  const handleScroll = async (scrollOffset) => {
    showcaseRef.current.scrollLeft += scrollOffset;

    setHideLeft(showcaseRef.current.scrollLeft + scrollOffset > 0);
    setHideRight(
      Math.ceil(showcaseRef.current.scrollLeft) ===
        showcaseRef.current.scrollWidth - showcaseRef.current.clientWidth
    );
  };

  if (!data) return null;

  return (
    <div className={styles.container}>
      <h1 className={styles.showcaseTitle}>{title}</h1>
      <div className={styles.showcase} ref={showcaseRef}>
        {hideLeft && (
          <button
            type="button"
            onClick={() => handleScroll(-500)}
            className={styles.leftButton}
            style={{
              height: `${
                size === "small"
                  ? "150px"
                  : size === "medium"
                  ? "250px"
                  : size === "large"
                  ? "350px"
                  : "30px"
              }`,
            }}
          >
            <AiOutlineLeft fontSize={"2em"} />
          </button>
        )}
        {data?.map(({ image, id }) => (
          <Card size={size} imageUrl={image} key={id} />
        ))}
        {!hideRight && (
          <button
            type="button"
            className={styles.rightButton}
            onClick={() => handleScroll(500)}
            style={{
              height: `${
                size === "small"
                  ? "150px"
                  : size === "medium"
                  ? "250px"
                  : size === "large"
                  ? "350px"
                  : "30px"
              }`,
            }}
          >
            <AiOutlineRight fontSize={"2em"} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Showcase;
