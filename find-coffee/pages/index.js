import Head from "next/head";
import { useContext, useEffect } from "react";

import Banner from "../components/Banner";
import Card from "../components/Card";
import { fetchCoffeeStores } from "../lib/coffee-stores";
// import coffeeStores from "../public/coffee-store.json";
import { StoreContext } from "./_app";

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores();

  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home({ coffeeStores }) {
  const handleClick = () => {};

  const { state, dispatch } = useContext(StoreContext);

  // useEffect(() => {
  //   if (latLong) {
  //     const fetchCoffeeStores = async () => {
  //       // fetch("/api/get") this is one created from API module in next.js only call this in client side rendering and not sever side rendering like getStaticProps
  //     };
  //     fetchCoffeeStores();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [latLong]);

  return (
    <div className="">
      <Head>
        <title>Find Your Coffee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner handleClick={handleClick} />
      {coffeeStores.length > 0 && (
        <h2 className="px-10 text-3xl font-bold">Coffee Stores</h2>
      )}
      <div className="p-10 flex items-center justify-between gap-5 flex-wrap">
        {/* {coffeeStores.map(({ id, name, imageUrl }) => (
          <Card
            key={id}
            name={name}
            imageUrl={imageUrl}
            href={`/coffee-store/${id}`}
          />
        ))} */}
      </div>
    </div>
  );
}
