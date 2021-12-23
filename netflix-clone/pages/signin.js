import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Magic } from "magic-sdk";

import logo from "../public/assets/logo.png";
import styles from "../styles/signin.module.css";
import { useRouter } from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [magic, setMagic] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const response = await magic.auth.loginWithMagicLink({ email });
      if (response) router.push("/");

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setMagic(new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY));
  }, []);

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
          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? "Loading" : "Signin"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
