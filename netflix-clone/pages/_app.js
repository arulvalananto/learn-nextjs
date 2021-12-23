import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.development";
import "../styles/globals.css";
import { Magic } from "magic-sdk";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY);

    const isLoggedIn = async () => {
      try {
        const isLoggedIn = await magic.user.isLoggedIn();
        if (isLoggedIn) router.push("/");
        else router.push("/signin");
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    isLoggedIn();
  });

  return isLoading ? "Loading" : <Component {...pageProps} />;
}

export default MyApp;
