import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";

import logo from "../public/assets/logo.png";
import styles from "../styles/signin.module.css";
import { useRouter } from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Chill with netflix" />
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={logo}
            alt="Netflix"
            width={150}
            height={50}
            objectFit="contain"
          />
        </div>
        <form className={styles.card} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>Sign In</h1>
          <input
            type="email"
            className={styles.input}
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>
            Signin
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
