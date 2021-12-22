import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { FaLocationArrow } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import coffeeStores from "../../public/coffee-store.json";
import Image from "next/image";

export async function getStaticPaths() {
  return {
    paths: coffeeStores.map((store) => ({
      params: {
        id: store.id,
      },
    })),
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStores.find(
        (coffeeStore) => coffeeStore.id === params.id
      ),
    },
  };
}

const CoffeeStore = ({
  coffeeStore: { address, name, neighborhood, imageUrl, count },
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading....</p>;
  }

  return (
    <div className="p-10">
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/" passHref>
        <a className="px-4 py-2 bg-secondary text-white w-36">Back to home</a>
      </Link>
      <div className="my-10 pb-5 bg-white bg-opacity-40 rounded overflow-hidden">
        <Image
          src={imageUrl}
          width="1250px"
          height="650px"
          objectFit="cover"
          alt={name}
        />
        <p className="text-xl sm:text-5xl p-3 text-black font-bold uppercase">
          {name}
        </p>
        <p className="text-lg px-5 mb-2 text-gray-800 flex items-center gap-2">
          <span>
            <FaLocationArrow />
          </span>
          <span className="underline underline-offset-2 decoration-primary">
            {neighborhood}
          </span>
        </p>
        <p className="text-lg px-5 mb-2 text-gray-800 flex items-center gap-2">
          <span>
            <FcLike />
          </span>
          <span>{count}</span>
        </p>
        <button
          type="button"
          className="bg-secondary px-8 py-3 mx-5 my-2 text-lg"
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default CoffeeStore;
