import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ name, imageUrl, href }) => {
  return (
    <Link href={href} scroll={true}>
      <a className="rounded overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width="390px"
          height="250px"
          className="object-cover transform hover:scale-105 duration-1000"
        />
      </a>
    </Link>
  );
};

export default Card;
